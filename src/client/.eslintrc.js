const baseConfig = require('../../baseConfig/.eslintrc');

module.exports = {
  ...baseConfig,
  extends: [
    'plugin:react/recommended'
  ].concat(baseConfig.extends),
  plugins: baseConfig.plugins.concat(['react-hooks']),
  rules: {
    ...module.rules,
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },
  settings: {
    react: { version: 'detect' },
  },
};
  