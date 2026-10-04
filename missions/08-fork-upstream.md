# Mission 08 — Fork and Upstream

## 🧰 What you need

- A GitHub account and browser.
- Git installed locally.
- A terminal and editor. Recommended: VS Code + integrated terminal.

See [START-HERE.md](../START-HERE.md) for PowerShell, Command Prompt, Git Bash, macOS/Linux Terminal and editor alternatives.

## 📍 Where you work

Create your fork on **GitHub**, clone that fork to **your computer**, and do the Git remote/branch work in your local repository. The final Pull Request is created in your GitHub browser.


## Goal

Learn the public-contributor workflow.

1. Fork Repo Yard on GitHub.
2. Clone your fork.
3. Add Repo Yard as `upstream`.
4. Create a branch.
5. Make a small improvement.
6. Push to your fork.
7. Open a PR to Repo Yard.

```bash
git clone https://github.com/<your-github-username>/Repo-Yard.git
cd Repo-Yard
git remote add upstream https://github.com/gODtECH-Ctl-Create/Repo-Yard.git
git remote -v
```

**Success condition:** explain the difference between `origin` and `upstream`.
