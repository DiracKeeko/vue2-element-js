<template>
  <div class="show-the-plain-table">
    <ThePlainTable
      max-height="306px"
      :border="false"
      :table-title="tableTitle"
      :table-data="tableData"
    >
      <template #symbol="{ row }">
        <span class="primary-link">
          {{ row.symbol }}
        </span>
      </template>
      <template #fundHead="{ row }">
        <span> {{ row.label }}</span>
      </template>
      <template #weight="{ row }">
        {{ formatToPercent(row.weight) }}
      </template>
      <template #isHistory="{ row }">
        <i v-if="row.isHistory" class="el-icon-check" style="color: red"></i>
      </template>
      <template #change="{ row }">
        {{ formatToPercent(row.change) }}
      </template>
    </ThePlainTable>
  </div>
</template>

<script>
import { formatToPercent } from "js-financial-tools/modules/formatter";

import ThePlainTable from "@/component/ThePlainTable.vue";

export default {
  name: "ShowThePlainTable",
  components: {
    ThePlainTable
  },
  data() {
    return {
      tableTitle: [
        {
          label: "基金名称",
          prop: "symbol",
          slotName: "symbol",
          "min-width": 85,
          // "hidden-overflow-tooltip": true
        },
        {
          label: "占比",
          prop: "weight",
          "min-width": 65,
          slotName: "weight"
          // slotHead: "fundHead"
        },
        {
          label: "上期重仓",
          prop: "isHistory",
          slotName: "isHistory",
          "min-width": 80
        },
        {
          label: "较上期变化",
          prop: "change",
          slotName: "change",
          "min-width": 120
        },
        {
          label: "单位净值",
          prop: "unitNetValue",
          "min-width": 80
        }
      ],
      tableData: [
        {
          symbol: "华夏成长",
          weight: 0.1,
          isHistory: true,
          change: 0.0113,
          unitNetValue: 1.1
        },
        {
          symbol: "易方达蓝筹",
          weight: 0.314,
          isHistory: true,
          change: -0.023,
          unitNetValue: 1.3
        },
        {
          symbol: "财富中证ESG100指数增强A",
          weight: 0.17,
          isHistory: false,
          change: 0.031,
          unitNetValue: 1.4
        },
        {
          symbol: "000005",
          weight: 0.5,
          isHistory: true,
          change: 0.5,
          unitNetValue: 1.5
        },
        {
          symbol: "000006",
          weight: 0.6,
          isHistory: false,
          change: 0.6,
          unitNetValue: 1.6
        },
        {
          symbol: "000007",
          weight: 0.7,
          isHistory: true,
          change: 0.7,
          unitNetValue: 1.7
        },
        {
          symbol: "000008",
          weight: 0.8,
          isHistory: false,
          change: 0.8,
          unitNetValue: 1.8
        },
        {
          symbol: "000009",
          weight: 0.9,
          isHistory: true,
          change: 0.9,
          unitNetValue: 1.9
        }
      ]
    };
  },
  methods: {
    formatToPercent
  }
};
</script>

<style scoped>
.show-the-plain-table {
  width: 600px;
  height: 400px;
  margin: 0 auto;
  /* border: 1px solid blue; */
}
</style>
