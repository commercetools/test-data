/**
 * @type {import('@jest/types').Config.ProjectConfig}
 */
module.exports = {
  runner: 'jest-runner-eslint',
  displayName: 'eslint',
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  modulePathIgnorePatterns: [
    '/build/',
    'dist',
    'public',
    'generated',
    // TODO: remove once sample data is removed from the repository
    'sample-data-*',
  ],
  testMatch: ['<rootDir>/**/*.js', '<rootDir>/**/*.ts', '<rootDir>/**/*.tsx'],
  watchPlugins: ['jest-watch-typeahead/filename'],
};
