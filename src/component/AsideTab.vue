<template>
  <div class="aside-tab">
    <div class="left-tab">
      <div
        v-for="(key, index) in tabKeyList"
        :key="key"
        class="left-tab-item"
        :class="{ 'active-left-tab-item': key === curSelectKey }"
        @click="throttleMethod(key)"
      >
        <div class="inner-item">
          {{ tabLabelList[index] }}
        </div>
      </div>
    </div>
    <div class="right-content">
      <slot name="contentContainer"></slot>
    </div>
  </div>
</template>

<script>
import { throttle } from "lodash";

export default {
  name: "AsideTab",
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
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    timeInterval: {
      type: Number,
      default: 5 // 单位秒
    }
  },
  data() {
    return {
      timer: null
    };
  },
  mounted() {
    this.autoplay && this.startTimer();
    this.$once("hook:beforeDestroy", () => {
      clearInterval(this.timer);
    })
  },
  methods: {
    throttleMethod: throttle(function (key) {
      this.$emit("tabChange", key);
      this.autoplay && this.resetTimer();
    }, 500),
    startTimer() {
      this.timer = setInterval(() => {
        this.moveToNextKey();
      }, this.timeInterval * 1000);
    },
    moveToNextKey() {
      const { curSelectKey, tabKeyList } = this;
      const currentIndex = tabKeyList.indexOf(curSelectKey);
      const nextIndex = (currentIndex + 1) % tabKeyList.length;
      const nextKey = tabKeyList[nextIndex];
      this.$emit("tabChange", nextKey);
    },
    resetTimer() {
      clearInterval(this.timer);
      this.startTimer();
    }
  }
};
</script>

<style lang="scss" scoped>
.aside-tab {
  display: flex;
  .left-tab {
    box-sizing: border-box;
    width: 180px;
    padding: 0 12px;
    background-color: var(--light-color);
    .left-tab-item {
      display: flex;
      align-items: center;
      width: 100%;
      height: 60px;
      cursor: pointer;
      .inner-item {
        width: 100%;
        height: 42px;
        padding: 0 0 0 12%;
        font: 400 18px/42px "Microsoft YaHei";
        border-radius: 4px;
      }
    }
    .active-left-tab-item {
      .inner-item {
        color: var(--white-color);
        background-color: var(--primary-color);
      }
    }
  }
  .right-content {
    box-sizing: border-box;
    width: 420px;
  }
}
</style>
