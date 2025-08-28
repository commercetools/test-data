import os from 'os';
import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node', // Try happy-dom for browser testing
    coverage: {
      enabled: true, // toggle for testing speed
      include: [
        'standalone/src/**/*.ts',
        '!standalone/src/**/index.ts',
        '!standalone/src/**/*.spec.ts',
        '!standalone/src/**/*.test.ts',
        '!standalone/src/**/types.ts',
      ],
    },
    maxConcurrency: os.cpus().length, // Set maxConcurrency to the number of CPU cores (10)
    pool: 'threads',
    poolOptions: {
      threads: {
        isolate: false, // toggle for testing speed
        // maxThreads: os.cpus().length,
        maxThreads: 7,
        minThreads: 5,
      },
    },
    setupFiles: ['./vitest.setup.ts'],
  },
  resolve: {
    alias: {
      '@/core': path.resolve(__dirname, './standalone/src/core'),
      '@/core/test-utils': path.resolve(
        __dirname,
        './standalone/src/core/test-utils'
      ),
      '@/graphql-types': path.resolve(
        __dirname,
        './standalone/src/graphql-types'
      ),
      '@/models': path.resolve(__dirname, './standalone/src/models'),
      '@/utils': path.resolve(__dirname, './standalone/src/utils'),
    },
  },
});
