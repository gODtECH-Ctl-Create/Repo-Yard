# Lesson 07 — Merge Conflicts

A merge conflict happens when Git cannot safely combine changes.

Git is not broken. It is asking a human to decide.

## What a conflict looks like

```text
<<<<<<< HEAD
your version
=======
other version
>>>>>>> other-branch
```

Do not commit those markers.

## The workflow

```bash
git status
```

Open every conflicted file, choose the correct final content, remove the markers, then:

```bash
git add <resolved-file>
git commit
```

Depending on the operation, you may need `git merge --continue` or to finish a rebase.

## Abort when necessary

```bash
git merge --abort
git rebase --abort
```

Repo Yard's conflict mission uses an intentional conflict so the process can be learned safely.

**Success condition:** resolve a controlled conflict and explain what Git was unable to decide.
