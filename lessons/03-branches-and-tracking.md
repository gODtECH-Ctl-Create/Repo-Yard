# Lesson 03 — Branches and Tracking

A branch is a movable line of development. Think of it as opening a separate work table in the same workshop.

## Before you start

Open a terminal **inside your local repository**. You can check this with `pwd` or `Get-Location`.

## Where do branches live?

A **local branch** lives in your local Git repository. A **remote-tracking branch** is Git's local record of a branch that exists on a remote such as GitHub.

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

After that, `git push` and `git pull` can know which remote branch to use by default.

## What is `origin`?

`origin` is simply the name Git gives to a remote when you clone a repository. It is a name, not a special kind of server.

```bash
git remote -v
```

## Mental model

```text
local branch
    │
    └── tracks ──→ origin/branch
                         │
                         ▼
                       GitHub
```

## Practice

Create a branch, make one small change, commit it, push it, then switch back to `main`. Notice that switching branches changes which branch your working files represent.

**Success condition:** you can explain the difference between a local branch, a remote branch on GitHub, and a remote-tracking branch on your computer.

**Practice next:** [Mission 03 — Branch Control](../missions/03-branch-control.md)