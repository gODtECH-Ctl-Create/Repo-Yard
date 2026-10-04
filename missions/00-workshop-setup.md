# Mission 00 — Set Up Your Git Workshop

**Difficulty:** 🌱 Beginner

## 🎯 Objective

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