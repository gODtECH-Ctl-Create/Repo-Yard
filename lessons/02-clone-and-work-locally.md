# 💻 Lesson 02: Clone and Work Locally

Most real development happens on your computer. In this lesson, you will open the repository, create a safe branch, make a change and understand where that change lives.

## Before you start

You should already have Git installed and a local copy of a repository.

## Where do I work?

Open a terminal and move into your repository folder. Then open that same folder in your code editor (for example, VS Code). The terminal runs Git commands; the editor is where you change files.

```bash
cd Repo-Yard
```

## The workflow

```text
GitHub → clone → local repository → edit → status → diff
                                  ↓
                           add → commit → push
                                  ↓
                                GitHub
```

## Create a branch

A **branch** is a separate line of work. Use one so your change does not go directly into `main`.

```bash
git switch -c feat/my-first-yard-change
```

## Make a change

Open a small practice file in the repository and make one useful change. Save it.

Then run:

```bash
git status
git diff
```

`git status` tells you which files changed. `git diff` shows the actual edits.

## Stage and commit

**Staging** means selecting the changes that should go into the next commit. A **commit** is a saved snapshot in your local Git history.

```bash
git add <file>
git commit -m "docs: improve first Git lesson"
```

## Push

**Push** sends your local commits to a remote repository on GitHub.

```bash
git push -u origin feat/my-first-yard-change
```

The `-u` records the relationship between your local branch and the remote branch, so later pushes can be simpler.

## Open a Pull Request

Go to the Repo Yard repository on GitHub in your browser. After the branch is pushed, GitHub should offer to create a Pull Request. A PR is where the change is proposed for review.

## 🧠 Four locations

```text
Working directory → changed files
Staging area       → selected changes
Local repository   → committed snapshot
Remote repository  → pushed branch on GitHub
```

**Success condition:** you can point to a change and say whether it is only edited, staged, committed or already pushed.

**Practice next:** [Mission 02 — Branch, Commit and Push](../missions/02-branch-commit-push.md)