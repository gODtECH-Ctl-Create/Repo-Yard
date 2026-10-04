# Lesson 12 — GitHub Actions

GitHub Actions is GitHub's automation system. It can run checks, react to repository events and perform repository operations.

## Before you start

Open a GitHub repository you can safely experiment in. You will work in the `.github/workflows/` directory.

## Where do workflows live?

Workflow files are YAML files stored under:

```text
.github/workflows/
```

GitHub reads those files and uses them to decide when and how automation should run.

## What is a workflow?

A workflow normally has a name, triggers (`on`), permissions, jobs and steps.

Example:

```yaml
name: Checks

on:
  pull_request:

permissions:
  contents: read

jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: echo "run a check"
```

## What do the pieces mean?

**Trigger:** when the workflow starts. **Permission:** what its GitHub token may do. **Job:** a unit of work. **Step:** one action or shell command inside that job.

## Where do I see the result?

On GitHub, open **Actions** and select the workflow run. For a PR-triggered workflow, its check also appears on the Pull Request.

## Permissions

Give workflows only the permissions they need. Read-only permissions are often enough for validation.

Repo Yard uses **RYOS** for learner operations. RYOS handles Journey Issues, mission signals and achievement checks.

**Success condition:** explain the trigger, permissions, job and steps of a simple workflow, and show a real workflow run.

**Practice next:** [Mission 12 — Build a GitHub Action](../missions/12-github-actions.md)