module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true
  },
  extends: [
    "eslint-config-airbnb-base",
    "eslint:recommended",
    "plugin:vue/recommended",
    "eslint-config-prettier",
    "eslint-config-prettier/vue"
  ],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": 0, // 0 = off, 1 = warn, 2 = error
    "vue/multi-word-component-names": 0,
    "vue/attribute-hyphenation": 0,
    "vue/v-on-event-hyphenation": 0,
    "camelcase": "off",
    "complexity": "off",
    "global-require": 0,
    "import/prefer-default-export": "off",
    "import/extensions": "off",
    "import/no-absolute-path": "off",
    "import/no-unresolved": "off",
    "func-names": "off",
    "no-nested-ternary": "off",
    "no-multi-assign": "off",
    "no-throw-literal": "off",
    "no-irregular-whitespace": "off",
    "no-await-in-loop": "off",
    "no-param-reassign": [
      "error",
      {
        "props": true,
        "ignorePropertyModificationsFor": [
          "e", // for e.returnvalue
          "ctx", // for Koa routing
          "req", // for Express requests
          "request", // for Express requests
          "res", // for Express responses
          "response", // for Express responses
          "s", // for vuex state
          "state" // for vuex state
        ]
      }
    ],
    "no-shadow": ["error", { allow: ["state"] }],
    "no-unused-expressions": ["error", { allowShortCircuit: true, allowTernary: true }],
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }]
  }
};
