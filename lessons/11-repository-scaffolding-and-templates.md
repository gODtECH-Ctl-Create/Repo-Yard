# Lesson 11 — Repository Scaffolding and Templates

A professional repository is more than source code.

Scaffolding means creating structures that keep a project understandable and repeatable.

Examples:

```text
README.md
CONTRIBUTING.md
CODE_OF_CONDUCT.md
SECURITY.md
.github/
  workflows/
  ISSUE_TEMPLATE/
  pull_request_template.md
CODEOWNERS
LICENSE
docs/
scripts/
```

## Repository templates

A reusable project template should include clear README guidance, contribution rules, templates, automation, licensing, and security guidance.

## Why this matters

A new repository should not begin with an empty README and undocumented decisions.

## Practice

Inspect Repo Yard itself.

Ask:
- Why is the PR template under `.github`?
- Why are workflows under `.github/workflows`?
- Why is security guidance at the root?
- Which files help a first-time contributor?

**Success condition:** design a minimal repository scaffold another developer could use to start a project.
