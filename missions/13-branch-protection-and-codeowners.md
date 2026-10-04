# Mission 13 — Protect the Repository

## 🧰 What you need

- A GitHub repository where you have permission to change repository rules.
- GitHub in a browser.
- Git + an editor for the CODEOWNERS change.

Recommended: VS Code + integrated terminal. See [START-HERE.md](../START-HERE.md).

## 📍 Where you work

Configure branch protection/rules in the repository's **GitHub Settings/Rules** area. Create the CODEOWNERS file on **your computer**, then push it through a PR.


## 🎯 Objective

Use repository governance to make unsafe changes harder.

## 🧩 Scenario

A team is growing. You need the repository to enforce rules rather than relying only on memory.

## 📋 Tasks

1. Enable protection for the default branch in your practice repository.
2. Require Pull Requests before merging.
3. Require the appropriate status checks.
4. Add a `.github/CODEOWNERS` file for one meaningful area.
5. Open a Pull Request that exercises the rule.
6. Put `Mission: M13` in the PR body.
7. Inspect the result and explain what GitHub enforced.

## ✅ Success condition

You can demonstrate a protected default branch and a meaningful CODEOWNERS rule.

## 🔎 Evidence

Link the Pull Request and repository settings evidence. Screenshots are acceptable where the API does not expose the needed setting to RYOS.

## 🤖 Verification

RYOS can verify repository files, Pull Requests and workflow evidence. Settings that are not exposed to the current automation scope may require maintainer review.

**Reward:** +200 XP

**Next:** [Mission 14 — Ship and Maintain](14-release-and-maintenance.md)