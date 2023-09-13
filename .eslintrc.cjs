module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2017: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js'], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  extends: ['next', 'plugin:json/recommended'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: {react: {version: 'detect'}},
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        'next',
        'plugin:@typescript-eslint/recommended', // TypeScript rules
        'plugin:jsx-a11y/recommended', // Accessibility rules
        'plugin:prettier/recommended', // Prettier recommended rules
      ],
      rules: {
        'jsx-a11y/anchor-is-valid': 'off', // This rule is not compatible with how Next.js's <Link />
        'jsx-a11y/click-events-have-key-events': 'off', // This rule is not compatible with how Next.js's <Link />
        'jsx-a11y/no-static-element-interactions': 'off', // This rule is not compatible with how Next.js's <Link />
        '@typescript-eslint/no-empty-interface': 'off',
        'prettier/prettier': ['error', {}, {usePrettierrc: true}], // Includes .prettierrc.js rules
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
}
