# Contributing to Repo Yard

Repo Yard is both a learning environment and a real collaborative repository.

## Before you start

Read the README, choose a lesson, and check the Issues.

### Repository collaborators

If an Issue is ready for work:

1. Comment `/claim`.
2. Create a branch from `main`.
3. Work locally.
4. Run the relevant checks.
5. Commit your changes.
6. Push your branch.
7. Open a Pull Request into `main`.
8. Fill the PR template completely.
9. Respond to review comments.
10. Merge only after approval and required checks.

### External learners

Fork Repo Yard first.

```text
Repo Yard (upstream)
        ↓
     your fork
        ↓
  your local clone
        ↓
   feature branch
        ↓
       push
        ↓
Pull Request to Repo Yard
```

Do not assume you can push directly to the upstream repository.

## Branch names

Use descriptive names:

```text
feat/03-branch-practice
docs/improve-clone-lesson
fix/mission-07-conflict
lab/pr-review-practice
```

## Commit messages

Prefer clear, focused commits:

```text
docs: explain tracking branches
feat: add conflict practice mission
fix: correct checkout example
```

## Pull Requests

A good PR tells the maintainer what changed, why, how it was tested, and which Issue it closes.

Use the repository PR template.

## Reviews

Reviews are part of learning. Read the comment, make the appropriate change, push to the same branch, reply, and resolve the thread when the conversation is complete.

## Issues

Create an Issue for a broken lesson, confusing explanation, incorrect command, missing exercise, or useful advanced topic.

## RepoOps

Repo Yard uses RepoOps for issue assignment and workflow management:

```text
/claim    → take an Issue
/unclaim  → release it
```

The repository policy limits contributors to two active assignments unless maintainers change the policy.

## Documentation quality

Repo Yard content should:
- explain before assuming;
- distinguish Git from GitHub;
- show what changes locally versus remotely;
- include a success condition for missions;
- warn about risky commands;
- work on Windows, macOS, and Linux where practical;
- remain understandable to a first-time contributor.

## Safety

Never commit secrets, credentials, private keys, or real tokens. See [SECURITY.md](SECURITY.md).

**The standard:** another learner should be able to follow the contribution without needing the author beside them.
