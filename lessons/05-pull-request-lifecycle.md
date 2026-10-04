# Lesson 05 — Pull Request Lifecycle

A Pull Request (PR) is a proposal to merge changes from one branch into another.

A PR gives a team a place to discuss, review, test, and improve a change before it reaches the target branch.

## Open the PR

After pushing:

```bash
git push -u origin feat/my-change
```

For an external learner:

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

## The PR is alive

Creating a PR does not freeze the branch.

```bash
git add .
git commit -m "fix: address review feedback"
git push
```

The same PR updates automatically.

## Draft PRs

A draft PR is useful when you want early feedback before the change is ready to merge.

## The lifecycle

```text
Issue → Branch → Local work → Commit → Push → PR → Review → Fix → Approval → Merge
```

**Success condition:** open a real PR and explain every stage from the Issue to the merge.
