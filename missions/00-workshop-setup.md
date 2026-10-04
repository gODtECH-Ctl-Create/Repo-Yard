# Mission 00 — Set Up Your Git Workshop

**Difficulty:** 🌱 Beginner

## 🎯 Objective

## 🧰 What you need

- A GitHub account: https://github.com/
- Git installed: https://git-scm.com/downloads
- A terminal: VS Code's integrated terminal (recommended), PowerShell, Command Prompt, Git Bash, Terminal or your Linux terminal.
- An editor: VS Code is recommended, but another editor is fine.

Read the [Tool & Setup Guide](../START-HERE.md) before starting if any of these are unfamiliar.

## 📍 Where you work

This mission is mainly on **your computer**. Use Git in your terminal. GitHub is used to create or verify your account and authentication.


Make sure your Git and GitHub workshop actually works before you start the course.

## Do

Run:

```bash
git --version
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
git config --global --get user.name
git config --global --get user.email
```

Authenticate to GitHub using HTTPS or SSH and verify that you can reach GitHub from the terminal.

### Windows note

PowerShell, Git Bash and Command Prompt run the same Git commands, but quoting and path syntax can differ. Do not paste shell-specific commands blindly.

## ✅ Checkpoint

- [ ] `git --version` works
- [ ] Git has your intended name and email
- [ ] GitHub authentication works
- [ ] You can explain whether you are using HTTPS or SSH

## 🔎 Evidence

This is a **self-check** because GitHub cannot directly observe every local setup step.

Record your result in your Journey Issue with `/checkpoint M00`. Never paste secrets.

**Reward:** +50 XP

**Next:** [Mission 01 — Clone the Yard](01-clone-the-yard.md)