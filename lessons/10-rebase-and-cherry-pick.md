# Lesson 10 — Rebase and Cherry-pick

## 🧰 Tools & alternatives

See [START-HERE.md](../START-HERE.md) for setup links and tool choices. **Recommended:** VS Code + integrated terminal + GitHub in your browser. **Alternatives:** another editor with PowerShell, Command Prompt, Git Bash, macOS Terminal or Linux Terminal.

When a step happens locally, use your terminal/editor. When a step happens on GitHub, use the browser.

These are advanced history tools. Learn the mental model before memorizing commands.

## Before you start

Use a disposable practice branch. Do not rewrite shared history just to experiment.

## Rebase: what is it?

**Rebase** takes commits from your branch and replays them on a different base. It can make a history easier to read, but the replayed commits receive new commit identities.

Think: **move my private work so it appears to start from a newer point in history**.

## Where do I run it?

Run rebase in your terminal while you are on the branch you want to replay:

```bash
git switch feat/my-change
git fetch origin
git rebase origin/main
```

**Golden rule:** do not rebase shared history casually.

## Cherry-pick: what is it?

**Cherry-pick** copies the change introduced by one existing commit onto your current branch as a new commit.

```bash
git cherry-pick <commit-sha>
```

Think: **I need this one particular change here, without taking the rest of that branch**.

## Compare the choices

- Merge combines histories without rewriting the existing commits.
- Rebase replays commits onto a new base.
- Cherry-pick selects a specific commit's change for another branch.

**Success condition:** explain merge, rebase and cherry-pick in terms of what happens to the history, not just by naming the commands.

**Practice next:** [Mission 10 — History Surgery](../missions/10-release.md)