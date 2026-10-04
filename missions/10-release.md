# Mission 10 — History Surgery

## 🎯 Objective

Control commit history safely with rebase and cherry-pick.

## Scenario

A feature branch is behind `main`, and one specific fix must be moved elsewhere.

## Tasks

1. Create a safe practice branch.
2. Make at least two commits.
3. Rebase your branch onto an updated base.
4. Resolve the rebase if necessary.
5. Use `git log --oneline --graph --decorate` to inspect the result.
6. Create a separate commit that is useful elsewhere.
7. Cherry-pick that commit onto another practice branch.
8. Explain why history was rewritten only on the private practice branch.

```bash
git fetch origin
git rebase origin/main
git log --oneline --graph --decorate
git cherry-pick <commit-sha>
```

## ✅ Success condition

You can explain merge, rebase and cherry-pick and safely recover from a rebase conflict in a disposable practice branch.

## 🔎 Evidence

Show the resulting commit graph and the cherry-picked commit.

## 🤖 Verification

This is repository evidence plus learner explanation. RYOS does not infer intent from a graph alone.

**Reward:** +200 XP

**Next:** [Mission 11 — Repository Blueprint](11-actions-and-protection.md)