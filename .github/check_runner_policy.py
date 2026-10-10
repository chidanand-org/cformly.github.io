"""Validate every repository-controlled workflow before accepting runner changes."""
import pathlib
import sys
import yaml

# Literal selectors only: expressions (including matrices/inputs/vars) can drift
# independently of the workflow. Reusable jobs need separate reviewed support.
LABELS = ['self-hosted', 'Linux', 'ARM64', 'oracle']
GUARD = 'set -euo pipefail\ncase "$RUNNER_NAME" in\n  oracle-runner|oracle-runner-2|oracle-runner-3|oracle-runner-4) ;;\n  *) echo \'Unverified Oracle runner\' >&2; exit 1 ;;\nesac\ntest "$RUNNER_OS" = Linux\ntest "$RUNNER_ARCH" = ARM64\ntest "$RUNNER_ENVIRONMENT" = self-hosted\n'
REQUIRED_STEPS = {}
APPROVED_SERVICES = {}
SERVICE_GATES = {}
ADMISSION_REQUIRED = False

def check_shell_environment(env):
    if isinstance(env, dict) and any(key in env for key in ('BASH_ENV', 'ENV')):
        raise ValueError('shell startup hooks must not bypass runner admission')

class StrictLoader(yaml.BaseLoader):
    def construct_mapping(self, node, deep=False):
        result = {}
        for key_node, value_node in node.value:
            key = self.construct_object(key_node, deep=deep)
            if not isinstance(key, str) or key in result or key == '<<':
                raise ValueError('duplicate, non-string or merged YAML key')
            result[key] = self.construct_object(value_node, deep=deep)
        return result

def validate(source):
    if any(isinstance(token, (yaml.tokens.AliasToken, yaml.tokens.AnchorToken))
           for token in yaml.scan(source)):
        raise ValueError('YAML aliases/anchors need explicit reviewed support')
    workflow = yaml.load(source, Loader=StrictLoader)
    if not isinstance(workflow, dict) or not isinstance(workflow.get('jobs'), dict) or not workflow['jobs']:
        raise ValueError('workflow must contain jobs')
    check_shell_environment(workflow.get('env'))
    for name, job in workflow['jobs'].items():
        if not isinstance(job, dict) or 'uses' in job:
            raise ValueError(f'{name}: reusable workflows are not admitted')
        check_shell_environment(job.get('env'))
        if 'container' in job:
            raise ValueError(f'{name}: job containers start before admission and need explicit review')
        if 'services' in job and job['services'] != APPROVED_SERVICES.get(name):
            raise ValueError(f'{name}: service containers start before admission and need explicit review')
        if ADMISSION_REQUIRED and 'services' in job:
            needs = job.get('needs', [])
            needs = needs if isinstance(needs, list) else [needs]
            if 'oracle-ci-admission' not in needs or 'oracle-ci-admission' not in workflow['jobs']:
                raise ValueError(f'{name}: service startup requires the blocking CI admission dependency')
            if any(job.get(key) != value for key, value in SERVICE_GATES[name].items()):
                raise ValueError(f'{name}: service admission condition/dependencies must not be bypassed')
        selector = job.get('runs-on')
        if isinstance(selector, dict):
            if set(selector) != {'group', 'labels'} or selector['group'] != 'Default':
                raise ValueError(f'{name}: unverified runner group')
            selector = selector['labels']
        if selector != LABELS:
            raise ValueError(f'{name}: requires literal {LABELS}; no expressions or hosted fallback')
        if job.get('continue-on-error') not in (None, 'false'):
            raise ValueError(f'{name}: runner admission errors must fail the job')
        steps = job.get('steps')
        if not isinstance(steps, list) or not steps or not isinstance(steps[0], dict):
            raise ValueError(f'{name}: runner guard must precede project work')
        first = steps[0]
        for action in steps:
            if isinstance(action, dict):
                check_shell_environment(action.get('env'))
        if (first.get('id') != 'oracle-admission' or first.get('shell') != 'bash'
            or first.get('if') is not None or first.get('continue-on-error') is not None
            or not first.get('run', '').startswith(GUARD)):
            raise ValueError(f'{name}: unconditional Oracle identity guard required first')
        if name in REQUIRED_STEPS:
            for key, value in REQUIRED_STEPS[name].items():
                if first.get(key) != value:
                    raise ValueError(f'{name}: preserve the explicit platform/admission blocker ({key})')
    return len(workflow['jobs'])

def main():
    root = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else pathlib.Path(__file__).resolve().parents[1]
    directory = root / '.github/workflows'
    files = sorted(directory.glob('*.yml')) + sorted(directory.glob('*.yaml'))
    count = 0
    for path in files:
        if path.is_symlink():
            raise ValueError(f'{path}: symlink workflow is not admitted')
        try:
            count += validate(path.read_text())
        except (ValueError, yaml.YAMLError) as error:
            raise ValueError(f'{path}: {error}') from error
    print(f'Oracle runner policy: {len(files)} workflows, {count} jobs checked')

if __name__ == '__main__':
    main()
