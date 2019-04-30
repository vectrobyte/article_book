module.exports = {
  'env': {
    'es6': true,
    'browser': true,
    'node': true,
    'jest': true
  },
  'parser': 'babel-eslint',
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    'react-native'
  ],
  'rules': {
    'indent': [
      'warn',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'warn',
      'single'
    ],
    'semi': [
      'warn',
      'always'
    ],
    'no-var': [
      'error'
    ],
    'eqeqeq': [
      'error'
    ],
    'react/jsx-max-props-per-line': [
      'error', {
      maximum: 1,
        when: 'multiline'
    }],
    'react-native/no-unused-styles': 'warn',
    'react-native/split-platform-components': 'warn',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-color-literals': 'warn',
    'no-unused-vars': 'warn',
    'no-console': 'warn'
  },
  'globals': {
    'fetch': true,
    '__DEV__': true
  },
};
