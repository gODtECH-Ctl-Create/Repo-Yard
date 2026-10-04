# Lesson 08 — Forks and Upstream

A fork is your GitHub copy of another repository.

A clone is your local copy. They are different.

## External-contributor setup

```text
gODtECH-Ctl-Create/Repo-Yard
            │
            ▼
       your GitHub fork
            │
            ▼
       your computer
```

Clone your fork:

```bash
git clone https://github.com/<your-github-username>/Repo-Yard.git
cd Repo-Yard
```

## Add the original repository as upstream

```bash
git remote add upstream https://github.com/gODtECH-Ctl-Create/Repo-Yard.git
git remote -v
```

Now:
- `origin` → your fork;
- `upstream` → original Repo Yard.

## Update your fork

```bash
git fetch upstream
git switch main
git merge upstream/main
git push origin main
```

Rebase is taught later.

**Success condition:** set up `origin` and `upstream`, explain each one, and submit a PR from your fork.
