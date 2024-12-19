import os from 'os';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node', // Try happy-dom for browser testing
    coverage: {
      enabled: false, // Disable coverage reporting for speed
    },
    maxConcurrency: os.cpus().length, // Set maxConcurrency to the number of CPU cores
    pool: 'threads',
    poolOptions: {
      threads: {
        isolate: false,
        maxThreads: os.cpus().length,
        minThreads: 5,
      },
    },
    setupFiles: ['./vitest.setup.ts'],
  },
});
