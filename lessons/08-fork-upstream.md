# Lesson 08 — Forks and Upstream

## 🧰 Tools & alternatives

See [START-HERE.md](../START-HERE.md) for setup links and tool choices. **Recommended:** VS Code + integrated terminal + GitHub in your browser. **Alternatives:** another editor with PowerShell, Command Prompt, Git Bash, macOS Terminal or Linux Terminal.

When a step happens locally, use your terminal/editor. When a step happens on GitHub, use the browser.

A **fork** is your GitHub copy of another repository. A **clone** is your local copy on your computer. You normally use both when contributing to a project you do not directly control.

## Before you start

Open Repo Yard in GitHub while signed in. You must be able to create a fork on your GitHub account.

## Where do I create the fork?

On the Repo Yard GitHub page, choose **Fork** and create the fork under your own account.

You will now have:

```text
Original Repo Yard on GitHub
            │
            ▼
       your GitHub fork
            │
            ▼
       your computer
```

## Clone your fork

Copy your fork's HTTPS or SSH URL from GitHub, then:

```bash
git clone https://github.com/<your-github-username>/Repo-Yard.git
cd Repo-Yard
```

## Add the original repository as upstream

An **upstream remote** points back to the original project you forked.

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

**Success condition:** you can explain why `origin` and `upstream` point to different GitHub repositories and submit a PR from your fork.

**Practice next:** [Mission 08 — Fork and Upstream](../missions/08-fork-upstream.md)