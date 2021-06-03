module.exports = {
  env: {
    browser: true,
    es6: true,
    'jest/globals': true,
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
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
