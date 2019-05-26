module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'standard',
    'standard-react',
    'prettier',
    'prettier/react',
    'prettier/standard',
    'plugin:lodash-fp/recommended',
  ],
  globals: {},
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    jsx: true,
    sourceType: 'module',
  },
  plugins: ['lodash-fp', 'prettier', 'standard'],
  root: true,
  rules: {
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: false,
        printWidth: 100,
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    eqeqeq: ['error', 'smart'],
  },
}