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
        'no-unused-vars': 'warn',
        'no-console': 'warn'
    },
    'globals': {
        'fetch': true,
        '__DEV__': true
    },
};
