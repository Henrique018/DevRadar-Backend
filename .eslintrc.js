module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb-base', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-console': 0,
    "camelcase": ["error", {
      "properties": "never",
      "ignoreDestructuring": true,
      "allow": ["github_username"],
    }],
    "arrow-parens":["error", "as-needed"]
  },
};
