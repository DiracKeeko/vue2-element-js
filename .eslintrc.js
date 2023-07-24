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
    "plugin:vue/essential",
    "prettier",
    "prettier/vue"
  ],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
    // 'vue/no-v-for-template-key': 'off', // vue2
    // 'vue/no-v-for-template-key-on-child': 'off' // vue3
  }
};
