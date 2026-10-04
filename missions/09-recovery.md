# Mission 09 — Recover From a Mistake

## Goal

Practice safe recovery on a throwaway branch.

## Unstage

```bash
git add <file>
git restore --staged <file>
```

## Restore a local edit

Make a harmless edit, inspect it, then:

```bash
git restore <file>
```

## Practice reset

On a branch created only for this mission:

```bash
git reset --soft HEAD~1
```

Inspect:

```bash
git status
```

The commit moved back, but the changes remain staged.

You can return them to a normal commit with:

```bash
git commit -m "docs: restore practice commit"
```

## Revert a test commit

Create a harmless commit, then:

```bash
git revert <commit-sha>
```

## ⚠️ Do not use hard reset on valuable work

```bash
git reset --hard
```

can discard changes. The mission does not require it.

**Success condition:** recover a harmless mistake and explain the difference between restore, reset, and revert.
