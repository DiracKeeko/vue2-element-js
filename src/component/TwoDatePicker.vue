<template>
  <div class="two-date-picker">
    <el-form ref="two-date-picker" label-width="62px" inline>
      <el-form-item :label="label.start">
        <el-date-picker
          v-model="startDateTimestamp"
          class="customeDatePicker"
          :picker-options="startDatePickerOpts"
          type="date"
          format="yyyy-MM-dd"
          value-format="timestamp"
          size="small"
          placeholder="开始日期"
          v-bind="$attrs"
          @change="handleChange"
        />
      </el-form-item>
      <div v-if="label.end === '' && label.start === ''" class="dateConnect">
        {{ rangeSeparator }}
      </div>
      <el-form-item :label="label.end">
        <el-date-picker
          v-model="endDateTimestamp"
          class="customeDatePicker"
          :picker-options="endDatePickerOpts"
          type="date"
          format="yyyy-MM-dd"
          value-format="timestamp"
          size="small"
          placeholder="结束日期"
          v-bind="$attrs"
          @change="handleChange"
        />
      </el-form-item>
    </el-form>
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
    }
  },
  data() {
    return {
      startDateTimestamp: this.dateToTimestamp(this.dateRange[0]),
      endDateTimestamp: this.dateToTimestamp(this.dateRange[1])
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
  min-width: fit-content;
  margin-right: 30px;

  .theme-light .el-form-item__content {
    line-height: 40px;
  }

  ::v-deep .el-form {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 32px;
    .el-form-item {
      margin: 0;
      .el-form-item__label {
        padding-right: 4px;
      }
    }
    .el-date-editor {
      width: 113px;
      .el-input__prefix {
        display: none;
      }
      .el-input__inner {
        width: 113px;
        height: 32px;
        padding: 0 5px 0 13px;
        font-size: 14px;
      }
    }
  }
}
.two-date-picker__lable {
  margin: 0 5px;
}
.dateConnect {
  margin: 0 6px 0 5px;
  font-size: 14px;
  color: $text-dark;
}
</style>
