<template>
  <div class="underscore-switch">
    <span class="underscore-switch-group">
      <div class="underscore-switch-group-background">
        <span
          v-for="(key, index) in tabKeyList"
          :key="key"
          class="underscore-switch-item"
          :class="{ 'active-underscore-switch-item': key === curSelectKey }"
          @click="throttleMethod(key)"
        >
          {{ tabLabelList[index] }}
        </span>
      </div>
    </span>
  </div>
</template>

<script>
import { throttle } from "lodash";

export default {
  name: "ButtonSwitch",
  model: {
    prop: "curSelectKey",
    event: "tabChange"
  },
  props: {
    tabKeyList: {
      type: Array,
      default: () => []
    },
    tabLabelList: {
      type: Array,
      default: () => []
    },
    curSelectKey: {
      type: String,
      default: ""
    }
  },
  methods: {
    throttleMethod: throttle(function(key) {
      this.$emit("tabChange", key);
    }, 500)
  }
};
</script>

<style lang="scss" scoped>
.underscore-switch {
  .underscore-switch-group {
    display: flex;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid #e4e7ed;

    .underscore-switch-group-background {
      vertical-align: middle;
      background-color: #fff;

      .underscore-switch-item {
        display: inline-block;
        padding: 0 0.75rem;
        margin-bottom: -1px;
        font-size: 0.88rem;
        line-height: 1.75rem;
        color: #333;
        text-align: center;
        cursor: pointer;
        &:hover {
          background-color: #ecf5ff;
        }
      }

      .active-underscore-switch-item {
        // font-weight: bold;
        color: #1b5fc5;
        border-bottom: 1px solid #1b5fc5;
      }
    }
  }
}
</style>
