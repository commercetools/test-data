/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  // TODO: use the new `eslint-config-node`?
  extends: ['@commercetools-frontend/eslint-config-mc-app'],
  settings: {
    react: {
      // That's a lie, we don't use React here. However, the ESLint preset
      // comes with the react plugin and `version: detect`, so we pass
      // `latest` to avoid logging a warning.
      // TODO: maybe we need to ship a more modulare ESLint config,
      // so that it can be used in a non-react environment.
      version: '17',
    },
  },
};
