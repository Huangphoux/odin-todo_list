import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

import unusedImports from 'eslint-plugin-unused-imports';

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs}'],
        plugins: { js, 'unused-imports': unusedImports },
        extends: ['js/recommended', 'prettier'],
        languageOptions: { globals: globals.browser },
    },
    {
        rules: {
            'no-unused-vars': 'warn',
            'no-undef': 'warn',
            'no-func-assign': 'error',
            'no-duplicate-case': 'off',
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],
        },
    },
]);
