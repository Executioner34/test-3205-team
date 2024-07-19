import pluginVue from 'eslint-plugin-vue'
export default [
    ...pluginVue.configs['flat/recommended'],
    {
        rules: {
        },
        languageOptions: {
            parserOptions: {
                parser: '@typescript-eslint/parser'
            }
        }
    }
]
