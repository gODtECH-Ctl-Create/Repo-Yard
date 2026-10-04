# Lesson 12 — GitHub Actions

GitHub Actions automate work triggered by repository events.

Workflow files live under `.github/workflows/`.

A workflow usually contains a name, triggers, permissions, jobs, and steps.

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

## Common triggers

- `push`
- `pull_request`
- `issues`
- `issue_comment`
- schedules
- manual dispatch

## Permissions

Give workflows only the permissions they need. Read-only is often enough for validation.

Repo Yard separates:
- content checks → validate learning material;
- RepoOps → manage Issue workflow.

**Success condition:** explain the event, permissions, job, and steps of a simple workflow.
