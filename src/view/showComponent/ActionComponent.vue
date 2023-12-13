<template>
  <div class="action-component p-5 mt-5">
    <div>
      <div class="fs-lg fw-bold mb-2">TwoDatePicker</div>
      <div class="action-component-row">
        <TwoDatePicker
          v-model="dateRange"
          :startDate.sync="startDate"
          :endDate.sync="endDate"
          range-separator="~"
          align="left"
          :clearable="false"
          class="two-date-picker"
        >
        </TwoDatePicker>
      </div>
      <el-row>
        <el-col :span="6">dateRange: {{ dateRange }}</el-col>
      </el-row>
      <el-row>
        <el-col :span="5">startDate: {{ startDate }}</el-col>
        <el-col :span="5">endDate: {{ endDate }}</el-col>
      </el-row>
    </div>
    <div class="mt-5">
      <ButtonSwitch
        v-model="curTypeKey"
        :tab-key-list="typeKeyList"
        :tab-label-list="typeLabelList"
      ></ButtonSwitch>

      <UnderscoreSwitch
        v-model="curTypeKey"
        :tab-key-list="typeKeyList"
        :tab-label-list="typeLabelList"
        class="mt-5"
      ></UnderscoreSwitch>
      
      <div class="action-component-example mt-5">
        <IndustryAllocationTopFive></IndustryAllocationTopFive>
      </div>
      
      <div class="action-component-example mt-5">
        <RankList :data-list="dataArr" :jump-function="fakerDoJump"></RankList>
      </div>
    </div>
  </div>
</template>

<script>
import TwoDatePicker from "@/component/TwoDatePicker";
import ButtonSwitch from "@/component/ButtonSwitch";
import UnderscoreSwitch from "@/component/UnderscoreSwitch";

import { rankData, handleRankArr } from "./mockData.js";
import RankList from "./component/RankList.vue";
import IndustryAllocationTopFive from "./component/IndustryAllocationTopFive.vue";

export default {
  name: "ActionComponent",
  components: {
    TwoDatePicker,
    ButtonSwitch,
    UnderscoreSwitch,
    RankList,
    IndustryAllocationTopFive
  },
  data() {
    return {
      dateRange: ["", ""],
      startDate: "",
      endDate: "",
      curTypeKey: "stock",
      typeKeyList: ["stock", "bond", "sharp", "marco"],
      typeLabelList: ["股票", "债券", "夏普比率", "宏观"],
      dataArr: handleRankArr(rankData)
    };
  },
  methods: {
    fakerDoJump(code) {
      console.log("do jump code->", code);
    }
  }
};
</script>

<style lang="scss" scoped>
.action-component {
  .action-component-row {
    width: 300px;
  }
  .action-component-example {
    width: 45%;
    min-width: 400px;
    padding: 10px;
    background-color: var(--white-color);
  }
}
</style>
