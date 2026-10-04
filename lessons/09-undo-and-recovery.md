# Lesson 09 — Undo and Recovery

Git has many undo tools. They are not interchangeable.

Before running one, find out where the change currently lives.

## Undo an unstaged file change

```bash
git restore <file>
```

This discards working-tree changes for that file.

## Unstage a file

```bash
git restore --staged <file>
```

The file stays changed, but it leaves the staging area.

## Amend the latest commit

```bash
git add <file>
git commit --amend
```

Be careful when the commit has already been shared.

## Reset local history

`git reset` moves the current branch reference to another commit.

In a throwaway practice branch, these are useful to understand:

```bash
git reset --soft HEAD~1
git reset --mixed HEAD~1
```

Both move the branch back one commit but keep the file changes.

`--soft` keeps the changes staged.

`--mixed` keeps the changes in the working tree but unstaged.

### ⚠️ Hard reset

```bash
git reset --hard HEAD~1
```

This can discard changes from the working tree and index. Never use it casually on work you may still need.

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
