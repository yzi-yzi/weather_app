module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: [
		'airbnb', 'airbnb/hooks'
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 12,
		sourceType: 'module'
	},
	plugins: [
		'react'
	],
	rules: {
		indent: [
			'error',
			'tab',
			{
				SwitchCase: 1
			}
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		quotes: [
			'error',
			'single'
		],
		semi: [
			'error',
			'always'
		],
		radix: 'off',
		'global-require': 'off',
		'comma-dangle': ['error', 'never'],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'react/jsx-props-no-spreading': 'off',
		'import/no-extraneous-dependencies': 'off',
		'import/prefer-default-export': 'off',
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'react/no-array-index-key': 1,
		'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
		'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
		'import/no-unresolved': 'off'
	}
};
