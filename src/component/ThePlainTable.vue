<template>
  <el-table
    v-bind="$attrs"
    :data="tableData"
    row-key="name"
    style="width: 100%"
  >
    <el-table-column
      v-for="col in tableTitle"
      :key="col.key||col.prop"
      v-bind="col"
      :show-overflow-tooltip="!col['show-overflow-tooltip']"
    >
      <template v-if="col.slotHeader" #header="{ column, $index }">
        <slot
          :name="col.slotHeader"
          :row="column"
          :index="$index"
        >
        </slot>
      </template>

      <template v-slot="{ row, $index }">
        <slot
          v-if="col.slotName"
          :name="col.slotName"
          :row="row"
          :index="$index"
        >
        </slot>
        <span v-else>{{ row[col.prop] }}</span>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  name: "ThePlainTable",
  props: {
    tableData: {
      type: Array,
      default() {
        return [];
      },
    },
    tableTitle: {
      type: Array,
      default() {
        return [];
      },
    },
    parentFormatter: {
      type: Function,
      default() {},
    },
  },
  data() {
    return {};
  },
  methods: {
    basicTableCellFormatter() {
      const parentFormatterRes = this.parentFormatter
        ? this.parentFormatter(row, column, value, index)
        : false;
      if (parentFormatterRes || typeof parentFormatterRes === "number") {
        return parentFormatterRes;
      }
      if (!value) return "--";
      return value;
    },
  },
};
</script>
