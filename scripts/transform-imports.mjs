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
 * 3. Update package.json files to replace @commercetools-test-data/* dependencies with @commercetools/composable-commerce-test-data
 * 4. Print the names of files that were updated
 * 5. Detect the package manager (from packageManager field or lockfiles)
 * 6. Install dependencies using the detected package manager
 *
 * What it transforms:
 * - ES Module imports:
 *   import { something } from '@commercetools-test-data/core';
 *   // becomes
 *   import { something } from '@commercetools/composable-commerce-test-data/core';
 *
 * - Package.json dependencies:
 *   {
 *     "dependencies": {
 *       "@commercetools-test-data/core": "1.0.0"
 *     }
 *   }
 *   // becomes
 *   {
 *     "dependencies": {
 *       "@commercetools/composable-commerce-test-data": "11.0.0"
 *     }
 *   }
 *
 * The script ignores files in node_modules, dist, and build directories.
 */

import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { readdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';

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

const detectPackageManager = (rootDir) => {
  // First check packageManager field in root package.json
  const rootPackageJson = join(rootDir, 'package.json');
  if (existsSync(rootPackageJson)) {
    try {
      const pkg = JSON.parse(readFileSync(rootPackageJson, 'utf8'));
      if (pkg.packageManager) {
        const [name] = pkg.packageManager.split('@');
        return name;
      }
    } catch (error) {
      console.warn('Could not parse root package.json:', error.message);
    }
  }

  // Then check for lockfiles
  if (existsSync(join(rootDir, 'pnpm-lock.yaml'))) {
    return 'pnpm';
  }
  if (existsSync(join(rootDir, 'yarn.lock'))) {
    return 'yarn';
  }
  if (existsSync(join(rootDir, 'package-lock.json'))) {
    return 'npm';
  }

  // Default to npm if no lockfile is found
  return 'npm';
};

const installDependencies = (rootDir) => {
  const packageManager = detectPackageManager(rootDir);
  console.log(`\nInstalling dependencies using ${packageManager}...`);

  try {
    const command = packageManager === 'yarn'
      ? 'yarn install'
      : packageManager === 'pnpm'
      ? 'pnpm install'
      : 'npm install';

    execSync(command, {
      cwd: rootDir,
      stdio: 'inherit'
    });
    console.log('Dependencies installed successfully!');
  } catch (error) {
    console.error('Failed to install dependencies:', error.message);
    process.exit(1);
  }
};

const main = async () => {
  const targetPath = process.argv[2] || '.';
  console.log(`Looking for files in: ${targetPath}`);

  const { files, packageJsons } = await findFiles(targetPath);
  files.forEach(transformFile);
  packageJsons.forEach(transformPackageJson);
  console.log('Done!');

  // Find the repository root (where package.json is located)
  let currentDir = process.cwd();
  while (!existsSync(join(currentDir, 'package.json'))) {
    const parentDir = dirname(currentDir);
    if (parentDir === currentDir) {
      console.error('Could not find repository root (package.json)');
      process.exit(1);
    }
    currentDir = parentDir;
  }

  installDependencies(currentDir);
};

main().catch(console.error);
