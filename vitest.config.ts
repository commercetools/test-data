import os from 'os';
import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['**/*.spec.ts'],
    exclude: [
      // Vitest defaults
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/coverage/**',
      // Exclude preset implementation files (but keep .spec.ts files)
      '**/presets/**/*.ts',
      '!**/presets/**/*.spec.ts', // Re-include spec files
    ],
    globals: true,
    environment: 'node',
    deps: {
      optimizer: {
        ssr: {
          exclude: ['@/models', '@/core', '@/utils'], // Force external processing like Jest
        },
      },
    },
    coverage: {
      enabled: false,
    },
    maxConcurrency: os.cpus().length,
    // vmthreads for better isolation
    pool: 'vmThreads',
    poolOptions: {
      vmThreads: {
        isolate: true,
      },
    },
    setupFiles: ['./vitest.setup.ts'],
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './standalone/src'),
      '@core': path.resolve(__dirname, './standalone/src/core'),
      '@models': path.resolve(__dirname, './standalone/src/models'),
      '@utils': path.resolve(__dirname, './standalone/src/utils'),
      '@/core/builder-types': path.resolve(
        __dirname,
        './standalone/src/core/builder-types'
      ),
    },
  },
});
