<template>
  <div class="el-popover-case">

    <div style="margin-bottom: 50px">
      <el-button type="primary" @click="switchPop">switch popover show</el-button>
    </div>

    <el-popover
      v-model="popShow"
      placement="bottom"
      title="标题"
      width="200"
      trigger="manual"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
      <el-button slot="reference" @click="popShow = !popShow">手动激活</el-button>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: "ElPopoverCase",
  components: {},
  props: {},
  data() {
    return {
      popShow: false
    };
  },
  computed: {},
  watch: {},
  methods: {
    switchPop() {
      this.popShow = !this.popShow;
    }
  }
};
</script>

<style lang="scss" scoped></style>
