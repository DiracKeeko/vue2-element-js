<template>
  <div class="aside-tab-base-on-el">
    <el-tabs tab-position="left" :value="curSelectKey" @tab-click="handleTabClick">
      <el-tab-pane v-for="(label, index) in labelArr" :key="index" :label="label" :name="label">
        <slot name="contentContainer"></slot>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "AsideTabBaseOnEl",
  model: {
    prop: "curSelectKey",
    event: "tabChange"
  },
  props: {
    curSelectKey: {
      type: String,
      default: ""
    },
    labelArr: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    handleTabClick(val) {
      // console.log("handleTabClick->", val.label);
      this.$emit("tabChange", val.label);
    }
  }
};
</script>

<style lang="scss" scoped>
.aside-tab-base-on-el {
  width: 600px;
  border: 1px solid blue;
  ::v-deep .el-tabs__header {
    .is-left {
      .el-tabs__nav-scroll {
        width: 180px;
        background-color: var(--white-color);
        .el-tabs__item {
          height: 60px;
          text-align: left;
        }
      }
    }
  }
}
</style>
