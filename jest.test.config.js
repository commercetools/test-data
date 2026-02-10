/**
 * @type {import('@jest/types').Config.ProjectConfig}
 */
module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.(js|ts)$': 'babel-jest',
  },
  // @faker became ESM only starting from v10,
  // so we need to allow Jest to transform it.
  transformIgnorePatterns: [
    '/node_modules/(?!@faker-js/faker)(?!.pnpm/.*/@faker-js/faker)',
  ],
  testMatch: ['**/*.spec.js', '**/*.spec.ts'],
  moduleFileExtensions: ['ts', 'js'],
  watchPlugins: ['jest-watch-typeahead/filename'],
  setupFilesAfterEnv: ['jest-extended/all', './setup-test-framework.js'],
  // Newest version of prettier does not work with Jest so
  // we need to use an older one just in this case.
  // Referece: https://jestjs.io/docs/configuration/#prettierpath-string
  prettierPath: require.resolve('prettier-jest'),
};
