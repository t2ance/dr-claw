#!/usr/bin/env node
/**
 * Sync all Dr. Claw skills to every project found under a scan directory.
 * Finds projects by looking for instance.json or .claude/skills/ directories.
 *
 * Usage: node scripts/sync-skills-to-all-projects.mjs
 */

import { ensureProjectSkillLinks } from '../server/projects.js';
import { readdirSync, existsSync, statSync } from 'fs';
import path from 'path';

const SCAN_DIR = '/home/peijia/dr-claw';

function findProjects(baseDir, maxDepth = 2) {
  const projects = [];

  function scan(dir, depth) {
    if (depth > maxDepth) return;
    let entries;
    try {
      entries = readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    const hasInstance = entries.some(e => e.isFile() && e.name === 'instance.json');
    const hasClaudeSkills = existsSync(path.join(dir, '.claude', 'skills'));
    if (hasInstance || hasClaudeSkills) {
      projects.push(dir);
      return;
    }
    for (const entry of entries) {
      if (entry.isDirectory() && !entry.name.startsWith('.')) {
        scan(path.join(dir, entry.name), depth + 1);
      }
    }
  }

  scan(baseDir, 0);
  return projects;
}

const projects = findProjects(SCAN_DIR);
console.log(`Found ${projects.length} projects under ${SCAN_DIR}. Syncing skills...`);

let success = 0;
let failed = 0;

for (const projectPath of projects) {
  try {
    await ensureProjectSkillLinks(projectPath);
    console.log(`  OK   ${path.basename(projectPath)}`);
    success++;
  } catch (err) {
    console.log(`  FAIL ${path.basename(projectPath)}: ${err.message}`);
    failed++;
  }
}

console.log(`\nDone. ${success} synced, ${failed} failed.`);
