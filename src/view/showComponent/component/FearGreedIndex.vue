<template>
  <div class="fear-greed-index" @click="handleClick">
    <div class="title text-dark">恐惧贪婪指数</div>
    <div class="sub-title text-grey">短期情绪</div>
    <div class="content-container">
      <div class="index-card d-flex jc-between ai-center" :class="attitudeClass">
        <div class="card-left text-center"></div>
        <div class="card-right">
          <div class="d-flex jc-between mt-1">
            <span class="pr-4 fs-xs text-dark-grey">较上日</span>
            <ColorValue :useArrow="true" :value="cardData.d1Change">{{
              cardData.d1Change
            }}</ColorValue>
          </div>
          <div class="d-flex jc-between mt-1">
            <span class="pr-4 fs-xs text-dark-grey">较上周</span>
            <ColorValue :useArrow="true" :value="cardData.d5Change">{{
              cardData.d5Change
            }}</ColorValue>
          </div>
          <div class="d-flex jc-between mt-1">
            <span class="pr-4 fs-xs text-dark-grey">较上月</span>
            <ColorValue :useArrow="true" :value="cardData.d20Change">{{
              cardData.d20Change
            }}</ColorValue>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      {{ cardData.label }}
    </div>
  </div>
</template>

<script>
import { formatToPercent } from "js-financial-tools/modules/formatter";

import { setValueColor } from "@/util/color.js";

const fearGreedData = {
  "datetime": "2023-12-13",
  "fearGreedIndex": 0.1744,
  "futurePremium": 0.6368,
  "hedgeIndicator": 0.0792,
  "marginTrading": 0.4392,
  "marketVolatilityAdjusted": 0.1372,
  "northMoney": 0.092,
  "d1Change": -0.10560000000000003,
  "d5Change": -0.0648,
  "d20Change": -0.516,
  "aSharePriceLevel": 0.4584
};

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
    attitudeClass() {
      const { fearGreedIndex } = fearGreedData;
      const { createFactorLabel } = this;
      const classArr = [
        "attitude-extreme-low",
        "attitude-low",
        "attitude-mid",
        "attitude-high",
        "attitude-extreme-high"
      ];
      return createFactorLabel(fearGreedIndex, classArr);
    },
    cardData() {
      const { roundVal, createFactorLabel } = this;
      const { d1Change, d5Change, d20Change, fearGreedIndex } = fearGreedData;
      const indexNameArr = ["极度恐惧", "相当恐惧", "正常情绪", "相当贪婪", "极度贪婪"];
      return {
        label: createFactorLabel(fearGreedIndex, indexNameArr),
        d1Change: roundVal(d1Change),
        d5Change: roundVal(d5Change),
        d20Change: roundVal(d20Change),
        fearGreedIndex: roundVal(fearGreedIndex)
      };
    }
  },
  watch: {},
  methods: {
    formatToPercent,
    setValueColor,
    roundVal(val) {
      return val ? Math.round(val * 100) : "--";
    },
    createFactorLabel(val, labelArr = ["极低", "低", "正常", "高", "极高"]) {
      const rangeArr = [0.1, 0.3, 0.7, 0.9, 1];
      for (let i = 0; i < rangeArr.length; i++) {
        if (val < rangeArr[i]) {
          return labelArr[i];
        }
      }
      if (val === 1) {
        return labelArr[labelArr.length - 1];
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
