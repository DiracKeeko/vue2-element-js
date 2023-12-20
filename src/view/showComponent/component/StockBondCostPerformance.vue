<template>
  <div class="stock-bond-cost-performance" @click="handleClick">
    <div class="title text-dark">股债性价比</div>
    <div class="sub-title text-grey">沪深300</div>
    <div class="content-container">
      <div class="index-card d-flex jc-around ai-center">
        
      </div>
    </div>
    <div class="footer" :style="{ 'color': performanceTextColor }">
      {{ performanceText }}
    </div>
  </div>
</template>

<script>
import { formatToPercent } from "js-financial-tools/modules/formatter";

export default {
  name: "StockBondCostPerformance",
  components: {},
  props: {},
  data() {
    return {
      performanceValue: 0.1
    };
  },
  computed: {
    performanceText() {
      const { performanceValue, createFactorLabel } = this;
      const performanceTextArr = [
        "性价比极低",
        "性价比较低",
        "性价比适中",
        "性价比较高",
        "性价比极高"
      ];
      return createFactorLabel(performanceValue, performanceTextArr);
    },
    performanceTextColor() {
      const { performanceValue, createFactorLabel } = this;
      const performanceTextColorArr = ["#039967", "#0089C8", "#ED9613", "#FF6105", "#E12F3D"];
      return createFactorLabel(performanceValue, performanceTextColorArr);
    }
  },
  watch: {},
  methods: {
    formatToPercent,
    createFactorLabel(val, labelArr = ["极低", "低", "正常", "高", "极高"]) {
      const rangeArr = [-2, -1, 1, 2, Infinity];
      for (let i = 0; i < rangeArr.length; i++) {
        if (val < rangeArr[i]) {
          return labelArr[i];
        }
      }
      return "";
    },
    handleClick() {
      console.log("click");
    }
  }
};
</script>

<style lang="scss" scoped>
.stock-bond-cost-performance {
  max-width: 300px;
  padding: 15px 20px 5px;
  text-align: center;
  background-color: var(--light-color);
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
      border-radius: 8px;
    }
  }
  .footer {
    margin: 5px 0 5px;
  }
}
.stock-bond-cost-performance:hover {
  cursor: pointer;
  background-color: var(--hover-bg-color);
  .title {
    color: var(--primary-color);
  }
}
</style>
