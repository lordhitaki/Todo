module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/prop-types': 'off',
    'global-require': 'off',
    'no-console': 'off',
    'no-alert': 'off',
    'react/jsx-no-bind': 'off',
    'react/self-closing-comp': 'off'
  },
};
