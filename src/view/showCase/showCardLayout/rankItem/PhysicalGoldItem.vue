<template>
  <div
    class="rank-list-item d-flex ai-center"
    :style="{ height: screenSize === 'sm' ? '74px' : '74px' }"
    @click="basicData.productId && handleClick(basicData.productId)"
  >
    <div class="item-title text-dark ml-4">{{ basicData.title }}</div>
  </div>
</template>

<script>
import { formatToPercent } from "js-financial-tools/modules/formatter";

import { setValueColor, setRankColor } from "@/util/color.js";

export default {
  name: "PhysicalGoldItem",
  props: {
    basicData: {
      type: Object,
      default: () => ({})
    },
    screenSize: {
      type: String,
      default: "normal"
    }
  },
  methods: {
    formatToPercent,
    setValueColor,
    setRankColor,
    handleClick(productId) {
      this.$emit("clickRankItem", productId);
    }
  }
};
</script>

<style lang="scss" scoped>
.rank-list-item {
  box-sizing: border-box;
  align-items: center;
  padding: 1rem 1rem 1rem 0;
  .avatar {
    width: 3.75rem;
    height: 3.75rem;
    overflow: hidden;
    border-radius: 50%;
    img {
      max-width: 100%;
    }
  }
  &:hover {
    cursor: pointer;
    background-color: var(--hover-bg-color);
    .item-title {
      color: var(--primary-color);
    }
  }
}
</style>
