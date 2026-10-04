# Lesson 04 — Pull, Push, and Sync

Git does not automatically synchronize your computer with GitHub. You choose when information moves and in which direction.

## Before you start

Work inside a local repository that already has a GitHub remote.

```bash
git remote -v
git branch -vv
```

## Push

`git push` sends commits from your local branch to a remote repository.

```bash
git push
```

Think: **my computer → GitHub**.

## Fetch

`git fetch` downloads information about the remote without merging it into your current branch.

```bash
git fetch origin
```

Think: **show me what changed on GitHub, but do not change my working branch yet**.

## Pull

`git pull` gets remote changes and integrates them into your current branch. Exactly how the integration happens depends on your Git configuration and branch state.

```bash
git pull
```

Think: **bring remote work into this local branch**.

## Check where everything is

```bash
git status
git remote -v
git branch -vv
```

## A safe daily rhythm

Before starting work on your own branch:

```bash
git switch main
git pull
git switch -c feat/my-change
```

During work:

```bash
git status
git diff
git add .
git commit -m "docs: explain the change"
git push -u origin feat/my-change
```

Do not blindly run `git pull` when you do not understand which branch you are on.

**Success condition:** explain push, fetch and pull using both words **where the information starts** and **where it ends**.

**Practice next:** [Mission 04 — Sync](../missions/04-sync.md)