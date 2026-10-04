# 🏗️ Repo Yard

**Learn Git and GitHub by actually using Git and GitHub.**

Repo Yard is a hands-on learning repository for people who want to go from:

> “I don't know what `git push` means.”

to:

> “I can work on a real repository, collaborate with a team, review Pull Requests (PRs), recover from mistakes, and maintain a project.”

This is not just a list of commands. You will use the same workflow real teams use: **Issue → Branch → Local work → Commit → Push → Pull Request → Review → Fix → Merge**.

## 🧭 The Yard

| Level | You will learn |
|---|---|
| 🟢 Beginner | Git, GitHub, repositories, clone, status, add, commit |
| 🔵 Builder | branches, push, pull, remotes, tracking branches |
| 🟣 Contributor | issues, PRs, PR descriptions, reviews, updates, forks |
| 🟠 Problem Solver | merge conflicts, revert, reset, restore, stash, recovery |
| 🔴 Advanced | rebase, cherry-pick, tags, releases, repository scaffolding, templates |
| ⚫ Team Ready | GitHub Actions, branch protection, CODEOWNERS, open-source workflows, maintenance |

## ⚡ Start here

**Lesson 01** → [Your first Git session](lessons/01-first-git-session.md)

**Lesson 02** → [Clone and work locally](lessons/02-clone-and-work-locally.md)

**Mission 01** → [Clone the Yard](missions/01-clone-the-yard.md)

**Mission 02** → [Branch, commit, and push](missions/02-branch-commit-push.md)

Then continue through the numbered lessons and missions.

### The learning loop

**Read → Do → Break something → Fix it → Explain it → Move on**

Lessons explain the idea. Missions make you perform it.

## 💻 The core workflow

```text
GitHub
  │
  │ clone / fork
  ▼
Your computer
  │
  ├─ edit
  ├─ git status
  ├─ git diff
  ├─ git add
  ├─ git commit
  │
  └─ git push
        │
        ▼
Your GitHub branch / fork
        │
        ▼
Pull Request
        │
        ├─ review
        ├─ comments
        └─ updates
        │
        ▼
Merge
        │
        ▼
main
```

## 🧠 The one mental model beginners should keep

Whenever you get confused, ask:

**1. Where am I?**  
Working directory, staging area, local repository, or GitHub?

**2. What changed?**  
Use `git status` and `git diff`.

**3. Where does my work live right now?**  
Your computer, your branch, your fork, or the shared repository?

**4. Where do I want it to go?**  
Another branch, a Pull Request, or the final `main` branch?

## 🤝 How collaboration works in Repo Yard

Repo Yard uses normal GitHub collaboration plus **RepoOps** for issue-based work.

Learners can:

1. Pick a ready Issue.
2. Comment `/claim` to take it.
3. Create a branch.
4. Work locally.
5. Commit and push.
6. Open a PR using the repository template.
7. Respond to review comments.
8. Update the PR when needed.
9. Merge when the maintainer approves.
10. Release the issue with `/unclaim` when they cannot finish.

For learners who are not repository collaborators, use the **fork → branch → Pull Request** route taught in Mission 02.

## 📚 Curriculum

### Foundation
- [01 — First Git Session](lessons/01-first-git-session.md)
- [02 — Clone and Work Locally](lessons/02-clone-and-work-locally.md)
- [03 — Branches and Tracking](lessons/03-branches-and-tracking.md)
- [04 — Pull, Push, and Sync](lessons/04-sync-local-and-remote.md)

### Collaboration
- [05 — Issue to Pull Request Lifecycle](lessons/05-pull-request-lifecycle.md)
- [06 — Reviews and PR Updates](lessons/06-reviews-and-pr-updates.md)
- [07 — Conflicts](lessons/07-merge-conflicts.md)
- [08 — Forks and Upstream](lessons/08-fork-upstream.md)

### Problem Solving
- [09 — Undo and Recovery](lessons/09-undo-and-recovery.md)
- [10 — Rebase and Cherry-pick](lessons/10-rebase-and-cherry-pick.md)

### Advanced Repository Skills
- [11 — Repository Scaffolding and Templates](lessons/11-repository-scaffolding-and-templates.md)
- [12 — GitHub Actions](lessons/12-github-actions.md)
- [13 — Branch Protection and CODEOWNERS](lessons/13-branch-protection-and-codeowners.md)
- [14 — Tags, Releases, and Maintenance](lessons/14-tags-releases-and-maintenance.md)

## 🧪 Mission ladder

- [Mission 01 — Clone the Yard](missions/01-clone-the-yard.md)
- [Mission 02 — Branch, Commit, Push](missions/02-branch-commit-push.md)
- [Mission 03 — Branch Control](missions/03-branch-control.md)
- [Mission 04 — Sync](missions/04-sync.md)
- [Mission 05 — First Pull Request](missions/05-first-pull-request.md)
- [Mission 06 — Review and Update](missions/06-review-and-update.md)
- [Mission 07 — Conflict Lab](missions/07-conflict-lab.md)
- [Mission 08 — Fork and Upstream](missions/08-fork-upstream.md)
- [Mission 09 — Recovery](missions/09-recovery.md)
- [Mission 10 — Release](missions/10-release.md)
- [Mission 11 — Actions and Protection](missions/11-actions-and-protection.md)

## 📝 Issues and PRs are part of the lesson

Repo Yard intentionally uses GitHub itself as part of the learning experience.

You will practice:
- creating useful Issues;
- choosing labels;
- claiming work;
- writing a clear PR title;
- filling the PR template;
- linking Issues;
- reviewing someone else's work;
- responding to review comments;
- updating an existing PR;
- handling conflicts;
- merging safely.

**Your GitHub activity is part of the course.**

## 🛡️ Rules for learners

- Never put passwords, API keys, tokens, or personal secrets in commits.
- Do not force-push shared branches unless a lesson explicitly teaches why and how.
- Keep each PR focused on one change.
- Explain what you changed and how you tested it.
- Ask questions in Issues when something is unclear.
- Be respectful in reviews.

Read [CONTRIBUTING.md](CONTRIBUTING.md) before contributing.

## 🇳🇬 From Nigeria to everywhere

Built with a Nigerian developer spirit and designed for anyone learning how real repositories work.

**Welcome to the Yard.**
