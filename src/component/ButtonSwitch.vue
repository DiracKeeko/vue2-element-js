<template>
  <div class="button-switch">
    <span class="button-switch-group">
      <div class="button-switch-group-background">
        <span
          v-for="(key, index) in tabKeyList"
          :key="key"
          class="button-switch-item"
          :class="{ 'active-button-switch-item': key === curSelectKey }"
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
.button-switch {
  .button-switch-group {
    display: flex;
    align-items: center;
    width: 100%;

    .button-switch-group-background {
      overflow: hidden;
      vertical-align: middle;
      background-color: #fff;

      .button-switch-item {
        display: inline-block;
        padding: 0 0.75rem;
        font-size: 0.88rem;
        line-height: 1.75rem;
        color: #1b5fc5;
        text-align: center;
        cursor: pointer;
        border: 1px solid #1b5fc5;
        &:hover {
          background-color: #ecf5ff;
        }
      }

      .button-switch-item:first-of-type {
        border-radius: 4px 0 0 4px;
      }
      .button-switch-item:last-of-type {
        border-radius: 0 4px 4px 0;
      }
      .button-switch-item:not(:last-child) {
        margin-right: -1px;
      }

      .active-button-switch-item {
        // font-weight: bold;
        color: #ffffff;
        background-color: #1b5fc5 !important;
      }
    }
  }
}
</style>
