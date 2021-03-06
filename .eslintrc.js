module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'

  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'react/jsx-curly-spacing': ['error', 'always', { allowMultiline: true }], // OK
    'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }], // ERROR
    'prettier/prettier': 'error'
  },
};
