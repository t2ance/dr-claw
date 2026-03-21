import path from 'path';
import { sessionDb } from '../database/db.js';

function encodeProjectPath(projectPath) {
  return path.resolve(projectPath).replace(/[\\/:\s~_]/g, '-');
}

function defaultSessionName(provider) {
  switch (provider) {
    case 'cursor':
      return 'Untitled Session';
    case 'codex':
      return 'Codex Session';
    case 'gemini':
      return 'Gemini Session';
    default:
      return 'New Session';
  }
}

export function recordIndexedSession({
  sessionId,
  provider,
  projectPath,
  sessionMode = 'research',
  displayName = null,
  lastActivity = null,
}) {
  if (!sessionId || !provider || !projectPath) {
    return;
  }

  const projectName = encodeProjectPath(projectPath);
  sessionDb.upsertSession(
    sessionId,
    projectName,
    provider,
    displayName || defaultSessionName(provider),
    lastActivity || new Date().toISOString(),
    0,
    {
      sessionMode,
      projectPath,
    },
  );
}

