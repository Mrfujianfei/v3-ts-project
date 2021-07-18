module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['plugin:vue/essential', 'airbnb-base', 'prettier'],
	parserOptions: {
		ecmaVersion: 12,
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
	},
	plugins: ['vue', '@typescript-eslint', 'prettier'],
	rules: {
		'vue/no-multiple-template-root': 'off', // 解决template中最顶层只能返回一个元素的检测报错
		'import/extensions': ['error', 'never'],
		'import/no-unresolved': [
			2,
			{
				ignore: ['./'],
			},
		],
		"import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
		"no-param-reassign": [
			"error",
			{
				"props": true,
				"ignorePropertyModificationsFor": [
					"request",
					"res",
					"response",
					"state"
				]
			}
		]
	},
};
