<template>
  <span :style="{ color: setValueColor(value) }">
    <slot></slot>
    <span v-if="!$slots.default">
      {{ formattedValue }}
    </span>
    <span v-if="useArrow" style="display: inline-block; width: 16px;">
      <svg-icon class="fs-xs" :icon-class="arrowIcon"></svg-icon>
    </span>
  </span>
</template>

<script>
import { formatToPercent } from "js-financial-tools/modules/formatter";
import { setValueColor } from "@/util/color.js";

export default {
  name: "ColorValue",
  props: {
    value: {
      type: [Number, String, null, undefined],
      default: 0
    },
    formatter: {
      type: Function,
      default: formatToPercent
    },
    useArrow: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    formattedValue() {
      return this.formatter(this.value);
    },
    arrowIcon() {
      let res = "";
      if (this.value > 0) {
        res = "arrow-up-red";
      }
      if (this.value < 0) {
        res = "arrow-down-green";
      }
      return res;
    }
  },
  methods: {
    setValueColor
  }
};
</script>
