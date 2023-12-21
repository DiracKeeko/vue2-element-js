<template>
  <div class="input-wrapper" :class="[active && 'active', typeClass]">
    <slot></slot>
    <div class="message">{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "InputWrapper",
  props: {
    type: {
      type: String,
      default: "error"
    },
    message: {
      type: String,
      default: ""
    }
  },
  computed: {
    active() {
      return !!this.message;
    },
    typeClass() {
      return `input-wrapper--${this.type}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.input-wrapper {
  position: relative;
  .message {
    position: absolute;
    bottom: -20px;
    font-size: var(--fs-xs);
  }
  &.input-wrapper--error {
    color: var(--failed-color);
    &.active {
      ::v-deep {
        .el-input__inner,
        .el-textarea__inner {
          border-color: var(--failed-color);
        }
      }
    }
  }
  &.input-wrapper--info {
    color: var(--grey-color);
  }
}
</style>
