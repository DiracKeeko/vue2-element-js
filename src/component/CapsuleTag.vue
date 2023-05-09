<template>
  <span class="capsule-tag" :style="{ 'background-color': bgColor }">
    <div class="capsule-tag-group">
      <span class="content">{{ content }}</span>
      <span class="suffix">
        <slot name="suffix"></slot>
      </span>
    </div>
  </span>
</template>

<script>
export default {
  name: "CapsuleTag",
  props: {
    content: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "info"
    },
    backgroundColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  computed: {
    bgColor() {
      const { backgroundColor, type } = this;
      if (backgroundColor) {
        return backgroundColor;
      }
      switch (type) {
        case "info":
          return "#919cac";
        case "success":
          return "#00bf30";
        case "warning":
          return "#f18241";
        case "danger":
          return "#f56c6c";
        default:
          return "#dedede";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.capsule-tag {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  height: 24px;
  padding: 0 12px;
  border-radius: 12px;
  font-size: 14px;
  .capsule-tag-group {
    display: flex;
    align-items: center;
    height: 100%;
    .content {
      color: #fff;
      line-height: 24px;
    }
    .suffix {
      margin: 0 0 0 2px;
      line-height: 24px;
    }
  }
}
</style>
