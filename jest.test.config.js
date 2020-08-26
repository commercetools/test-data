module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '\\.spec\\.[j|t]sx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-master'],
  // Without this option, somehow CI fails to run the tests with the following error:
  //   TypeError: Unable to require `.d.ts` file.
  //   This is usually the result of a faulty configuration or import. Make sure there is a `.js`, `.json` or another executable extension available alongside `core.ts`.
  // Fix is based on this comment:
  // - https://github.com/kulshekhar/ts-jest/issues/805#issuecomment-456055213
  // - https://github.com/kulshekhar/ts-jest/blob/master/docs/user/config/isolatedModules.md
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};
