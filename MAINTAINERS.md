# Repo Yard Maintainer Guide

This document covers the work we do behind the scenes so learners can focus on learning.

## Before opening Repo Yard to more learners

Check that:

- `main` is protected in GitHub.
- The content-check workflow is passing.
- RepoOps is enabled.
- The starter Issues are real learning tasks, not internal setup tasks.
- The PR template and Issue templates are visible.
- No secrets or private operational information are present.

## How we use Issues

Repo Yard Issues are part of the curriculum.

A good learner Issue has:
- one clear skill;
- a realistic scenario;
- a small scope;
- a visible success condition.

When an Issue is ready for work, give it the `status: ready` label.

Learners with the required repository access can use:

```text
/claim
```

When they cannot continue:

```text
/unclaim
```

RepoOps currently manages the claim/unclaim workflow. Its reminder and expiration values are policy configuration; they should not be described to learners as an active scheduler unless the separate scheduled scanner is enabled.

## Reviewing learner work

A maintainer should check:

1. The PR is linked to the right Issue.
2. The change is focused.
3. The lesson or mission remains beginner-friendly.
4. Commands and examples are accurate.
5. The contributor tested the change.
6. No secrets or unsafe credentials were added.
7. Review comments were answered.
8. The PR is merged only when the required repository rules are satisfied.

## External learners

For public learners, the normal route is:

```text
Fork → clone → branch → edit → commit → push → PR
```

Do not give direct repository write access just to let someone complete a beginner exercise.

## Internal collaborators

For trusted repository collaborators, the direct clone/branch workflow is appropriate.

They still work on branches and open PRs. Protecting `main` keeps that distinction clear.

## Handling broken lessons

When a learner reports a broken command or explanation:

1. Confirm the issue.
2. Label or update the Issue appropriately.
3. Create a focused branch.
4. Fix the smallest useful thing.
5. Run the content check.
6. Open a PR.
7. Review it using the normal process.
8. Merge only after the branch rules are satisfied.

## Growing the curriculum

Add advanced topics only when they have a practical reason.

The target progression is:

```text
Git basics
  ↓
Local workflow
  ↓
Branches + remotes
  ↓
Issues + PRs
  ↓
Reviews
  ↓
Conflicts + recovery
  ↓
Forks + upstream
  ↓
Advanced Git
  ↓
Repository engineering
  ↓
Automation + protection
  ↓
Release + maintenance
```

Every new lesson should have a corresponding practice mission where the learner actually does the skill.

## Production hygiene

Review Actions periodically.

Use read-only permissions for validation workflows whenever possible. Keep write permissions isolated to workflows that genuinely need them.

When updating reusable Actions, review the version source and consider pinning third-party Actions to trusted commit SHAs for higher assurance.

## Distribution

When Repo Yard is ready for a new learner group:

- send them the repository URL;
- point them to the README;
- tell them to start at Mission 01;
- give them access to the appropriate Issue pool;
- explain whether they are using collaborator or fork workflow.

Do not ask learners to modify the repository's setup just to begin learning.
