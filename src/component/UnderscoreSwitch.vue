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
          <div v-show="key === curSelectKey" class="underscore-item-underline"></div>
        </span>
      </div>
    </span>
  </div>
</template>

<script>
import { throttle } from "lodash";

export default {
  name: "UnderscoreSwitch",
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
    throttleMethod: throttle(function (key) {
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
    .underscore-switch-group-background {
      vertical-align: middle;
      background-color: var(--white-color);
      .underscore-switch-item {
        display: inline-block;
        padding: 0 0.5rem;
        margin-bottom: -1px;
        font-size: 0.88rem;
        line-height: 1.75rem;
        color: var(--dark-color);
        text-align: center;
        cursor: pointer;
        .underscore-item-underline {
          width: 90%;
          height: 2px;
          margin: 0 5%;
          background-color: var(--primary-color);
        }
      }
      .active-underscore-switch-item {
        color: var(--primary-color);
      }
    }
  }
}
</style>
