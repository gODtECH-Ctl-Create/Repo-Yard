# 🧰 Repo Yard Setup & Tool Guide

Repo Yard teaches Git and GitHub, but you do not need a particular computer setup.

Use the tools you already know, or choose one of the options below.

## The four things to understand

**Git** — the version-control program installed on your computer.

**GitHub** — the website where repositories are hosted and where Issues, Pull Requests, reviews and releases happen.

**VS Code** — a code editor you can use to open the repository, edit files and work with Git through its interface or terminal.

**Terminal** — a text-based place to run Git commands. On Windows you can use PowerShell, Command Prompt or Git Bash.

## What you need

### Required

- A GitHub account: https://github.com/
- Git installed on your computer: https://git-scm.com/downloads
- A repository folder on your computer.

### Recommended

- VS Code: https://code.visualstudio.com/
- A web browser such as Chrome, Edge, Firefox or Safari.

You do **not** need VS Code to use Git. You can use another editor. You do **not** need a special GitHub app to complete the course.

## Choose your workflow

### Option A — VS Code + terminal

This is the recommended beginner setup.

1. Install Git.
2. Install VS Code.
3. Open VS Code.
4. Open a folder where you keep projects.
5. Open **Terminal → New Terminal** in VS Code.
6. Run the Git commands from the lesson there.
7. Edit files in the VS Code editor.
8. Use GitHub in your browser for Issues, Pull Requests and reviews.

### Option B — VS Code Source Control

VS Code can also provide buttons for Git operations such as viewing changes, staging files, committing and switching branches.

Use this as a visual aid, but still read the Git commands in the lesson so you understand what the buttons are doing. Menu names can vary slightly between versions.

### Option C — Terminal + another editor

You can use Git entirely from PowerShell, Command Prompt, Git Bash, macOS Terminal or Linux Terminal, while editing files in any text/code editor you prefer.

### Option D — GitHub web interface

Some repository tasks can be done in GitHub's browser interface, such as creating Issues, opening Pull Requests and editing simple files. When a mission specifically teaches local Git, do the local part rather than replacing it with a browser shortcut.

## Windows choices

Windows learners can use:

- PowerShell — already available on modern Windows installations.
- Command Prompt — the classic Windows terminal.
- Git Bash — installed with Git for Windows and gives you a Unix-like shell.
- VS Code's integrated terminal — lets you use one of the available shells inside VS Code.

Different shells can use slightly different path or quoting syntax. When a command is shell-specific, Repo Yard will say so.

## macOS choices

Use Terminal or the integrated terminal in VS Code. Git may already be available or may need to be installed depending on your setup.

## Linux choices

Use your normal terminal and your preferred editor. Install Git through your distribution's package manager if it is not already installed.

## How to read the lessons

When a lesson says **Open your repository**, it means open the folder created by your Git clone on your computer.

When it says **Open GitHub**, it means use the repository in your web browser.

When it says **Run this command**, use your terminal unless the lesson explicitly says to use a GitHub page or VS Code button.

When it says **Create a branch**, you can use the Git command shown or the VS Code Source Control/branch controls. The command is still explained because understanding Git is the goal.

## Getting unstuck

1. Check which tool the instruction is talking about: Git, VS Code, terminal or GitHub.
2. Check where you are: browser, repository folder or terminal.
3. Run `git status` when you are unsure about your local Git state.
4. Read the mission's evidence section before deciding that you are finished.
5. Ask in your Journey Issue when you are stuck.

## Safety

Never put GitHub passwords, access tokens, private keys or other secrets into Issues, commits, screenshots or public repository files.