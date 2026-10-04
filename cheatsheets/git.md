# 🧰 Git Command Cheat Sheet

## Start

```bash
git clone <url>
cd <repo>
git status
```

## Branches

```bash
git branch
git switch -c <branch>
git switch <branch>
git branch -d <branch>
```

## Changes

```bash
git status
git diff
git add <file>
git add .
git commit -m "message"
```

## Remote

```bash
git remote -v
git pull
git push
git push -u origin <branch>
```

## History

```bash
git log --oneline
git show <commit>
```

## Recovery

```bash
git restore <file>
git restore --staged <file>
git commit --amend
git revert <commit>
git stash
git stash pop
```

Learn what a command does before using it on a real project.
