// import Vue from "vue";
import color from "./colorDirective.js";
import colorBg from "./colorBgDirective.js";

// Vue.directive("color", color);
// Vue.directive("colorBg", colorBg);

const globalDirectives = {
  color,
  colorBg
};

// Object.keys(globalDirectives).forEach(key => {
//   Vue.directive(key, globalDirectives[key]);
// });

// 插件式的使用
export default {
  install(Vue) {
    Object.keys(globalDirectives).forEach((key) => {
      Vue.directive(key, globalDirectives[key]);
    });
  }
};