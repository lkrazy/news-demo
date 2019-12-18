module.exports = {
  root: true,
  env: {
    node: true
  },
  plugins: [
    'react',
    'react-pug'
  ],
  extends: [
    'react-app',
    "plugin:react-pug/all"
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': 'off',
    'semi': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-use-before-define': 'off',
    'global-require': 'off',
    'consistent-return': 'off',
    'max-len': ["error", { "code": 150 }],
    'no-else-return': 'off',
    'no-param-reassign': 'off',
    'no-empty': 'off',
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'padded-blocks': 'off',
    'no-underscore-dangle': 'off',
    'prefer-destructuring': 'off',
    'arrow-body-style': 'off',
    'no-empty-pattern': 'off',
    'no-plusplus': 'off',
    'camelcase': 'off',
    'object-curly-newline': 'off',
    'no-restricted-globals': 'off',
    'newline-per-chained-call': 'off',
    'no-continue': 'off',
    'no-unused-vars': 'error',
    'import/no-dynamic-require': 'off',
    'no-return-await': 'off',
    'no-undef': 'off',
    'quotes': ['error', 'single'],
  },
  overrides: [
  ],
  parserOptions: {
    parser: 'babel-eslint'
  }
}
