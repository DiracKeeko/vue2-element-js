<template>
  <el-menu
    class="nav-menu"
    mode="horizontal"
    @mouseenter="handleMenuEnter"
    @mouseleave="handleMenuLeave"
  >
    <el-menu-item index="1">菜单1</el-menu-item>
    <el-submenu index="2" ref="submenu2">
      <template slot="title">
        菜单2
      </template>
      <el-row class="submenu-row">
        <el-col span="6">
          <div>子菜单1</div>
          <el-menu-item index="2-1-1">子菜单1-1</el-menu-item>
          <el-menu-item index="2-1-2">子菜单1-2</el-menu-item>
          <el-menu-item index="2-1-3">子菜单1-3</el-menu-item>
        </el-col>
        <el-col span="6">
          <div>子菜单2</div>
          <el-menu-item index="2-2-1">子菜单2-1</el-menu-item>
          <el-menu-item index="2-2-2">子菜单2-2</el-menu-item>
          <el-menu-item index="2-2-3">子菜单2-3</el-menu-item>
        </el-col>
        <el-col span="6">
          <div>子菜单3</div>
          <el-menu-item index="2-3-1">子菜单3-1</el-menu-item>
          <el-menu-item index="2-3-2">子菜单3-2</el-menu-item>
          <el-menu-item index="2-3-3">子菜单3-3</el-menu-item>
        </el-col>
      </el-row>
    </el-submenu>
    <el-menu-item index="3">菜单3</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  methods: {
    handleMenuEnter() {
      this.$refs.submenu2.forEach((submenu) => {
        submenu.showPopper();
        submenu.$refs.submenu.forEach((submenu) => {
          submenu.showPopper();
        });
      });
    },
    handleMenuLeave() {
      this.$refs.submenu2.forEach((submenu) => {
        submenu.hidePopper();
        submenu.$refs.submenu.forEach((submenu) => {
          submenu.hidePopper();
        });
      });
    },
  },
};
</script>

<style scoped>
.el-menu--horizontal .el-submenu__title:hover .el-icon-arrow-down,
.el-menu--horizontal .el-submenu__title:hover .el-icon-arrow-right {
  transform: rotate(180deg);
}

.el-menu--horizontal .el-submenu__title .el-icon-arrow-down,
.el-menu--horizontal .el-submenu__title .el-icon-arrow-right {
  transition: all 0.3s;
  margin-left: 5px;
}

.el-row {
  display: flex;
  flex-wrap: wrap;
}

.el-col {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.el-menu-item.is-active,
.el-submenu.is-active > .el-submenu__title {
  background-color: #f5f5f5;
  color: #409EFF;
}

