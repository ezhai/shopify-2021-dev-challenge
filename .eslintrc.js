/* eslint-disable no-multi-spaces */
module.exports = {
  root: true,
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  extends: ['airbnb', 'airbnb/hooks'],
  rules: {
    'react/react-in-jsx-scope': 'off',  // Unecessary in React 16+.
    'no-unused-vars': 'warn',           // Allow compilation with unused vars.
  },
};
