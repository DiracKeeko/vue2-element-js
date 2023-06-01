<template>
  <el-menu class="nav-menu" mode="horizontal">
    <el-menu-item index="1">菜单1</el-menu-item>
    <el-submenu index="2">
      <template slot="title">菜单2</template>
      <div class="submenu-row">
        <div class="submenu-col">
          <el-menu-item index="1-1">
            <div class="submenu-item submenu-holder">子菜单1-1</div>
          </el-menu-item>
          <el-menu-item index="1-2">
            <a class="submenu-item submenu-link">子菜单1-2</a>
          </el-menu-item>
          <el-menu-item index="1-3">
            <router-link to="1-3" class="submenu-item submenu-link">子菜单1-3</router-link>
          </el-menu-item>
          <el-menu-item index="2-1">
            <div class="submenu-item submenu-holder">子菜单2-1</div>
          </el-menu-item>
          <el-menu-item index="2-2">
            <a class="submenu-item submenu-link">子菜单2-2</a>
          </el-menu-item>
        </div>
        <div class="submenu-col">
          <el-menu-item index="3-1">
            <div class="submenu-item submenu-holder">子菜单3</div>
          </el-menu-item>
          <el-menu-item index="3-2">
            <a class="submenu-item submenu-link">子菜单3-2</a>
          </el-menu-item>
          <el-menu-item index="3-3">
            <a class="submenu-item submenu-link">子菜单3-3</a>
          </el-menu-item>
          <el-menu-item index="3-4">
            <a class="submenu-item submenu-link">子菜单3-4</a>
          </el-menu-item>
        </div>
        <div class="submenu-col">
          <el-menu-item index="4-1">
            <div class="submenu-item submenu-holder">子菜单4-1</div>
          </el-menu-item>
          <el-menu-item index="4-2">
            <a class="submenu-item submenu-link">子菜单4-2</a>
          </el-menu-item>
          <el-menu-item index="4-3">
            <div class="submenu-item submenu-holder">子菜单4-3</div>
          </el-menu-item>
          <el-menu-item index="4-4">
            <a class="submenu-item submenu-link">子菜单4-4</a>
          </el-menu-item>
        </div>
      </div>
    </el-submenu>
    <el-menu-item index="3">菜单3</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "ShowCusMultiMenu02",
  methods: {}
};
</script>

<style lang="scss" scoped>
.el-menu {
  // ↓ 一级菜单(的标题)
  .el-menu-item {
    padding: 0;
    border: 0;
    background-color: transparent !important;
  }
  // ↓ 二级菜单(的标题)
  .el-submenu {
    padding: 0;
    border: 0;
    background-color: transparent !important;
  }
  // ↓ 给.el-menu-item下的a标签和router-link
  .menu-link {
    display: block;
    height: 60px;
    padding: 0 20px;
    text-decoration: none;
  }
}

// ↓ 二级菜单css (展开的菜单窗体)
.submenu-row {
  display: flex;
  padding: 5px;
  .submenu-col {
    width: 120px;
    padding: 0 15px;
    .el-menu-item {
      width: 100%;
    }
    .submenu-item {
      height: 36px !important;
      line-height: 36px !important;
      color: var(--dark-color);
    }
    .submenu-link {
      height: 36px;
      font: 14px/36px "Microsoft YaHei";
      text-decoration: none;
      &:hover {
        color: #1b5fc5;
      }
    }
    .submenu-holder {
      font: bold 16px/36px "Microsoft YaHei";
      cursor: default;
      border-bottom: 2px solid var(--grey-color);
    }
  }
}
</style>
