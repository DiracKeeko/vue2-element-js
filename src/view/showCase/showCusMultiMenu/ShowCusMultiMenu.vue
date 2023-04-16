<template>
  <div id="multi-menu-1">
    <el-menu mode="horizontal" :default-active="activeIndex" class="navigation">
      <template v-for="(menu, index) in menus">
        <el-submenu v-if="menu.children && menu.children.length > 0" :key="index" :index="menu.path">
          <template slot="title">{{ menu.name }}</template>
          <el-menu-item-group>
            <template v-for="(child, idx) in menu.children">
              <el-submenu v-if="child.children && child.children.length > 0" :key="idx" :index="child.path">
                <template slot="title">{{ child.name }}</template>
                <el-menu-item v-for="(subchild, i) in child.children" :key="i" :index="subchild.path">{{ subchild.name }}</el-menu-item>
              </el-submenu>
              <el-menu-item v-else :key="idx" :index="child.path">{{ child.name }}</el-menu-item>
            </template>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item v-else :key="index" :index="menu.path">{{ menu.name }}</el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '', // 当前选中的菜单项
      menus: [ // 导航菜单数据
        {
          name: '一级菜单1',
          path: '/menu1',
          children: [
            {
              name: '二级菜单1-1',
              path: '/menu1-1',
              children: [
                {
                  name: '三级菜单1-1-1',
                  path: '/menu1-1-1'
                },
                {
                  name: '三级菜单1-1-2',
                  path: '/menu1-1-2'
                }
              ]
            },
            {
              name: '二级菜单1-2',
              path: '/menu1-2'
            }
          ]
        },
        {
          name: '一级菜单2',
          path: '/menu2'
        },
        {
          name: '一级菜单3',
          path: '/menu3'
        }
      ]
    };
  },
  mounted() {
    this.activeIndex = this.$route.path; // 设置当前选中的菜单项为当前路由路径
  },
  watch: {
    $route: function() {
      this.activeIndex = this.$route.path; // 监听路由变化，切换选中的菜单项
    }
  }
};
</script>

<style>
.navigation {
  border-bottom: 1px solid #ebeef5;
}
</style>
