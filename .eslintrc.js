const error = 2;
const warn = 1;
const ignore = 0;

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'eslint-config-airbnb',
    'plugin:vue/strongly-recommended',
    'prettier',
    'prettier/react',
  ],
  plugins: [
    'vue',
    'prettier',
    'react',
    'json',
  ],
  rules: {
    'no-console': error,
    'linebreak-style': ignore,
    'import/no-extraneous-dependencies': ignore,
    'import/no-unresolved': ignore,
    'prettier/prettier': [
      warn,
      {
        printWidth: 100,
        tabWidth: 2,
        bracketSpacing: true,
        trailingComma: 'es5',
        singleQuote: true,
      },
    ],
    'react/jsx-filename-extension': [
      warn,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
  }
};

