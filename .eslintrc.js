module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true
  },
  extends: [
    "airbnb-base",
    "eslint:recommended",
    "plugin:vue/recommended",
    "prettier",
    "prettier/vue"
  ],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    'no-console': 0,
		'vue/valid-template-root': 0,
		'import/no-extraneous-dependencies': 0,
		'no-param-reassing': 0,
		'vue/multi-word-commponent-names': 0,
		'vue/attribute-hyphenation': 0,
		'vue/v-on-event-hyphenation': 0,
  }
};
