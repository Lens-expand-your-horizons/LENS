module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parser: 'vue-eslint-parser',
    extends: [
        // 'eslint:recommended',
        '@nuxtjs/eslint-config-typescript',
        // 'plugin:vue/vue3-recommended',
        // 'prettier',
        // 'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        indent: ['warn', 4],
        semi: ['warn', 'always'],
        quotes: ['warn', 'single'],
        'comma-dangle': ['warn', 'always-multiline'],
        '@typescript-eslint/no-unused-vars': 'off',
    },
};
