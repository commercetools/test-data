import { defineConfig } from 'vitest/config';

export default defineConfig({
  // plugins: [
  //   AutoImport({
  //     imports: ['vitest'],
  //     dts: true, // generate TypeScript declaration
  //   }),
  // ],
  test: {
    globals: true,
    // include: ['core/**/*.spec.ts', 'models/**/*.spec.ts', 'utils/**/*.spec.ts'],
    exclude: ['node_modules', 'dist', 'build'],
    // include: ['{core,models,utils}/**/src/**/*.spec.ts'],
  },
});
