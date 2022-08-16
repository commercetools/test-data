/**
 * @type {import('@jest/types').Config.ProjectConfig}
 */
module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.(js|ts)$': 'babel-jest',
  },
  testMatch: ['**/*.spec.js', '**/*.spec.ts'],
  moduleFileExtensions: ['ts', 'js'],
  watchPlugins: ['jest-watch-typeahead/filename'],
  setupFilesAfterEnv: ['./setup-test-framework.js'],
};
