# Lesson 14 — Tags, Releases, and Maintenance

A repository is not finished when code is merged. Someone still needs to identify versions, communicate changes and keep the project healthy.

## Before you start

Use a practice repository where you can safely create a tag and GitHub Release.

## Tags: what are they?

A **tag** is a named Git reference pointing to a specific commit. Teams commonly use version names such as `v0.1.0`.

## Where do I create a tag?

Create the tag in your local repository, then push it if you want GitHub to receive it.

```bash
git tag v0.1.0
git push origin v0.1.0
```

## Releases: what are they?

A **GitHub Release** is a user-facing release entry associated with a tag. It is where you explain what changed and give users a clear version to refer to.

On GitHub, open **Releases** → **Draft a new release**, choose the tag and write the release notes.

## Maintenance: what does it mean?

Maintenance is the continuing work that keeps a repository useful and safe.

Examples include correcting documentation, cleaning up Issues and stale branches, reviewing dependencies and Actions, and keeping contributor guidance accurate.

## Where do I do maintenance?

Review the repository on GitHub, make any needed code or documentation changes locally, then send normal Pull Requests for the improvements.

## The complete picture

```text
merged change → tag → release → maintenance
```

**Success condition:** explain how a repository moves from merged work to a named release and then stays healthy through ongoing maintenance.

**Practice next:** [Mission 14 — Ship and Maintain](../missions/14-release-and-maintenance.md)