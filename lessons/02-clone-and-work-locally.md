# 💻 Lesson 02: Clone and Work Locally

Most real development happens on your computer.

## The workflow

```text
GitHub → clone → local repository → edit → status → diff
                                  ↓
                           add → commit → push
                                  ↓
                                GitHub
```

## Create a branch

```bash
git switch -c feat/my-first-yard-change
```

## Make a change

Open the repository in your editor and change a lesson or practice file.

Then:

```bash
git status
git diff
```

## Stage and commit

```bash
git add <file>
git commit -m "docs: improve first Git lesson"
```

## Push

```bash
git push -u origin feat/my-first-yard-change
```

Now the branch exists on GitHub.

## Open a Pull Request

Go to Repo Yard on GitHub and create a Pull Request from your pushed branch. Use the repository template and explain what changed, why, how you tested it, and which issue it addresses.

## 🧠 Four locations

```text
Working directory → changed files
Staging area       → selected changes
Local repository   → committed snapshot
Remote repository  → pushed branch on GitHub
```

Once this mental model clicks, Git gets much easier.
