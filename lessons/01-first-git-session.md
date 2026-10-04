# 🌱 Lesson 01: Your First Git Session

Welcome to Repo Yard. You will do the work on **your own computer** using Git, then use GitHub when the lesson asks you to.

## What is a Git workshop?

A **Git workshop** simply means the folder on your computer where you keep your Git projects and practice with Git commands. There is nothing special to install called a “Git workshop.” You create or choose a normal folder on your computer, such as `Documents/Projects`, and Git works inside the repository folder.

**Git** is the version-control tool running on your computer. **GitHub** is the website where repositories can be hosted and where teams collaborate.

## Where do I work?

1. Open your computer's terminal: Terminal on macOS/Linux, PowerShell, Command Prompt or Git Bash on Windows.
2. Choose a normal parent folder for projects.
3. Run the commands below. `git clone` will create the Repo Yard folder for you.

Example:

```bash
cd ~/Documents
git clone https://github.com/gODtECH-Ctl-Create/Repo-Yard.git
cd Repo-Yard
```

On Windows PowerShell, the same idea can look like:

```powershell
cd $HOME\Documents
git clone https://github.com/gODtECH-Ctl-Create/Repo-Yard.git
cd Repo-Yard
```

## Check Git

```bash
git --version
```

If that command works, Git is installed and your terminal can find it.

## Know where you are

```bash
pwd
```

Windows PowerShell:

```powershell
Get-Location
```

These commands show the current folder in your terminal.

## Clone Repo Yard

```bash
git clone https://github.com/gODtECH-Ctl-Create/Repo-Yard.git
cd Repo-Yard
```

**Clone** means “make a local copy of this Git repository.” The copy contains the project files and Git history needed to work locally.

## Check the repository

```bash
git status
git remote -v
```

`git status` tells you what Git currently sees. `git remote -v` shows the GitHub address connected to this local repository.

## 🧠 Remember

```text
GitHub repository
      ↓ git clone
Your local computer
      ↓ git push
GitHub branch
```

Clone brings work **to** your computer. Push sends your committed work **back** to a remote repository.

### 🎯 Mini challenge

Explain in your own words:

1. What is Git?
2. What is GitHub?
3. What is a Git workshop?
4. What does `git clone` do?
5. Where is your local copy?
6. Which command shows your Git state?

**Success condition:** you can explain what was copied to your computer, where you are working, which branch you are on, and what remote points back to GitHub.

**Practice next:** [Mission 01 — Clone the Yard](../missions/01-clone-the-yard.md)