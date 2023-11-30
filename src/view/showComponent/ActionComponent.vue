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
    </div>
  </div>
</template>

<script>
import TwoDatePicker from "@/component/TwoDatePicker";
import ButtonSwitch from "@/component/ButtonSwitch";
import UnderscoreSwitch from "@/component/UnderscoreSwitch";

export default {
  name: "ActionComponent",
  components: {
    TwoDatePicker,
    ButtonSwitch,
    UnderscoreSwitch
  },
  data() {
    return {
      dateRange: ["", ""],
      startDate: "",
      endDate: "",
      curTypeKey: "stock",
      typeKeyList: ["stock", "bond", "sharp", "marco"],
      typeLabelList: ["股票", "债券", "夏普比率", "宏观"]
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.action-component {
  .action-component-row {
    width: 300px;
  }
}
</style>
