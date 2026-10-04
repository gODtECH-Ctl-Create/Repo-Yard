# Lesson 09 — Undo and Recovery

## 🧰 Tools & alternatives

See [START-HERE.md](../START-HERE.md) for setup links and tool choices. **Recommended:** VS Code + integrated terminal + GitHub in your browser. **Alternatives:** another editor with PowerShell, Command Prompt, Git Bash, macOS Terminal or Linux Terminal.

When a step happens locally, use your terminal/editor. When a step happens on GitHub, use the browser.

Git has many recovery tools because there are many different kinds of mistakes. The first step is always to find out **where the change currently lives**.

## Before you start

Use a disposable practice branch. Deliberately make small, harmless mistakes rather than experimenting on important shared work.

## Where is the mistake?

Ask:

1. Is the file only edited?
2. Is it staged?
3. Is it committed locally?
4. Has it been pushed or shared?

That answer determines which recovery tool is appropriate.

## Undo an unstaged file change

If you changed a tracked file but have not staged the change:

```bash
git restore <file>
```

## Unstage a file

If you staged a file but have not committed it:

```bash
git restore --staged <file>
```

## Amend the latest commit

Use amend when the latest commit needs correction:

```bash
git add <file>
git commit --amend
```

Be careful when that commit has already been shared.

## Revert a shared commit

`git revert` creates a new commit that reverses an earlier commit. That makes it useful for changes that are already part of shared history.

```bash
git revert <commit>
```

## Stash unfinished work

A **stash** temporarily stores local changes so you can return to a cleaner working tree.

```bash
git stash
git stash pop
```

## Reflog

`git reflog` helps you find previous local positions of branch references. It is one of the most useful tools when you think you “lost” a commit.

```bash
git reflog
```

**Success condition:** deliberately make a harmless mistake, recover it, and explain why you selected that command.

**Practice next:** [Mission 09 — Recovery](../missions/09-recovery.md)