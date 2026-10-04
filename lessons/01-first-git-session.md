# 🌱 Lesson 01: Your First Git Session

A teammate says: "Clone the repository, make the change locally, push your branch, and open a Pull Request."

You should know what that means.

## Check Git

```bash
git --version
```

## Know where you are

```bash
pwd
```

Windows PowerShell:

```powershell
Get-Location
```

## Clone Repo Yard

```bash
git clone https://github.com/gODtECH-Ctl-Create/Repo-Yard.git
cd Repo-Yard
```

## Check the repository

```bash
git status
```

### 🧠 Remember

```text
GitHub repository
      ↓ git clone
Your local computer
```

**Clone** brings a repository from GitHub to your computer. It does not send future changes back to GitHub. That is what **push** is for.

### 🎯 Mini challenge

Explain in your own words:

1. What does `git clone` do?
2. Where is your local copy?
3. Which command shows your Git state?

Then run:

```bash
git remote -v
```

**Success condition:** you can explain what was copied to your computer, which branch you are on, and what remote points back to GitHub.
