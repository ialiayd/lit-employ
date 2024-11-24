import pluginJs from '@eslint/js';
import litA11y from 'eslint-plugin-lit-a11y';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ files: ['**/*.{js,mjs,cjs,ts}'] },
	{ languageOptions: { globals: globals.browser } },

	// Base configurations
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,

	// Plugin configurations
	{
		plugins: {
			prettier: eslintPluginPrettier,
			'unused-imports': unusedImports,
			'lit-a11y': litA11y,
		},
		settings: {
			'lit-a11y': {
				components: ['*'], // This tells lit-a11y to check all components
			},
		},
		rules: {
			// Prettier rules
			'prettier/prettier': 'error',

			// Unused imports rules
			'no-unused-vars': 'off',
			'unused-imports/no-unused-imports': 'error',
			'unused-imports/no-unused-vars': [
				'error',
				{
					vars: 'all',
					varsIgnorePattern: '^_',
					args: 'after-used',
					argsIgnorePattern: '^_',
				},
			],

			// Lit a11y rules
			'lit-a11y/click-events-have-key-events': 'error',
			'lit-a11y/mouse-events-have-key-events': 'error',

			// General rules
			'no-undef': 'error',
			'no-console': 'error',
		},
	},
];
