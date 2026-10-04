# Mission 04 — Synchronize Local and Remote

## Goal

## 🧰 What you need

A local Git repository connected to GitHub, plus a terminal and editor. Recommended: VS Code + integrated terminal. You can use PowerShell, Git Bash, Command Prompt or another editor instead.

See [START-HERE.md](../START-HERE.md) for the tool choices.

## 📍 Where you work

Run Git commands in the local repository on your computer. GitHub is the remote location you are synchronizing with.


Understand `fetch`, `pull`, and `push`.

## Do

```bash
git switch -c lab/sync-practice
```

Make a small documentation change, then:

```bash
git status
git diff
git add .
git commit -m "docs: practice remote synchronization"
git push -u origin lab/sync-practice
git fetch origin
git branch -vv
```

**Success condition:** explain where the commit exists after commit, after push, and after another computer fetches it.
