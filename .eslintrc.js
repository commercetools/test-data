/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  // TODO: use the new `eslint-config-node`?
  extends: ['@commercetools-frontend/eslint-config-mc-app'],
  rules: {
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
    'import/no-anonymous-default-export': 'off',
  },
  settings: {
    react: {
      // That's a lie, we don't use React here. However, the ESLint preset
      // comes with the react plugin and `version: detect`, so we pass
      // `latest` to avoid logging a warning.
      // TODO: maybe we need to ship a more modular ESLint config,
      // so that it can be used in a non-react environment.
      version: '17',
    },
  },
};
