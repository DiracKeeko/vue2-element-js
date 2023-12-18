<template>
  <div
    class="rank-list-item"
    :style="{ height: screenSize === 'sm' ? '74px' : '74px' }"
    @click="basicData.productId && handleClick(basicData.productId)"
  >
    <div class="rank-list-item__top">
      <div class="item-title text-dark ml-4">{{ basicData.title }}</div>
    </div>
    <div class="rank-list-item__bottom">
      <span class="profit-label text-grey ml-4">{{ basicData.subTitle }}</span>
    </div>
  </div>
</template>

<script>
import { formatToPercent } from "js-financial-tools/modules/formatter";

import { setValueColor, setRankColor } from "@/util/color.js";

export default {
  name: "InsuranceItem",
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
  .rank-list-item__top {
    .item-title {
      margin-bottom: 0.5rem;
    }
  }
  .rank-list-item__bottom {
    .profit-label {
      font-size: 0.8rem;
    }
    .profit-value {
      font-size: 0.8rem;
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
