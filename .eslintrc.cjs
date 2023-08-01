module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript', 'eslint-config-prettier'],
  // overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
  ignorePatterns: [
    'node_modules',
    'dist',
    'build',
    'out',
    'public',
    '!.eslintrc.cjs',
    '!.prettierrc.json',
    'tailwind.config.js',
  ],
}
