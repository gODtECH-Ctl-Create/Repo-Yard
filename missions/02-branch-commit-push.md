# 🎯 Mission 02: Branch, Commit and Push

**Difficulty:** 🌱 Beginner

Complete a real local-to-GitHub workflow.

## First: choose your route

### Route A: You have collaborator access

Clone Repo Yard:

```bash
git clone https://github.com/gODtECH-Ctl-Create/Repo-Yard.git
cd Repo-Yard
```

### Route B: You are an external learner

This is the normal open-source route.

1. Open Repo Yard on GitHub.
2. Click **Fork**.
3. Create your own copy under your GitHub account.
4. Clone **your fork**:

```bash
git clone https://github.com/<your-github-username>/Repo-Yard.git
cd Repo-Yard
```

Your fork is where you can push your practice branch.

## 1. Create your branch

```bash
git switch -c feat/add-my-name
```

Use a clear name based on your change.

## 2. Make a change

Create:

```text
learners/<your-github-username>.md
```

Use:

```markdown
# <Your name>

- GitHub: @<your-github-username>
- Level: Beginner
- What I am learning: Git and GitHub
```

## 3. Inspect

```bash
git status
git diff
```

## 4. Commit

```bash
git add learners/<your-github-username>.md
git commit -m "docs: add learner profile"
```

## 5. Push

```bash
git push -u origin <your-branch>
```

Because `origin` points to the repository you cloned, this pushes to your fork when using Route B.

## 6. Open a Pull Request

For Route B, open a Pull Request from your fork into:

```text
gODtECH-Ctl-Create/Repo-Yard:main
```

Use the Repo Yard Pull Request template.

## 🧠 What you just learned

```text
Upstream Repo
     ↓
Fork
     ↓
Your GitHub copy
     ↓
Clone
     ↓
Your computer
     ↓
Branch → Edit → Add → Commit → Push
     ↓
Your GitHub fork
     ↓
Pull Request
     ↓
Repo Yard
```

### 🏆 Mission complete

You have practiced the real local-to-GitHub contribution loop.
