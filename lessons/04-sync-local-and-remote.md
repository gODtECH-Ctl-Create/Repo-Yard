# Lesson 04 — Pull, Push, and Sync

Git does not automatically synchronize your computer with GitHub. You decide when information moves.

## Push

`git push` sends local commits to a remote repository.

```bash
git push
```

## Pull

`git pull` brings remote changes into your current local branch.

```bash
git pull
```

## Fetch

`git fetch` downloads information about the remote without changing your working files.

```bash
git fetch origin
```

## Check where everything is

```bash
git status
git remote -v
git branch -vv
```

## A safe daily rhythm

Before starting work:

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

Do not blindly run `git pull` when you do not understand what branch you are on.

**Success condition:** explain the difference between `fetch`, `pull`, and `push`.
