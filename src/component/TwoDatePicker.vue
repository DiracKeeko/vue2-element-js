<template>
  <div class="el-input">
    <div class="two-date-picker">
      <el-date-picker
        v-model="startDateTimestamp"
        class="customeDatePicker"
        :picker-options="startDatePickerOpts"
        type="date"
        format="yyyy-MM-dd"
        value-format="timestamp"
        size="small"
        :placeholder="startPlaceholder"
        v-bind="$attrs"
        @change="handleChange"
      />
      <div v-if="label.end === '' && label.start === ''" class="dateConnect">
        {{ rangeSeparator }}
      </div>
      <el-date-picker
        v-model="endDateTimestamp"
        class="customeDatePicker"
        :picker-options="endDatePickerOpts"
        type="date"
        format="yyyy-MM-dd"
        value-format="timestamp"
        size="small"
        :placeholder="endPlaceholder"
        v-bind="$attrs"
        @change="handleChange"
      />
    </div>
  </div>
</template>
<script>
import dayjs from "dayjs";

export default {
  name: "TwoDatePicker",
  components: {},
  model: {
    prop: "dateRange",
    event: "change"
  },
  props: {
    dateRange: {
      type: Array,
      default: () => ["", ""]
    },
    dateRangeLimit: {
      type: Array,
      default: () => ["", ""] // 支持["dateStr", "dateStr"], 支持[timestamp, timestamp]
    },
    rangeSeparator: {
      type: String,
      default: "-"
    },
    label: {
      type: Object,
      default() {
        return { start: "", end: "" };
      }
    },
    startPlaceholder: {
      type: String,
      default: "开始日期"
    },
    endPlaceholder: {
      type: String,
      default: "结束日期"
    }
  },
  data() {
    const [sDate, eDate] = this.dateRange;
    return {
      startDateTimestamp: this.dateToTimestamp(sDate),
      endDateTimestamp: this.dateToTimestamp(eDate)
    };
  },
  computed: {
    minStartTimestamp() {
      // -> return minStartTimestamp;
      const [minDate] = this.dateRangeLimit;
      if (!minDate) {
        return undefined;
      }
      if (typeof minDate === "string") {
        return dayjs(minDate).valueOf();
      }
      return minDate;
    },
    maxEndTimestamp() {
      // -> return maxEndTimestamp;
      const [, maxDate] = this.dateRangeLimit;
      if (!maxDate) {
        return undefined;
      }
      if (typeof maxDate === "string") {
        return dayjs(maxDate).valueOf();
      }
      return maxDate;
    },
    startDatePickerOpts() {
      const { minStartTimestamp, maxEndTimestamp, endDateTimestamp } = this;
      return {
        disabledDate(date) {
          // return true禁止; return false可选;
          const curTimestamp = date.getTime(); // date是一个时间对象
          return curTimestamp > endDateTimestamp || curTimestamp < minStartTimestamp || curTimestamp > maxEndTimestamp;
        }
      };
    },
    endDatePickerOpts() {
      const { minStartTimestamp, maxEndTimestamp, startDateTimestamp } = this;
      return {
        disabledDate(date) {
          const curTimestamp = date.getTime();
          return (
            curTimestamp < startDateTimestamp || curTimestamp < minStartTimestamp || curTimestamp > maxEndTimestamp
          );
        }
      };
    }
  },
  watch: {
    dateRange(arr) {
      this.startDateTimestamp = this.dateToTimestamp(arr[0]);
      this.endDateTimestamp = this.dateToTimestamp(arr[1]);
    }
  },

  methods: {
    handleChange() {
      const { startDateTimestamp, endDateTimestamp, formatToDateStr } = this;
      const startDateStr = formatToDateStr(startDateTimestamp);
      const endDateStr = formatToDateStr(endDateTimestamp);
      this.$emit("change", [startDateStr, endDateStr]);
      this.$emit("update:startDate", startDateStr); // 可以使用 :startDate.sync 单向接收数据
      this.$emit("update:endDate", endDateStr); // 可以使用 :endDate.sync 单向接收数据
    },
    formatToDateStr(val) {
      if (!val) {
        return "";
      }
      return dayjs(val).format("YYYY-MM-DD");
    },
    dateToTimestamp(val) {
      if (!val) {
        return undefined;
      }
      return typeof val === "string" ? dayjs(val).valueOf() : val;
    }
  }
};
</script>
<style scoped lang="scss">
@import "@/scss/_color.scss";

.two-date-picker {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  min-width: fit-content;

  .customeDatePicker {
    width: 46%;
  }
  .dateConnect {
    box-sizing: border-box;
    width: 8%;
    font-size: 14px;
    color: #333333;
    text-align: center;
  }

  .theme-light .el-form-item__content {
    line-height: 40px;
  }

  ::v-deep {
    .el-form-item {
      margin: 0;
      .el-form-item__label {
        padding-right: 4px;
      }
    }
    .el-date-editor {
      .el-input__prefix {
        display: none;
      }
      .el-input__inner {
        height: 32px;
        padding: 0 5px 0 13px;
        font-size: 14px;
      }
    }
  }
}
</style>
