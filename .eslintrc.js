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
    'import/extensions': ['error', 'never'], // 解决导入文件后缀问题
    'import/no-unresolved': [
      // 解决无法识别问题
      2,
      {
        ignore: ['./'],
      },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }], // 解决依赖问题
    'no-param-reassign': [
      // 解决不能直接修改参数问题
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['request', 'res', 'response', 'state'],
      },
    ],
    'prettier/prettier': 'error',
  },
};
