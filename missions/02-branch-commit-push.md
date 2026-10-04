# 🎯 Mission 02: Branch, Commit and Push

**Difficulty:** 🌱 Beginner

Complete a real local-to-GitHub workflow.

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

## 6. Open a Pull Request

Use the Repo Yard Pull Request template.

### 🏆 Mission complete

```text
clone → local work → branch → edit → stage → commit → push → Pull Request
```

You have just practiced one of the most important developer workflows.
