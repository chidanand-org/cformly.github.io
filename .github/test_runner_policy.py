import copy
import os
import pathlib
import subprocess
import unittest
import yaml
from check_runner_policy import GUARD, LABELS, validate

class RunnerPolicyTests(unittest.TestCase):
    def setUp(self):
        self.job = {'runs-on': LABELS.copy(), 'steps': [
            {'id': 'oracle-admission', 'shell': 'bash', 'run': GUARD},
            {'uses': 'actions/checkout@' + 'a' * 40}]}

    def check(self, job):
        return validate(yaml.safe_dump({'on': 'pull_request', 'jobs': {'test': job}}))

    def test_literal_oracle_and_fixed_platform_matrix(self):
        self.assertEqual(self.check(self.job), 1)
        self.job['strategy'] = {'matrix': {'node': ['22', '24']}}
        self.assertEqual(self.check(self.job), 1)
        self.job['runs-on'] = {'group': 'Default', 'labels': LABELS.copy()}
        self.assertEqual(self.check(self.job), 1)

    def test_reject_hosted_generic_dynamic_matrix_and_groups(self):
        for selector in ['ubuntu-latest', 'macos-15', ['self-hosted', 'Linux', 'ARM64'],
                         '${{ vars.RUNNER }}', '${{ matrix.os }}',
                         "${{ fromJSON('[\"self-hosted\",\"Linux\",\"ARM64\",\"oracle\"]') }}",
                         {'group': '${{ vars.GROUP }}', 'labels': LABELS.copy()},
                         {'group': 'Default', 'labels': '${{ inputs.labels }}'}]:
            with self.subTest(selector=selector), self.assertRaises(ValueError):
                self.check({**self.job, 'runs-on': selector})

    def test_reject_local_and_remote_reusable_jobs(self):
        for uses in ['./.github/workflows/reusable.yml', 'org/repo/.github/workflows/ci.yml@' + 'a' * 40]:
            with self.subTest(uses=uses), self.assertRaises(ValueError):
                self.check({'uses': uses})

    def test_all_jobs_including_disabled_and_optional_jobs(self):
        bad = {**self.job, 'if': '${{ false }}', 'runs-on': 'ubuntu-latest'}
        with self.assertRaises(ValueError):
            validate(yaml.safe_dump({'jobs': {'good': self.job, 'bad': bad}}))
        with self.assertRaises(ValueError):
            self.check({**self.job, 'continue-on-error': True})

    def test_reject_guard_removal_reordering_skipping_or_soft_failure(self):
        for mutation in [{'if': '${{ false }}'}, {'continue-on-error': True},
                         {'run': 'echo okay'}, {'shell': 'sh'}, {'id': 'other'}]:
            job = copy.deepcopy(self.job)
            job['steps'][0].update(mutation)
            with self.subTest(mutation=mutation), self.assertRaises(ValueError):
                self.check(job)
        job = copy.deepcopy(self.job)
        job['steps'].reverse()
        with self.assertRaises(ValueError): self.check(job)

    def test_reject_duplicate_keys_aliases_and_malformed_documents(self):
        for source in ['jobs: {}\njobs: {}\n', 'jobs: [', 'jobs: &jobs {}\n',
                       'jobs:\n  test:\n    runs-on: ubuntu-latest\n    runs-on: oracle\n']:
            with self.subTest(source=source), self.assertRaises((ValueError, yaml.YAMLError)):
                validate(source)

    def test_reject_pre_step_host_work_and_shell_hooks(self):
        for mutation in [{'container': 'ubuntu:latest'},
                         {'services': {'db': {'image': 'postgres:latest', 'options': '--privileged'}}},
                         {'env': {'BASH_ENV': '/tmp/untrusted.sh'}}]:
            with self.subTest(mutation=mutation), self.assertRaises(ValueError):
                self.check({**self.job, **mutation})
        for scope in ['workflow', 'step']:
            job = copy.deepcopy(self.job)
            source = {'jobs': {'test': job}}
            if scope == 'workflow': source['env'] = {'BASH_ENV': '/tmp/untrusted.sh'}
            else: job['steps'][0]['env'] = {'BASH_ENV': '/tmp/untrusted.sh'}
            with self.subTest(scope=scope), self.assertRaises(ValueError):
                validate(yaml.safe_dump(source))

    def test_preserve_admission_and_platform_blockers(self):
        from check_runner_policy import REQUIRED_STEPS
        for name, required in REQUIRED_STEPS.items():
            job = copy.deepcopy(self.job)
            job['steps'][0].update(required)
            for key in required:
                mutated = copy.deepcopy(job)
                mutated['steps'][0][key] = GUARD if key == 'run' else {}
                if mutated['steps'][0][key] == required[key]: continue
                with self.subTest(job=name, key=key), self.assertRaises(ValueError):
                    validate(yaml.safe_dump({'jobs': {name: mutated}}))

    def test_platform_blocks_fail_even_with_correct_oracle_identity(self):
        from check_runner_policy import REQUIRED_STEPS
        base = {**os.environ, 'RUNNER_NAME': 'oracle-runner', 'RUNNER_OS': 'Linux',
                'RUNNER_ARCH': 'ARM64', 'RUNNER_ENVIRONMENT': 'self-hosted',
                'ORACLE_CI_ADMITTED': 'false'}
        for name, required in REQUIRED_STEPS.items():
            with self.subTest(job=name):
                result = subprocess.run(['bash', '-c', required['run']], env=base, capture_output=True, text=True)
                self.assertEqual(result.returncode, 1)
                self.assertIn('BLOCKED:', result.stderr)

    def test_existing_services_cannot_drift_or_bypass_admission(self):
        from check_runner_policy import ADMISSION_REQUIRED, APPROVED_SERVICES, REQUIRED_STEPS, SERVICE_GATES
        for name, services in APPROVED_SERVICES.items():
            job = copy.deepcopy(self.job)
            job['services'] = copy.deepcopy(services)
            job['steps'][0].update(REQUIRED_STEPS.get(name, {}))
            jobs = {name: job}
            if ADMISSION_REQUIRED:
                with self.assertRaises(ValueError): validate(yaml.safe_dump({'jobs': jobs}))
                job.update(SERVICE_GATES[name])
                admission = copy.deepcopy(self.job)
                admission['steps'][0].update(REQUIRED_STEPS['oracle-ci-admission'])
                jobs['oracle-ci-admission'] = admission
            self.assertEqual(validate(yaml.safe_dump({'jobs': jobs})), len(jobs))
            if ADMISSION_REQUIRED:
                mutated = copy.deepcopy(jobs)
                mutated[name]['if'] = '${{ always() }}'
                with self.assertRaises(ValueError): validate(yaml.safe_dump({'jobs': mutated}))
            first_service = next(iter(job['services'].values()))
            first_service['options'] = '--privileged'
            with self.assertRaises(ValueError): validate(yaml.safe_dump({'jobs': jobs}))

    def test_real_identity_guard_rejects_wrong_machine(self):
        base = {**os.environ, 'RUNNER_NAME': 'oracle-runner', 'RUNNER_OS': 'Linux',
                'RUNNER_ARCH': 'ARM64', 'RUNNER_ENVIRONMENT': 'self-hosted'}
        self.assertEqual(subprocess.run(['bash', '-c', GUARD], env=base, capture_output=True).returncode, 0)
        for mutation in [{'RUNNER_NAME': 'macbook-pro'}, {'RUNNER_NAME': 'oracle-runner-99'},
                         {'RUNNER_OS': 'macOS'}, {'RUNNER_ARCH': 'X64'},
                         {'RUNNER_ENVIRONMENT': 'github-hosted'}]:
            with self.subTest(mutation=mutation):
                self.assertNotEqual(subprocess.run(['bash', '-c', GUARD], env={**base, **mutation}, capture_output=True).returncode, 0)

if __name__ == '__main__':
    unittest.main()
