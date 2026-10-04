# Lesson 06 — Reviews and PR Updates

Code review is a conversation about the change.

A reviewer can approve, leave comments, or request changes.

## Read before editing

First understand what the reviewer noticed, whether it is blocking, and what outcome they expect.

## Push fixes to the same branch

```bash
git add .
git commit -m "fix: address review feedback"
git push
```

There is normally no need to open a second PR.

## Reply clearly

Good review replies explain what you changed, tested, or intentionally kept.

## Resolve responsibly

Resolve a review thread when the requested work or discussion is actually complete.

## Self-review

Before requesting another review:

```bash
git status
git diff main...HEAD
```

Read your own PR as if you did not write it.

**Success condition:** complete a PR review cycle where at least one comment causes a follow-up commit.
