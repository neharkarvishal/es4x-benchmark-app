module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier/standard',
    'prettier/unicorn'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  "plugins": ["prettier"],
  rules: {
    'max-len': ["error", { "code": 80, "ignoreComments": true }],
    'arrow-parens': [1, "as-needed", { "requireForBlockBody": false }],
    'no-multiple-empty-lines': ["error", {'max': 1, 'maxEOF': 0, 'maxBOF': 0}],
    'import/prefer-default-export': 'off',
    'no-use-before-define': ['error', {'variables': false}],
    'no-console': ['warn', {allow: ['info', 'warn', 'error']}],
    'no-restricted-properties': 'off',
    'class-methods-use-this': 'off',
    'prettier/prettier': 'error'
  },
};
