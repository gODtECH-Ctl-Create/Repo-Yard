# Mission 04 — Synchronize Local and Remote

## Goal

Understand `fetch`, `pull`, and `push`.

## Do

```bash
git switch -c lab/sync-practice
```

Make a small documentation change, then:

```bash
git status
git diff
git add .
git commit -m "docs: practice remote synchronization"
git push -u origin lab/sync-practice
git fetch origin
git branch -vv
```

**Success condition:** explain where the commit exists after commit, after push, and after another computer fetches it.
