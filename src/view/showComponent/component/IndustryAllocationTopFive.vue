<template>
  <div class="industry-allocation-top-five">
    <div class="title text-dark">
      <span class="title-left">公募基金加仓行业TOP5</span>
      <span class="title-right">(估算)</span>
    </div>
    <div class="sub-title text-grey">较前20个交易日</div>
    <div class="top5">
      <div v-for="(item, index) in basicData" :key="index" class="top5-item">
        <div class="industry-name text-dark">{{ item.industryName }}</div>
        <div class="industry-estimate">
          <span class="industry-estimate-number" :style="{ color: setValueColor(item.value) }">{{
            formatToPercent(item.value)
          }}</span>
          <svg-icon v-if="item.value > 0" icon-class="arrow-up-red"></svg-icon>
          <svg-icon v-else icon-class="arrow-down-green"></svg-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatToPercent } from "js-financial-tools/modules/formatter";

import { setValueColor } from "@/util/color.js";

const defaultData = [
  {
    industryName: "电力设备",
    industryId: "801730.SI",
    value: 0.10523
  },
  {
    industryName: "食品饮料",
    industryId: "spyl",
    value: 0.09231
  },
  {
    industryName: "医药生物",
    industryId: "yysw",
    value: 0.07123
  },
  {
    industryName: "通信",
    industryId: "tx",
    value: 0.05611
  },
  {
    industryName: "交通运输",
    industryId: "jtys",
    value: 0.01052
  }
];

export default {
  name: "IndustryAllocationTopFive",
  components: {},
  props: {
    basicData: {
      type: Array,
      default: () => defaultData
    }
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    formatToPercent,
    setValueColor
  }
};
</script>

<style lang="scss" scoped>
.industry-allocation-top-five {
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
  .top5 {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .top5-item {
    width: 20%;
    padding: 10px 0;
    min-width: 110px;
    .industry-name {
      margin: 0 0 5px 0;
      font-size: 14px;
    }
    .industry-estimate {
      .industry-estimate-number {
        font-size: 18px;
      }
    }
  }
}
</style>
