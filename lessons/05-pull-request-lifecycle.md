# Lesson 05 — Issue to Pull Request Lifecycle

A Pull Request (PR) is a proposal to merge changes from one branch into another.

But good repository work normally starts before the PR.

## Start with an Issue

An Issue is a place to describe a problem, task, question, or proposed improvement.

For example:

```text
Issue
  ↓
Create a branch
  ↓
Make the change
  ↓
Commit
  ↓
Push
  ↓
Pull Request
```

On GitHub, select **Issues → New issue**, choose the appropriate template, and write enough context for another person to understand the work.

A useful Issue answers:

- What needs to change?
- Why does it matter?
- Where does the change belong?
- What result would count as success?

Do not create an Issue for every tiny command you run. Use Issues for work that needs to be tracked or discussed.

## Open the PR

After pushing:

```bash
git push -u origin feat/my-change
```

For an external learner:

```text
your fork branch → gODtECH-Ctl-Create/Repo-Yard:main
```

A PR is the proposal to merge that work.

## Write the PR well

A useful PR answers:

- What changed?
- Why?
- How did you test it?
- Which Issue does it close?
- Is there anything reviewers should know?

Repo Yard provides a PR template for this.

## The PR is alive

Creating a PR does not freeze the branch.

```bash
git add .
git commit -m "fix: address review feedback"
git push
```

The same PR updates automatically.

## Draft PRs

A draft PR is useful when you want early feedback before the change is ready.

## The lifecycle

```text
Issue → Branch → Local work → Commit → Push → PR → Review → Fix → Approval → Merge
```

**Success condition:** create an Issue, implement its change on a branch, and open a PR that clearly links back to that Issue.
