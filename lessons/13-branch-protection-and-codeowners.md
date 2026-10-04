# Lesson 13 — Branch Protection and CODEOWNERS

A shared repository needs rules that protect important branches.

## Branch protection

Typical protections for `main` include:
- require Pull Requests;
- require passing checks;
- require review approval;
- block force pushes;
- block branch deletion.

A protection rule is a GitHub repository setting. Writing a file or lesson does not activate it.

## CODEOWNERS

A `CODEOWNERS` file can tell GitHub which people or teams should be requested to review paths.

Example:

```text
/docs/       @maintainer
/.github/    @maintainer
```

The names must match the real repository.

## Desired flow

```text
branch → PR → checks + review → merge → main
```

**Success condition:** explain why a PR template and branch protection solve different problems.
