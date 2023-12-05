<template>
  <div class="aside-tab">
    <el-tabs tab-position="left" :value="curSelectKey" @tab-click="handleTabClick">
      <el-tab-pane v-for="(label, index) in labelArr" :key="index" :label="label" :name="label">
        <slot name="contentContainer"></slot>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "AsideTab",
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
.aside-tab {
  width: 600px;
  border: 1px solid blue;
}
</style>
