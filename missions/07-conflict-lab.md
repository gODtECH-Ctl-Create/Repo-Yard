# Mission 07 — Conflict Lab

## Goal

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
