module.exports = {
  plugins: ['@typescript-eslint', 'vuetify'],
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs'
  ],
  rules: {
    'vuetify/no-deprecated-classes': 'error',
    'vuetify/grid-unknown-attributes': 'error',
    'vuetify/no-legacy-grid': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'space-before-function-paren': 'off',
    'comma-dangle': 'off',
    'no-return-assign': 'off',
    'vue/max-attributes-per-line': 'off',
    'arrow-parens': 'off',
  },
}
