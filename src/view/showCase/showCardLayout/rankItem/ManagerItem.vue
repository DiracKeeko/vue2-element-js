<template>
  <div
    class="rank-list-item"
    :style="{ height: screenSize === 'sm' ? '74px' : '74px' }"
    @click="basicData.productId && handleClick(basicData.productId)"
  >
    <div class="avatar ml-2">
      <img v-if="basicData.avatar" :src="getCompleteImageBase64(basicData.avatar)" alt="头像" />
      <svg-icon
        v-else
        icon-class="icon_avatarMale"
        style="width: 3.75rem; height: 3.75rem"
      ></svg-icon>
    </div>
    <div class="rank-list-item__mid">
      <div class="manager-name text-dark">{{ basicData.title }}</div>
      <div class="manager-company text-grey">{{ basicData.subTitle }}</div>
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
  name: "ManagerRankListItem",
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
    },
    getImageTypeFromBase64(str) {
      switch (str.charAt(0)) {
        case "/":
          return "image/jpeg";
        case "i":
          return "image/png";
        case "R":
          return "image/gif";
        case "U":
          return "image/webp";
        case "Q":
          return "image/bmp";
        default:
          return null;
      }
    },
    getCompleteImageBase64(str) {
      return `data:${this.getImageTypeFromBase64(str) || "image/jpeg"};base64,${str}`;
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
  .rank-list-item__mid {
    flex: 1;
    margin-left: 0.8rem;
    .manager-name {
      margin-bottom: 0.5rem;
    }
    .manager-company {
      font-size: 0.8rem;
    }
  }
  .rank-list-item__right {
    text-align: right;
    .profit-value {
      margin-bottom: 0.5rem;
      font-size: 1.25rem;
      color: #ff2323;
    }
    .profit-label {
      font-size: 0.8rem;
    }
  }
  &:hover {
    cursor: pointer;
    background-color: var(--hover-bg-color);
    .manager-name {
      color: var(--primary-color);
    }
  }
}
</style>
