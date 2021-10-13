module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		'jest/globals': true
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
		'react',
		'jest'
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
		'no-restricted-globals': 'off',
		'global-require': 'off',
		'comma-dangle': ['error', 'never'],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'import/no-unresolved': 'off',
		'import/no-extraneous-dependencies': 'off',
		'import/prefer-default-export': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'react/no-array-index-key': 1,
		'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
		'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }]
	}
};
