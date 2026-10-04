# Mission 03 — Branch Control

## Goal

## 🧰 What you need

A local Git repository, a terminal and an editor. VS Code's terminal, PowerShell, Git Bash, Command Prompt, macOS Terminal and Linux terminals are all valid choices.

See [START-HERE.md](../START-HERE.md) when you need help choosing a tool.

## 📍 Where you work

Do this mission inside the repository folder on your computer. Branch operations are local Git operations unless the mission explicitly tells you to push something to GitHub.


Learn to create, inspect, switch, and delete local branches.

## Do

Starting from an up-to-date `main`:

```bash
git switch main
git pull
git switch -c lab/branch-control
git branch
git status
git branch -vv
git switch main
git branch -d lab/branch-control
```

**Success condition:** explain which branch you are on and why a branch is not the same thing as a Pull Request.
