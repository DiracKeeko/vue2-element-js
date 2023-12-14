<template>
  <div class="fear-greed-index" @click="handleClick">
    <div class="title text-dark">
      恐惧贪婪指数
    </div>
    <div class="sub-title text-grey">短期情绪</div>
    <div class="content-container">
      <div class="index-card" :class="realTimeAttitudeClass"></div>
    </div>
    <div class="footer">
      {{ realTimeAttitude }}
    </div>
  </div>
</template>

<script>
import { formatToPercent } from "js-financial-tools/modules/formatter";

import { setValueColor } from "@/util/color.js";

export default {
  name: "FearGreedIndex",
  components: {},
  props: {
    basicData: {
      type: String,
      default: "mid"
    }
  },
  data() {
    return {};
  },
  computed: {
    realTimeAttitudeClass() {
      return "attitude-mid";
    },
    realTimeAttitude() {
      return "正常情绪";
    }
  },
  watch: {},
  methods: {
    formatToPercent,
    setValueColor,
    handleClick() {
      console.log("click");
    }
  }
};
</script>

<style lang="scss" scoped>
.fear-greed-index {
  max-width: 300px;
  padding: 15px 20px 5px;
  text-align: center;
  background-color: var(--light-color);
  .title {
    .title-left {
      font-size: 16px;
    }
    .title-right {
      font-size: 14px;
    }
  }
  .sub-title {
    margin: 5px 0 0 0;
    font-size: 12px;
  }
  .content-container {
    display: flex;
    justify-content: center;
    align-items: center;
    .index-card {
      width: 80%;
      height: 85px;
      margin: 10px 0 0 0;
      border: 1px solid var(--grey-color);
      border-radius: 8px;
    }
    .attitude-mid {
      border-color: red;
    }
  }
  .footer {
    margin: 5px 0 5px;
  }
}
.fear-greed-index:hover {
  cursor: pointer;
  background-color: var(--hover-bg-color);
  .title {
    color: var(--primary-color);
  }
}
</style>
