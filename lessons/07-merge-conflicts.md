# Lesson 07 — Merge Conflicts

A **merge conflict** happens when Git cannot safely combine competing changes. Git is not broken; it is asking a human to choose the correct result.

## Before you start

Use the Repo Yard conflict mission or another safe practice branch. Do not experiment with conflicts on an important production branch.

## Where do I see the conflict?

The conflict usually appears in your terminal after a merge, rebase or related operation. Git also marks the affected file so your editor can show the conflicting sections.

## What a conflict looks like

```text
<<<<<<< HEAD
your version
=======
other version
>>>>>>> other-branch
```

These are temporary conflict markers. They must not remain in the final file.

## The workflow

```bash
git status
```

Open every conflicted file. Decide what the final content should be. Remove the conflict markers. Save the file. Then stage the resolved file:

```bash
git add <resolved-file>
```

Finish the operation. For a normal merge, Git may need:

```bash
git commit
```

For a rebase, you may need:

```bash
git rebase --continue
```

## Abort when necessary

If you realize you should return to the state from before the operation:

```bash
git merge --abort
git rebase --abort
```

**Success condition:** resolve a controlled conflict and explain what Git was unable to decide.

**Practice next:** [Mission 07 — Conflict Lab](../missions/07-conflict-lab.md)