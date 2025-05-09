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

const PACKAGE_JSON = 'package.json';
const TEST_DATA_SCOPE = '@commercetools-test-data/';
const NEW_TEST_DATA_PKG = '@commercetools/composable-commerce-test-data';
const NEW_TEST_DATA_VERSION = '11.0.0';

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

const transformPackageJson = (filePath) => {
  let updated = false;
  const content = readFileSync(filePath, 'utf8');
  const pkg = JSON.parse(content);
  const depSections = [
    'dependencies',
    'devDependencies',
    'peerDependencies',
    'optionalDependencies',
  ];
  let foundOldDep = false;
  for (const section of depSections) {
    if (pkg[section]) {
      for (const dep of Object.keys(pkg[section])) {
        if (dep.startsWith(TEST_DATA_SCOPE)) {
          delete pkg[section][dep];
          foundOldDep = true;
          updated = true;
        }
      }
      // Add new package if we removed any old ones and it's not already present
      if (foundOldDep && !pkg[section][NEW_TEST_DATA_PKG]) {
        pkg[section][NEW_TEST_DATA_PKG] = NEW_TEST_DATA_VERSION;
        const sortedPkgNames = Object.keys(pkg[section]).sort();
        pkg[section] = sortedPkgNames.reduce((sortedDeps, pkgName) => {
          sortedDeps[pkgName] = pkg[section][pkgName];
          return sortedDeps;
        }, {});
        updated = true;
      }
    }
  }
  if (updated) {
    writeFileSync(filePath, JSON.stringify(pkg, null, 2) + '\n');
    console.log(`Updated ${filePath}`);
  }
};

const findFiles = async (dir) => {
  const files = [];
  const packageJsons = [];
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
      const { files: subFiles, packageJsons: subPackageJsons } =
        await findFiles(fullPath);
      files.push(...subFiles);
      packageJsons.push(...subPackageJsons);
    } else if (entry.name.match(/\.(ts|tsx|js|jsx)$/)) {
      files.push(fullPath);
    } else if (entry.name === PACKAGE_JSON) {
      packageJsons.push(fullPath);
    }
  }

  return { files, packageJsons };
};

const main = async () => {
  const targetPath = process.argv[2] || '.';
  console.log(`Looking for files in: ${targetPath}`);

  const { files, packageJsons } = await findFiles(targetPath);
  files.forEach(transformFile);
  packageJsons.forEach(transformPackageJson);
  console.log('Done!');
};

main().catch(console.error);
