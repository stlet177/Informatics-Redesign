import { readdir, readFile, writeFile } from 'fs/promises';
import path from 'path';
import strip from 'strip-comments';

const PROJECT_ROOT = new URL('..', import.meta.url).pathname;

const IGNORE_DIRS = new Set(['node_modules', '.git', 'dist', '.idea', '.vscode']);
const STRIP_EXTS = new Set(['.js', '.jsx', '.mjs', '.cjs', '.ts', '.tsx', '.css']);
const HTML_EXTS = new Set(['.html']);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (IGNORE_DIRS.has(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(fullPath);
    } else if (entry.isFile()) {
      await processFile(fullPath);
    }
  }
}

async function processFile(filePath) {
  const ext = path.extname(filePath);
  let content;
  try {
    content = await readFile(filePath, 'utf8');
  } catch {
    return;
  }
  let next = content;
  if (STRIP_EXTS.has(ext)) {
    next = strip(content, { keepNewlines: true });
  } else if (HTML_EXTS.has(ext)) {
    next = content.replace(/<!--([\s\S]*?)-->/g, '').replace(/\n{3,}/g, '\n\n');
  }
  if (next !== content) {
    await writeFile(filePath, next, 'utf8');
  }
}

await walk(PROJECT_ROOT);
