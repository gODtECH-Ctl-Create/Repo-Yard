# Mission 12 — Build a GitHub Action

## 🧰 What you need

- A GitHub repository where you can create a workflow.
- A browser for GitHub.
- Git + an editor for your workflow file.

Recommended: VS Code + integrated terminal. You can use another editor and terminal; see [START-HERE.md](../START-HERE.md).

## 📍 Where you work

Create the workflow file in the repository on **your computer**, push it to GitHub, then inspect the workflow run on the repository's **Actions** page.


## 🎯 Objective

Turn a repository rule into an automated check.

## 🧩 Scenario

You maintain a repository and want every Pull Request to receive a useful automated validation result.

## 📋 Tasks

1. Create a branch in your practice repository.
2. Add a small GitHub Actions workflow under `.github/workflows/`.
3. Make it run on Pull Requests.
4. Give the workflow the minimum permissions it needs.
5. Make it perform one visible check.
6. Open a Pull Request and inspect the workflow result.
7. Put `Mission: M12` in the PR body.

## ✅ Success condition

You can show a real workflow run attached to a Pull Request and explain why the workflow has its specific permissions.

## 🔎 Evidence

Link the Pull Request and workflow run.

## 🤖 Verification

GitHub can verify that the workflow exists and a run was produced. The security reasoning remains part of the learner evidence.

**Reward:** +200 XP

**Next:** [Mission 13 — Protect the Repository](13-branch-protection-and-codeowners.md)