import path from 'node:path';
import { defineConfig } from 'vite';
import { dependencies } from './package.json';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      name: 'TestData',
      fileName: '@commercetools-frontend/test-data',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: Object.keys(dependencies), // Externalize non-package dependencies
      output: {
        manualChunks(id) {
          console.log('///---> Bundling manual chunks:', id);

          if (id.includes('@commercetools-test-data/associate-role')) {
            return '@commercetools-test-data/associate-role';
          }
          if (id.includes('@commercetools-test-data/channel')) {
            return '@commercetools-test-data/channel';
          }
          if (id.includes('@commercetools-test-data/commons')) {
            return '@commercetools-test-data/commons';
          }
          if (id.includes('@commercetools-test-data/core')) {
            return '@commercetools-test-data/core';
          }
          if (id.includes('@commercetools-test-data/store')) {
            return '@commercetools-test-data/store';
          }
          if (id.includes('@commercetools-test-data/utils')) {
            return '@commercetools-test-data/utils';
          }
        },
      },
    },
  },
});
