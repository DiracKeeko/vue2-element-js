<template>
  <el-menu mode="horizontal" :default-active="activeIndex" class="navigation" :default-openeds="defaultOpeneds">
    <template v-for="(menu, index) in menus">
      <el-submenu v-if="menu.children && menu.children.length > 0" :key="index" :index="menu.path" :popper-class="['submenu-popper']" :show-timeout="0" :hide-timeout="0">
        <template slot="title">{{ menu.name }}</template>
        <el-row type="flex" class="submenu-row">
          <el-col v-for="(child, idx) in menu.children" :key="idx">
            <template v-if="child.children && child.children.length > 0">
              <el-submenu :index="child.path" :popper-class="['submenu-popper']" :show-timeout="0" :hide-timeout="0">
                <template slot="title">{{ child.name }}</template>
                <el-menu-item v-for="(subchild, i) in child.children" :key="i" :index="subchild.path">{{ subchild.name }}</el-menu-item>
              </el-submenu>
            </template>
            <template v-else>
              <el-menu-item :index="child.path">{{ child.name }}</el-menu-item>
            </template>
          </el-col>
        </el-row>
      </el-submenu>
      <el-menu-item v-else :key="index" :index="menu.path">{{ menu.name }}</el-menu-item>
    </template>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '', // 当前选中的菜单项
      defaultOpeneds: ['/menu1/menu1-1'], // 默认展开的菜单项的路径数组
      menus: [ // 导航菜单数据
        {
          name: '一级菜单1',
          path: '/menu1',
          children: [
            {
              name: '二级菜单1-1',
              path: '/menu1/menu1-1',
              children: [
                {
                  name: '三级菜单1-1-1',
                  path: '/menu1/menu1-1/menu1-1-1'
                },
                {
                  name: '三级菜单1-1-2',
                  path: '/menu1/menu1-1/menu1-1-2'
                }
              ]
            },
            {
              name: '二级菜单1-2',
              path: '/menu1/menu1-2'
            }
          ]
        },
        {
          name: '一级菜单2',
          path: '/menu2'
        },
        {
          name: '一级菜单2',
          path: '/menu2'
        }
      ]
    }
  }
}
</script>

<style scoped>
.navigation {
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
}

.submenu-popper {
  top: 0 !important;
  left: 100% !important;
  margin-top: -1px;
}

.el-submenu__title:hover {
  background-color: #f5f5f5;
}

.submenu-row {
  min-width: 200px;
  margin-top: -1px;
}

.el-menu-item {
  padding-left: 20px !important;
}

.el-menu--horizontal .el-submenu__title {
  margin-bottom: 0;
}

.el-menu--horizontal .el-submenu__title:hover {
  background-color: #f5f5f5;
}

.el-menu--horizontal .el-submenu__title:hover .el-icon-arrow-down {
  color: #409EFF;
}

.el-menu--horizontal .el-submenu__title .el-icon-arrow-down {
  color: #c0c4cc;
}

.el-menu--horizontal .el-submenu__title .el-icon-arrow-down:hover {
  color: #409EFF;
}

.el-menu-item.is-active {
  color: #409EFF !important;
  background-color: #f5f5f5 !important;
}

.el-menu-item.is-active:hover {
  background-color: #f5f5f5 !important;
}

/* 新增样式 */
.el-submenu__popper .el-menu {
  width: auto;
  background-color: #f5f5f5;
  box-shadow: none;
  border-bottom: none;
}

.el-submenu__popper .el-submenu__title {
  padding: 0;
}

.el-submenu__popper .el-submenu__title:hover {
  background-color: transparent;
}

.el-submenu__popper .el-submenu__title .el-icon-arrow-right {
  color: #c0c4cc;
  margin-left: 0;
  margin-right: 5px;
}

.el-submenu__popper .el-submenu__title .el-icon-arrow-down {
  color: #409EFF;
  margin-left: 0;
  margin-right: 5px;
}

.el-submenu__popper .el-submenu__title .el-icon-arrow-right:hover {
  color: #c0c4cc;
}

.el-submenu__popper .el-submenu__title .el-icon-arrow-down:hover {
  color: #409EFF;
}

.el-submenu__popper .el-menu-item {
  padding-left: 20px !important;
}

.el-submenu__popper .el-menu-item:hover {
  background-color: #f5f5f5 !important;
  color: #409EFF !important;
}

.el-submenu__popper .el-menu-item.is-active {
  background-color: #f5f5f5 !important;
  color: #409EFF !important;
}

.el-submenu__popper .el-menu-item.is-active:hover {
  background-color: #f5f5f5 !important;
  color: #409EFF !important;
}

.el-submenu__popper .el-submenu__wrapper {
  margin: 0;
  border: none;
}

.el-submenu__popper .el-menu--horizontal .el-submenu__title {
  margin-bottom: 0;
}

.el-submenu__popper .el-row {
  display: flex;
  flex-wrap: wrap;
}
</style>
