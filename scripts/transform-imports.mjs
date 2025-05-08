#!/usr/bin/env node

/**
 * Transform Imports Script
 *
 * This script helps migrate imports from @commercetools-test-data/* to @commercetools/composable-commerce-test-data/*
 *
 * Usage:
 *   ./scripts/transform-imports.mjs [path]
 *
 * Arguments:
 *   path    Path to the directory containing files to transform (default: current directory)
 *
 * The script will:
 * 1. Find all TypeScript and JavaScript files in the specified directory
 * 2. Transform imports from @commercetools-test-data/* to @commercetools/composable-commerce-test-data/*
 * 3. Print the names of files that were updated
 *
 * What it transforms ES Module imports
 *  import { something } from '@commercetools-test-data/core';
 *  // becomes
 *  import { something } from '@commercetools/composable-commerce-test-data/core';
 *
 * The script ignores files in node_modules, dist, and build directories.
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

const transformFile = (filePath) => {
  const content = readFileSync(filePath, 'utf8');
  const transformed = content.replace(
    /from ['"]@commercetools-test-data\/([^'"]+)['"]/g,
    "from '@commercetools/composable-commerce-test-data/$1'"
  );

  if (content !== transformed) {
    writeFileSync(filePath, transformed);
    console.log(`Updated ${filePath}`);
  }
};

const findFiles = async (dir) => {
  const files = [];
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);

    if (entry.isDirectory()) {
      if (
        entry.name === 'node_modules' ||
        entry.name === 'dist' ||
        entry.name === 'build'
      ) {
        continue;
      }
      files.push(...(await findFiles(fullPath)));
    } else if (entry.name.match(/\.(ts|tsx|js|jsx)$/)) {
      files.push(fullPath);
    }
  }

  return files;
};

const main = async () => {
  const targetPath = process.argv[2] || '.';
  console.log(`Looking for files in: ${targetPath}`);

  const files = await findFiles(targetPath);
  files.forEach(transformFile);
  console.log('Done!');
};

main().catch(console.error);
