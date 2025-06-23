import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // Disable all linting rules
      ...Object.fromEntries(
        Object.keys({
          ...js.configs.recommended.rules,
          ...reactHooks.configs.recommended.rules,
        }).map((rule) => [rule, 'off'])
      ),
      'no-unused-vars': 'off',
      'react-refresh/only-export-components': 'off',
    },
  },
]
