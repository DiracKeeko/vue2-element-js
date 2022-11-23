<template>
  <el-tooltip :disabled="isDisabled" :content="content" :placement="placement">
    <p class="content-elipsis" @mouseover="!isJudgeDone && onMouseOver($event)">
      <span>{{ content || "--" }}</span>
    </p>
  </el-tooltip>
</template>

<script>
export default {
  name: "OverflowTip",
  props: {
    placement: {
      type: String,
      default: "top"
    },
    content: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      isDisabled: true,
      isJudgeDone: false
    };
  },
  methods: {
    onMouseOver(e) {
      const parentWidth = e.target.parentNode.offsetWidth;
      const contentWidth = e.target.offsetWidth;
      if (contentWidth > parentWidth) {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
      this.isJudgeDone = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.content-elipsis {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
