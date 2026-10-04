# Lesson 13 — Branch Protection and CODEOWNERS

## 🧰 Tools & alternatives

See [START-HERE.md](../START-HERE.md) for setup links and tool choices. **Recommended:** VS Code + integrated terminal + GitHub in your browser. **Alternatives:** another editor with PowerShell, Command Prompt, Git Bash, macOS Terminal or Linux Terminal.

When a step happens locally, use your terminal/editor. When a step happens on GitHub, use the browser.

A shared repository needs rules that protect important branches and route work to the right people.

## Before you start

Open a practice repository where you have administrator-level settings access. These settings are configured in GitHub, not in your code editor.

## Branch protection: what is it?

Branch protection is a GitHub repository rule that can make certain actions mandatory before changes reach an important branch such as `main`.

Typical protections include requiring PRs, passing checks and review approval, while blocking force pushes or branch deletion.

## Where do I configure it?

On GitHub, open the repository → **Settings** → **Branches** or the repository's current **Rules/Rulesets** area, then configure protection for the branch you care about.

A protection rule is a **repository setting**. Creating a Markdown file does not activate it.

## CODEOWNERS: what is it?

A `CODEOWNERS` file tells GitHub which people or teams should be requested to review changes to particular paths.

Common location: `.github/CODEOWNERS`.

Example:

```text
/docs/       @maintainer
/.github/    @maintainer
```

The names must match real GitHub users or teams with suitable access.

## Three different jobs

- PR template → tells the author what information to provide.
- CODEOWNERS → identifies who should review certain paths.
- Branch protection → enforces rules before merging.

## Desired flow

```text
branch → PR → checks + review → merge → main
```

**Success condition:** explain why PR templates, CODEOWNERS and branch protection solve different problems.

**Practice next:** [Mission 13 — Protect the Repository](../missions/13-branch-protection-and-codeowners.md)