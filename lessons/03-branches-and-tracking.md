# Lesson 03 — Branches and Tracking

A branch is a movable line of development.

Think of it as opening a separate work table in the same workshop. You can change things there without changing `main`.

## See your branches

```bash
git branch
```

The branch with `*` is your current branch.

## Create a branch

```bash
git switch -c feat/my-first-branch
git status
```

## Move between branches

```bash
git switch main
git switch feat/my-first-branch
```

## Publish the branch

The first push normally sets the remote tracking relationship:

```bash
git push -u origin feat/my-first-branch
```

After that, `git push` and `git pull` can know which remote branch to use.

## Mental model

```text
local branch
    │
    └── tracks ──→ origin/branch
                         │
                         ▼
                       GitHub
```

The name `origin` is a conventional remote name, not a special Git server.

## Practice

Create a branch, make one small change, commit it, push it, then switch back to `main`.

**Success condition:** explain the difference between a local branch and a remote-tracking branch.
