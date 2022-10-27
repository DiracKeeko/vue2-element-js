<template>
  <el-popover
    class="icon-select-popover"
    placement="left-start"
    width="540"
    trigger="click"
    @show="$refs.iconStage.reset()"
    popper-class="popper-class"
  >
    <IconStage ref="iconStage" @selected="selectedIcon"></IconStage>
    <div class="icon-container" slot="reference"><i class="icon-select" :class="menuIcon"></i></div>
  </el-popover>
</template>

<script>
import IconStage from './iconStage/IconStage.vue';

export default {
  name: 'IconSelect',
  components: { IconStage },
  props: {
    initialIcon: {
      type: String,
      default: ''
    }
  },
  mounted() {
    const { initialIcon } = this;
    if (initialIcon !== '') {
      this.menuIcon = initialIcon;
    }
  },
  data() {
    return {
      menuIcon: ''
    };
  },
  methods: {
    selectedIcon(name) {
      this.menuIcon = name;
      this.$emit('selected', name);
    }
  }
};
</script>

<style scoped>
.icon-select-popover {
  display: block;
  width: 60px;
  height: 30px;
  margin: 0 auto;
}
.icon-container {
  width: 60px;
  height: 30px;
  padding: 0 10px;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon-select {
  font-size: 18px;
}
</style>
