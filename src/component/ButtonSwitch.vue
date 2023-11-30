<template>
  <div class="hi-button-switch">
    <span class="hi-button-switch-group">
      <div class="hi-button-switch-group-background">
        <span
          v-for="(key, index) in tabKeyList"
          :key="key"
          class="hi-button-switch-item"
          :class="{ 'hi-active-button-switch-item': key === curSelectKey }"
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
.hi-button-switch {
  .hi-button-switch-group {
    display: flex;
    align-items: center;
    width: 100%;

    .hi-button-switch-group-background {
      overflow: hidden;
      vertical-align: middle;
      background-color: #fff;

      .hi-button-switch-item {
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

      .hi-button-switch-item:first-of-type {
        border-radius: 4px 0 0 4px;
      }
      .hi-button-switch-item:last-of-type {
        border-radius: 0 4px 4px 0;
      }
      .hi-button-switch-item:not(:last-child) {
        margin-right: -1px;
      }

      .hi-active-button-switch-item {
        // font-weight: bold;
        color: #ffffff;
        background-color: #1b5fc5 !important;
      }
    }
  }
}
</style>
