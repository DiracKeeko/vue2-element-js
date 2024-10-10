<template>
  <component :is="displayMode ? 'div' : 'span'" v-html="math"></component>
</template>

<script>
import katex from "katex";

// 用于移除 undefined 属性的函数
const removeUndefined = (obj) => {
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] !== "undefined") {
      newObj[key] = obj[key];
    }
  });
  return newObj;
};

export default {
  name: "KatexElement",
  props: {
    expression: {
      type: String,
      default: "",
      required: true
    },
    displayMode: {
      type: Boolean,
      default: undefined
    },
    throwOnError: {
      type: Boolean,
      default: undefined
    },
    errorColor: {
      type: String,
      default: undefined
    },
    macros: {
      type: Object,
      default: undefined
    },
    colorIsTextColor: {
      type: Boolean,
      default: undefined
    },
    maxSize: {
      type: Number,
      default: undefined
    },
    maxExpand: {
      type: Number,
      default: undefined
    },
    allowedProtocols: {
      type: Array,
      default: undefined
    },
    strict: {
      type: [Boolean, String, Function],
      default: undefined
    }
  },
  computed: {
    // 合并自定义的 KaTeX 选项
    options() {
      return removeUndefined({
        displayMode: this.displayMode,
        throwOnError: this.throwOnError,
        errorColor: this.errorColor,
        macros: this.macros,
        colorIsTextColor: this.colorIsTextColor,
        maxSize: this.maxSize,
        maxExpand: this.maxExpand,
        allowedProtocols: this.allowedProtocols,
        strict: this.strict
      });
    },
    // 生成的数学表达式
    math() {
      return katex.renderToString(this.expression, this.options);
    }
  }
};
</script>
