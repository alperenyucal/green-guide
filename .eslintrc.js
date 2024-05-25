module.exports = {
  root: true,
  extends: [
    'expo',
    'airbnb',
    'airbnb-typescript',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: ['import'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  settings: {
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
  rules: {
    'no-underscore-dangle': 'off',
    'react/no-array-index-key': 'off',
    'no-cond-assign': 'off',
    'no-restricted-syntax': 'off',
    'no-plusplus': 'off',
    'global-require': 'off',
    'no-nested-ternary': 'off',
    'react/destructuring-assignment': 'off',
    'import/no-unresolved': [
      'error',
      {
        ignore: ['.svg'],
      },
    ],
    'import/newline-after-import': 'warn',
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/no-unstable-nested-components': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'react-native/no-inline-styles': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
  },
  ignorePatterns: ['**/*.js', '**/*.html'],
};
