# Lesson 09 — Undo and Recovery

Git has many undo tools. They are not interchangeable.

Before running one, find out where the change currently lives.

## Undo an unstaged file change

```bash
git restore <file>
```

## Unstage a file

```bash
git restore --staged <file>
```

## Amend the latest commit

```bash
git add <file>
git commit --amend
```

Be careful when the commit has already been shared.

## Revert a shared commit

```bash
git revert <commit>
```

Revert creates a new commit that reverses an earlier commit and is often appropriate for shared history.

## Stash unfinished work

```bash
git stash
git stash pop
```

## Reflog

```bash
git reflog
```

The reflog can help you find previous local positions of branch references.

Treat recovery commands as tools, not magic spells.

**Success condition:** deliberately make a harmless mistake, recover it, and explain why you selected that command.
