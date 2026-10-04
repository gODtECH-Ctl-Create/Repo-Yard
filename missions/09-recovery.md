# Mission 09 — Recover From a Mistake

## Goal

Practice a safe undo on a harmless change.

Choose one:

### Unstage

```bash
git add <file>
git restore --staged <file>
```

### Restore a local edit

Make a harmless edit, inspect it, then:

```bash
git restore <file>
```

### Revert a test commit

Create a harmless commit, then:

```bash
git revert <commit-sha>
```

**Success condition:** explain where the change was and why the selected command was appropriate.
