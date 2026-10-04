import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const required = [
  "README.md",
  "CONTRIBUTING.md",
  "SECURITY.md",
  "CODE_OF_CONDUCT.md",
  ".repoops.yml",
  ".github/pull_request_template.md",
  ".github/CODEOWNERS",
  ".github/workflows/repoops.yml",
  ".github/workflows/content-check.yml",
  ".github/ISSUE_TEMPLATE/bug-report.md",
  ".github/ISSUE_TEMPLATE/feature-request.md",
  ".github/ISSUE_TEMPLATE/learning-mission.md",
];

const lessons = readdirSync("lessons").filter(name => /^\d+-.*\.md$/.test(name)).sort();
const missions = readdirSync("missions").filter(name => /^\d+-.*\.md$/.test(name)).sort();
const failures = [];

for (const path of required) {
  if (!existsSync(path)) failures.push(`Missing required file: ${path}`);
}

if (lessons.length < 10) failures.push(`Expected at least 10 numbered lessons; found ${lessons.length}`);
if (missions.length < 8) failures.push(`Expected at least 8 numbered missions; found ${missions.length}`);

for (const name of lessons) {
  const path = join("lessons", name);
  const body = readFileSync(path, "utf8");
  if (!/^# .*Lesson \d+/m.test(body)) failures.push(`Lesson heading missing expected format: ${path}`);
  if (!/success condition|mini challenge|lesson complete|mission complete/i.test(body)) {
    failures.push(`Lesson missing a learner completion marker: ${path}`);
  }
}

for (const name of missions) {
  const path = join("missions", name);
  const body = readFileSync(path, "utf8");
  if (!/^# .*Mission \d+/m.test(body)) failures.push(`Mission heading missing expected format: ${path}`);
  if (!/success condition|mission complete/i.test(body)) failures.push(`Mission missing a learner completion marker: ${path}`);
}

const readme = readFileSync("README.md", "utf8");
for (const name of lessons) {
  if (!readme.includes(`lessons/${name}`)) failures.push(`README does not link lesson: ${name}`);
}
for (const name of missions) {
  if (!readme.includes(`missions/${name}`)) failures.push(`README does not link mission: ${name}`);
}

if (failures.length) {
  console.error("Repo Yard content check failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Repo Yard content check passed: ${lessons.length} lessons, ${missions.length} missions.`);
