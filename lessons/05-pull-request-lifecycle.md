# Lesson 05 — Pull Request Lifecycle

A **Pull Request (PR)** is a GitHub page where you propose merging changes from one branch into another. It gives people a place to discuss, review and test a change before it reaches the target branch.

## Before you start

You need a branch with at least one pushed commit. You also need access to GitHub in your browser.

## Where do I create the PR?

Open the repository on GitHub. Choose **Pull requests** → **New pull request**. Select your source branch and the target branch, usually `main`.

For a public learner working from a fork:

```text
your fork branch → gODtECH-Ctl-Create/Repo-Yard:main
```

## Write the PR well

A useful PR answers:

- What changed?
- Why?
- How did you test it?
- Which Issue does it close?
- Is there anything reviewers should know?

Put `Mission: M05` in the PR body when doing Repo Yard Mission 05. This gives RYOS a clear learning signal.

## The PR is alive

Creating a PR does not freeze the branch. You can keep working on the same branch:

```bash
git add .
git commit -m "fix: address review feedback"
git push
```

The existing PR updates automatically because it follows that branch.

## Draft PRs

A **draft PR** tells the team the work is not ready for final review yet. It is useful for early feedback.

## Lifecycle

```text
Issue → Branch → Local work → Commit → Push → PR → Review → Fix → Approval → Merge
```

**Success condition:** you can open a real PR and explain what each stage is doing.

**Practice next:** [Mission 05 — Open Your First Pull Request](../missions/05-first-pull-request.md)