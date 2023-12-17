<template>
  <div
    class="rank-list-item"
    :style="{ height: screenSize === 'sm' ? '74px' : '74px' }"
    @click="basicData.productId && handleClick(basicData.productId)"
  >
    <div class="rank-list-item__left">
      <div class="item-title text-dark">{{ basicData.title }}</div>
      <div class="item-sub-title text-grey">{{ basicData.subTitle }}</div>
    </div>
    <div class="rank-list-item__right">
      <div class="profit-value" :style="{ color: setValueColor(basicData.gain) }">
        {{ formatToPercent(basicData.gain) }}
      </div>
      <div class="profit-label text-grey">近1年</div>
    </div>
  </div>
</template>

<script>
import { formatToPercent } from "js-financial-tools/modules/formatter";

import { setValueColor, setRankColor } from "@/util/color.js";

export default {
  name: "FundItem",
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
  display: flex;
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
  .rank-list-item__left {
    flex: 1;
    margin-left: 0.8rem;
    .item-title {
      margin-bottom: 0.5rem;
    }
    .item-sub-title {
      font-size: 0.8rem;
    }
  }
  .rank-list-item__right {
    text-align: right;
    .profit-value {
      margin-bottom: 0.5rem;
      font-size: 1.25rem;
    }
    .profit-label {
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
