module.exports = {
    env: {
        node: true,
        commonjs: true,
        es2021: true,
        jest: true
    },
    extends: 'eslint:recommended',
    plugins: ['jest'],
    parserOptions: {
        'ecmaVersion': 13
    },
    rules: {
        'indent': ['error', 4],
        'linebreak-style': ['error', 'windows'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always']
    }
};
