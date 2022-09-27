module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: ["vue"],
  // add your custom rules here
  rules: {
    "vue/multi-word-component-names": 'off',
    "vue/this-in-template": "off",
    "no-console":process.env.NODE_ENV ==='production'?'error':'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
  },
}
