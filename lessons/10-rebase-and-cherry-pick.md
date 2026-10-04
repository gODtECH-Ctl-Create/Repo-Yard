# Lesson 10 — Rebase and Cherry-pick

These are advanced tools. Learn the mental model before memorizing commands.

## Rebase

Rebase replays commits onto a new base:

```bash
git switch feat/my-change
git fetch origin
git rebase origin/main
```

This can create a cleaner linear history, but it rewrites history for the replayed commits.

**Golden rule:** do not rebase shared history casually.

## Cherry-pick

Cherry-pick applies the change from an existing commit as a new commit on your current branch:

```bash
git cherry-pick <commit-sha>
```

This is useful when one specific fix is needed elsewhere.

## When to choose

- Merge combines histories without rewriting existing commits.
- Rebase intentionally replays work on a new base.
- Cherry-pick takes a selected commit's change elsewhere.

**Success condition:** explain merge, rebase, and cherry-pick without defining them only by their command names.
