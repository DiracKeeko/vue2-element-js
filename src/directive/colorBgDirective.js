import { setValueColor } from "@/util/color.js";

// 在vue2中 实现一个根据传入的数值，设置颜色的自定义指令
export default {
  bind(el, binding) {
    const color = setValueColor(binding.value);
    el.style.backgroundColor = color;
  }
}