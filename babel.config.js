/**
 * @type {import('@babel/core').TransformOptions}
 */
module.exports = {
  presets: ['@commercetools-frontend/babel-preset-mc-app'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./standalone/src'],
        alias: {
          '@/core': './standalone/src/core',
          '@/core/test-utils': './standalone/src/core/test-utils',
          '@/graphql-types': './standalone/src/graphql-types',
          '@/models': './standalone/src/models',
          '@/utils': './standalone/src/utils',
        },
      },
    ],
  ],
};
