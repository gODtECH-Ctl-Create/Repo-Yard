import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

const required = [
  "README.md",
  "CONTRIBUTING.md",
  "SECURITY.md",
  "CODE_OF_CONDUCT.md",
  "LICENSE",
  ".gitignore",
  "MAINTAINERS.md",
  "RYOS.md",
  "COURSE.md",
  "course.json",
  ".github/pull_request_template.md",
  ".github/CODEOWNERS",
  ".github/workflows/ryos.yml",
  ".github/workflows/content-check.yml",
  ".github/dependabot.yml",
  ".github/ISSUE_TEMPLATE/bug-report.md",
  ".github/ISSUE_TEMPLATE/feature-request.md",
  ".github/ISSUE_TEMPLATE/learning-mission.md",
  ".github/ISSUE_TEMPLATE/start-journey.md",
  ".github/ISSUE_TEMPLATE/badge-request.md",
];

const markdownFiles = [];
function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === ".git") continue;
    const path = join(dir, entry.name);
    if (entry.isDirectory()) walk(path);
    else if (entry.name.endsWith(".md")) markdownFiles.push(path);
  }
}
walk(".");

const lessons = readdirSync("lessons").filter(name => /^\d+-.*\.md$/.test(name)).sort();
const missions = readdirSync("missions").filter(name => /^\d+-.*\.md$/.test(name)).sort();
const course = JSON.parse(readFileSync("course.json", "utf8"));
const failures = [];

for (const path of required) {
  if (!existsSync(path)) failures.push(`Missing required file: ${path}`);
}

if (lessons.length < 10) failures.push(`Expected at least 10 numbered lessons; found ${lessons.length}`);
if (missions.length !== course.missionCount) failures.push(`Course expects ${course.missionCount} numbered missions; found ${missions.length}`);
if (course.missions.length !== course.missionCount) failures.push("course.json missionCount does not match missions array length");

const missionIds = new Set(course.missions.map(m => m.id));
const paths = new Set(course.missions.map(m => m.path));
for (const mission of course.missions) {
  if (!existsSync(mission.path)) failures.push(`Course mission file missing: ${mission.id} → ${mission.path}`);
  if (!mission.title || !mission.xp || !mission.level || !mission.evidence) failures.push(`Incomplete course metadata: ${mission.id}`);
  for (const prerequisite of mission.prerequisites) {
    if (!missionIds.has(prerequisite)) failures.push(`Unknown prerequisite ${prerequisite} for ${mission.id}`);
  }
  if (mission.next && !missionIds.has(mission.next)) failures.push(`Unknown next mission ${mission.next} for ${mission.id}`);
}

for (const badge of course.badges) {
  for (const requiredMission of badge.requires) {
    if (!missionIds.has(requiredMission)) failures.push(`Unknown badge requirement ${requiredMission} for ${badge.id}`);
  }
}

for (const name of lessons) {
  const path = join("lessons", name);
  const body = readFileSync(path, "utf8");
  if (!/^# .*Lesson \d+/m.test(body)) failures.push(`Lesson heading missing expected format: ${path}`);
  if (!/success condition|mini challenge|lesson complete|mission complete/i.test(body)) failures.push(`Lesson missing learner completion marker: ${path}`);
}

for (const name of missions) {
  const path = join("missions", name);
  const body = readFileSync(path, "utf8");
  if (!/^# .*Mission \d+/m.test(body)) failures.push(`Mission heading missing expected format: ${path}`);
  if (!/success condition|mission complete/i.test(body)) failures.push(`Mission missing completion marker: ${path}`);
}

for (const file of markdownFiles) {
  const body = readFileSync(file, "utf8");
  const links = [...body.matchAll(/!?\[[^\]]*\]\(([^)]+)\)/g)].map(m => m[1].trim());
  for (const raw of links) {
    const link = raw.split("#")[0].trim();
    if (!link || /^(https?:\/\/|mailto:)/i.test(link)) continue;
    const target = resolve(dirname(file), decodeURIComponent(link));
    if (!existsSync(target)) failures.push(`Broken local link: ${file} → ${raw}`);
  }
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

console.log(`Repo Yard content check passed: ${lessons.length} lessons, ${missions.length} missions, ${markdownFiles.length} Markdown files checked.`);