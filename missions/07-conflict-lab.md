# Mission 07 — Conflict Lab

## Goal

## 🧰 What you need

- Git and a local repository.
- A safe practice branch.
- A second branch or learning partner to create the competing change.
- An editor that can show conflict markers. VS Code is recommended, but another code editor works.

See [START-HERE.md](../START-HERE.md) for terminal/editor alternatives.

## 📍 Where you work

The conflict is created and resolved in **your local repository**. GitHub can host the branches, but the actual conflict-resolution commands happen in your terminal and editor.


Resolve an intentional merge conflict without panicking.

## Setup

Create a branch:

```bash
git switch -c lab/conflict-a
```

In a practice file, change the same line that a learning partner changes on another branch. The maintainer or learning partner prepares the second branch.

Merge the other branch:

```bash
git fetch origin
git merge <other-branch>
```

## Resolve

```bash
git status
```

Open the conflicted file, choose the correct final text, remove conflict markers, then:

```bash
git add <file>
git commit
```

**Success condition:** explain exactly why Git stopped and what decision you made.
