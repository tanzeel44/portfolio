module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: 'airbnb',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: [
    'react', 'jest',
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
    'linebreak-style': [1, 'windows'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
