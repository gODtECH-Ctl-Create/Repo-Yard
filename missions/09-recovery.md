# Mission 09 — Recover From a Mistake

## 🧰 What you need

- A local Git repository you can safely experiment in.
- A terminal and editor. VS Code is recommended but not required.

Use [START-HERE.md](../START-HERE.md) if you need help choosing your terminal or editor.

## 📍 Where you work

Make the harmless mistake and run the recovery command in **your local repository**. You can inspect the resulting history locally; GitHub is only needed when the mission specifically asks you to work with shared history.


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
