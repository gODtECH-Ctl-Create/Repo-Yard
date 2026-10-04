# 🧭 Repo Yard Operations System (RYOS)

RYOS is the learning operations layer for Repo Yard.

> **The repository is the classroom. The website is the front door. GitHub is the control surface.**

RYOS does not simulate Git, replace the learner terminal, or become a second LMS.

It coordinates real GitHub activity:

`Learner → Mission → Real Git work → GitHub evidence → Verification → Journey → XP → Badge → Next mission`


## What RYOS owns

- learner identity and Journey Issues
- mission metadata and prerequisites
- evidence expectations
- machine-visible mission verification
- progress, XP and levels
- badge eligibility and requests
- next-action guidance
- learning-specific GitHub issue and PR operations

## What the learner uses

- their own terminal and Git installation
- GitHub Issues, branches, forks and remotes
- Pull Requests and reviews
- GitHub Actions
- repository protection and releases

There is no fake browser terminal and no fake Git editor.

## Learner control center

Each learner gets one GitHub Issue named `[Learner] @username — Journey`. It answers:

> **What am I doing now, what have I proved, and what comes next?**


## Commands

- `/start` — create or locate your Journey
- `/journey` — open your Journey
- `/help` — show learning commands
- `/checkpoint M00` — record a local self-check
- `/badge git-foundations` — request a badge review

## Verification levels

**Level 1 — Self check.** Local-only operations GitHub cannot see directly.

**Level 2 — Repository evidence.** Branches, files, commits, tags and other repository objects.

**Level 3 — GitHub evidence.** Issues, Pull Requests, reviews, workflow runs and releases.

**Level 4 — Collaboration evidence.** Another person participates in the learning task.


RYOS must never claim that GitHub verified something GitHub could not observe.

## Progression

- 🟢 Gate 1 — Git Basics Complete: M00–M04
- 🔵 Gate 2 — Contributor Ready: M05–M08
- 🟠 Gate 3 — Problem Solver: M09–M11
- 🔴 Gate 4 — Repository Engineer: M12–M14
- ⚫ Final — Team Ready: M15

The machine-readable source of truth is `course.json`.

## Badge loop

`Learn → Prove → Earn → Share → Discover → Learn`


Badges are requested in GitHub. RYOS checks available evidence and clearly identifies anything that still needs human review.

## Design constraint

Keep the automation operationally simple and the learning experience strong.

Keep the learning in the repository. Keep the proof in GitHub. Keep the source of truth in version control.