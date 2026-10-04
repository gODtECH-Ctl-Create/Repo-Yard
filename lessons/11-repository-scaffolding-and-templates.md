# Lesson 11 — Repository Scaffolding and Templates

## 🧰 Tools & alternatives

See [START-HERE.md](../START-HERE.md) for setup links and tool choices. **Recommended:** VS Code + integrated terminal + GitHub in your browser. **Alternatives:** another editor with PowerShell, Command Prompt, Git Bash, macOS Terminal or Linux Terminal.

When a step happens locally, use your terminal/editor. When a step happens on GitHub, use the browser.

A professional repository is more than source code. It also contains the instructions and structures that help people understand, contribute to and operate the project.

## Before you start

Open Repo Yard on GitHub and browse the repository root.

## What is scaffolding?

**Scaffolding** means the initial structure that makes a project understandable and repeatable. It is the project skeleton, not the application logic.

## Where do these files live?

Common examples include:

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

## What is a repository template?

A **repository template** is a prepared project starting point that another developer can copy when creating a new repository. It can include documentation, contribution rules, automation and useful defaults.

## Why this matters

A new repository should not force every contributor to guess how it works.

## Practice

Inspect Repo Yard itself. Ask:

- Why is the PR template under `.github`?
- Why are workflows under `.github/workflows`?
- Why is security guidance at the root?
- Which files help a first-time contributor?
- Which files are instructions for humans and which are instructions for automation?

**Success condition:** design a minimal repository scaffold another developer could use to start a project and explain the purpose of each major part.

**Practice next:** [Mission 11 — Repository Blueprint](../missions/11-actions-and-protection.md)