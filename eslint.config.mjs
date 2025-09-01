import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    files: ['**/*.ts', '**/*.js'],
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
    },
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
      prettierConfig,
    ],
  },
];
