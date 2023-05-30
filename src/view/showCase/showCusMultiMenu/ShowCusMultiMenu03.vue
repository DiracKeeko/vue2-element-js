<template>
  <el-menu
    class="nav-menu"
    mode="horizontal"
  >
    <el-menu-item index="1">菜单1-03</el-menu-item>
    <el-submenu index="2">
      <template slot="title">
        菜单2
      </template>
      <div class="submenu-row">
        <div class="submenu-col">
          <div class="submenu-item menu-holder">子菜单1</div>
          <el-menu-item class="submenu-item" index="2-1-1">子菜单1-1</el-menu-item>
          <el-menu-item class="submenu-item" index="2-1-2">子菜单1-2</el-menu-item>
          <el-menu-item class="submenu-item" index="2-1-3">子菜单1-3</el-menu-item>
        </div>
        <div class="submenu-col">
          <div class="submenu-item menu-holder">子菜单2</div>
          <el-menu-item class="submenu-item" index="2-2-1">子菜单2-1</el-menu-item>
          <el-menu-item class="submenu-item" index="2-2-2">子菜单2-2</el-menu-item>
          <el-menu-item class="submenu-item" index="2-2-3">子菜单2-3</el-menu-item>
        </div>
        <div class="submenu-col">
          <div class="submenu-item menu-holder">子菜单3</div>
          <el-menu-item class="submenu-item" index="2-3-1">子菜单3-1</el-menu-item>
          <el-menu-item class="submenu-item" index="2-3-2">子菜单3-2</el-menu-item>
          <el-menu-item class="submenu-item" index="2-3-3">子菜单3-3</el-menu-item>
        </div>
      </div>
    </el-submenu>
    <el-menu-item index="3">菜单3</el-menu-item>
  </el-menu>
</template>

<script>
import { menuRes } from "./mockData";

export default {
  name: "ShowCusMultiMenu03",
  data() {
    return {
      menuRes,
    }
  },
  methods: {
    judgeIsMenuItem(item) {
      // 如果没有 item.menuItem，说明是一级菜单
      if (!item.menuItem) {
        // 如果一级菜单没有对应跳转链接，说明需要被隐藏 
        // (index是纯数字字符串 则隐藏)
        if (/^\d+$/.test(item.index)) {
          return "隐藏";
        }
        return "一级";
      }
      // item.menuItem存在，但是所有项目都为hidden，则也判定为一级菜单
      // if (item)
      return "二级";
    }
  
  }
};
</script>

<style lang="scss" scoped>
// 一级菜单
.el-menu-item {
  padding: 0;
  background-color: transparent !important;

  .menuSpanA {
    display: block;
    height: 60px;
    padding: 0 20px;
  }
}
.el-submenu {
  background-color: transparent !important;
}
.submenu-row {
  display: flex;
  .submenu-col {
    padding: 0 10px;
    color: var(--dark-color);
    .submenu-item {
      box-sizing: border-box;
      padding: 0;
      height: 36px !important;
      line-height: 36px !important;
    }
    .menu-holder {
      font: bold 18px/36px "Microsoft YaHei";
      cursor: default;
      border-bottom: 2px solid var(--grey-color);
    }
  }
}
</style>
<style lang="scss">
.el-menu--popup {
  min-width: auto;
  padding: 0;
  .el-menu-item {
    padding: 0;
    .popupMenuSpanA {
      display: block;
      padding: 0 10px;
    }
    &:hover {
      .popupMenuSpanA {
        color: #1b5fc5;
      }
    }
  }
}
</style>

