const getPathInternal = pattern => ({ pattern, group: 'internal' });
const resolveRelativeAppRoot = require('./utils/resolvePath').resolveRelativeAppRoot;

const importOrder = {
  pathGroups: [getPathInternal('~**'), getPathInternal('~**/**')],
  groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
  alphabetize: { order: 'asc' },
  'newlines-between': 'always',
};

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
      project: resolveRelativeAppRoot('./tsconfig.json'),
      ecmaFeatures: {
        jsx: true,
      },
      warnOnUnsupportedTypeScriptVersion: true,
  },
  ignorePatterns: [resolveRelativeAppRoot('./dist'), resolveRelativeAppRoot('./webpack/*.js'), resolveRelativeAppRoot('.eslintrc.js')],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  plugins: ['import'],
  rules: {
    indent: ['warn', 2, { SwitchCase: 1 }],
    'no-multi-spaces': ['warn'],
    '@typescript-eslint/no-unused-vars': ['warn'],
    "prettier/prettier": ["warn"],
    'import/order': ['error', importOrder],
    'import/no-duplicates': 'error',
    'curly': ['error', 'all']
  }
};
  