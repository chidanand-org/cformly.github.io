# Oracle runner policy

Every repository-controlled job requires literal `[self-hosted, Linux, ARM64, oracle]` labels and an identity check before project work. An unavailable matching runner queues; there is no hosted or Mac fallback. Shared organization runners additionally select group `Default`. Isolated product labels are defined by existing guest admission preparations and are not evidence of an admitted runner.

Run locally with Python and the pinned parser:

```sh
python3 -m venv /tmp/oracle-policy-venv
/tmp/oracle-policy-venv/bin/pip install 'PyYAML==6.0.3'
/tmp/oracle-policy-venv/bin/python .github/check_runner_policy.py
/tmp/oracle-policy-venv/bin/python -m unittest discover -s .github -p test_runner_policy.py
```

The semantic guard checks all `.yml` and `.yaml` workflows, including disabled jobs. It rejects dynamic runner expressions, host-selecting matrices, unverified groups, reusable workflow jobs (including local calls), duplicate keys and YAML aliases. Matrices for tools on the fixed Oracle selector remain allowed. Reusable workflow support needs explicit review of every callee before admission. The checks detect drift; an edited workflow can schedule a hosted sibling job before this guard fails. Editable repository checks are not a scheduling boundary or an enforced merge rule.

Draft PRs do not activate this policy on default branches. Existing open PR branches must take the reviewed routing changes before merging or dispatching. Private branch protection and organization standard-hosted-runner disablement need an eligible GitHub plan; this organization is currently Free. No plan, billing, runner registration, persistent access, deployment or production setting is changed here.

GitHub-managed Pages and Dependabot workflows are outside this parser's repository-file scope. Pages currently publishes from the public repository through managed hosted jobs; Oracle custom publishing needs separate deployment and public-runner-access approval. Dependabot dynamic updates bypass ordinary Actions policy and supported self-hosted Dependabot currently requires Linux x64 plus Docker. Oracle ARM64 does not satisfy that requirement. These are unresolved enforcement gaps, not authorized exceptions.

No new public self-hosted workflow is activated: Default group forbids public repositories. Local guard files cover future repository-controlled workflows only; existing managed Pages execution remains unresolved. Do not merge/publish this PR as a claim of complete enforcement.

Job containers and unreviewed pre-step services are refused. Existing service definitions are frozen in the policy allowlist; Cformly services additionally require the blocking admission dependency. Shell startup hooks are rejected and existing explicit platform/admission blockers are protected by adverse tests.
