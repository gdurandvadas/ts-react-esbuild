module.exports = {
  env: {
    browser: true,
    es2022: true
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript'],
  overrides: [],
  ignorePatterns: [
    'node_modules', '**/public/client/**', '**/server/index.js'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    indent: ['error', 2],
    'no-multi-spaces': ['error']
  }
};
