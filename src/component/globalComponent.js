import ButtonSwitch from "./ButtonSwitch.vue";
import UnderscoreSwitch from "./UnderscoreSwitch.vue";
import ColorValue from "./ColorValue.vue";

export default (Vue) => {
  Vue.component("ButtonSwitch", ButtonSwitch);
  Vue.component("UnderscoreSwitch", UnderscoreSwitch);
  Vue.component("ColorValue", ColorValue);
};
