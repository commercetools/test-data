module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  plugins: ['import', 'jest', 'prettier', '@typescript-eslint/eslint-plugin'],
  rules: {
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/naming-convention': 0,
    '@typescript-eslint/consistent-type-definitions': 0,
    '@typescript-eslint/no-explicit-any': 2,
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
      },
    ],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/unbound-method': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'import/default': 0,
    'import/no-unresolved': 2,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.js', '.jsx', '.ts', '.tsx'],
    },
    'import/resolver': {
      'eslint-import-resolver-typescript': true,
      typescript: {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  overrides: [
    {
      files: ['*.spec.ts'],
      env: {
        jest: true,
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/ban-ts-comment': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/explicit-member-accessibility': [
          2,
          {
            accessibility: 'no-public',
          },
        ],
        '@typescript-eslint/no-require-imports': 0,
        '@typescript-eslint/promise-function-async': 0,
      },
    },
  ],
};
