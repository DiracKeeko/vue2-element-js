import ButtonSwitch from "./ButtonSwitch.vue";
import UnderscoreSwitch from "./UnderscoreSwitch.vue";
import InputWrapper from "./InputWrapper.vue";
import ColorValue from "./ColorValue.vue";
import KatexElement from "./KatexElement.vue";

export default (Vue) => {
  Vue.component("ButtonSwitch", ButtonSwitch);
  Vue.component("UnderscoreSwitch", UnderscoreSwitch);
  Vue.component("InputWrapper", InputWrapper);
  Vue.component("ColorValue", ColorValue);
  Vue.component("KatexElement", KatexElement);
};
