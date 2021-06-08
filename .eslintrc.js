const getPathInternal = pattern => ({ pattern, group: 'internal' });

const order = {
  pathGroups: [getPathInternal('~**'), getPathInternal('~**/**')],
  groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
  alphabetize: { order: 'asc' },
  'newlines-between': 'always',
};

module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module', // Allows for the use of imports
        project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true, // Allows for the parsing of JSX
        },
        warnOnUnsupportedTypeScriptVersion: true,
    },
    ignorePatterns: ['/dist', "/webpack/*.js", ".eslintrc.js"],
    extends: [
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
      'plugin:prettier/recommended'
    ],
    plugins: ['import','react-hooks'],
    rules: {
      indent: ['warn', 2, { SwitchCase: 1 }],
      'no-multi-spaces': ['warn'],
    },
    overrides: [{
      files: ['*.ts', '*.tsx', '*.js',],
      rules: {
        "prettier/prettier": ["warn"],
        'import/order': ['error', order],
        'import/no-duplicates': 'error',
        'curly': ['error', 'all'], // https://github.com/prettier/eslint-config-prettier#curly
        'react/prop-types': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        '@typescript-eslint/no-unused-vars': ['warn'],
      },
    },  
  ],
  settings: {
    // Tells eslint-plugin-react to automatically detect the version of React to use
    react: { version: 'detect' },
  },
};
  