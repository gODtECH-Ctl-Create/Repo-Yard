# Lesson 06 — Reviews and PR Updates

Code review is a conversation about a proposed change. The reviewer is checking whether the change is correct, understandable and safe enough to merge.

## Before you start

Open a real Pull Request in GitHub. Ask a teammate, maintainer or learning partner to review it.

## Where do I review?

Open the PR in GitHub and select the **Files changed** tab to inspect the actual diff. The **Conversation** tab contains the discussion and overall review state.

## Read before editing

Before changing anything, identify:

1. what the reviewer noticed;
2. whether it blocks the PR;
3. what result the reviewer expects.

## Push fixes to the same branch

Make the correction locally, then:

```bash
git add .
git commit -m "fix: address review feedback"
git push
```

You normally do not need a second PR. The same PR updates.

## Reply clearly

A useful reply says what you changed, what you tested and, when appropriate, why you intentionally did not change something.

## Resolve responsibly

Resolve a review thread only after the requested work or discussion is actually complete.

## Self-review

Before asking for another review:

```bash
git status
git diff main...HEAD
```

**Success condition:** complete a real review cycle where at least one review comment leads to a follow-up commit.

**Practice next:** [Mission 06 — Review and Update](../missions/06-review-and-update.md)