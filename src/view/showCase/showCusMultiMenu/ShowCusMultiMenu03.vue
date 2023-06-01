<template>
  <el-menu class="nav-menu" mode="horizontal">
    <template v-for="item in menuList">
      <!-- ↓ 仅一级菜单( 1.menuItem(内链跳转) 2.a标签(外链跳转) )  -->
      <el-menu-item
        v-if="judgeIsMenuItem(item) === '一级' && item.hidden === 0"
        :key="item.index + 'lv1'"
        :index="item.index"
      >
        <a
          v-if="item.menuType && item.menuType === 'outer'"
          :href="item.index"
          target="_blank"
          class="menu-link"
          >{{ item.title }}</a
        >
        <router-link v-else :to="item.index" class="menu-link">{{ item.title }}</router-link>
      </el-menu-item>

      <!-- ↓ 二级菜单(渲染submenu submenu中有两种可能 1.subMenuItem(内链跳转) 2.a标签(外链跳转) ) -->
      <el-submenu
        v-else-if="judgeIsMenuItem(item) === '二级'"
        :key="item.index + 'lv2'"
        :index="item.index"
      >
        <template slot="title">{{ item.title }}</template>
        <div class="submenu-row">
          <div
            v-for="(el, colIndex) in excludeEmptyArr(item.menuArr)"
            :key="colIndex"
            v-show="isShowMenuCol(el)"
            class="submenu-col"
          >
            <div v-for="i in el" :key="i.index">
              <el-menu-item v-show="i.hidden === 0">
                <a
                  v-if="i.menuType && i.menuType === 'outer'"
                  :href="i.index"
                  target="_blank"
                  class="submenu-item submenu-link"
                  >{{ i.title }}</a
                >
                <router-link
                  v-else-if="i.menuType && i.menuType === 'inner'"
                  :to="i.index"
                  class="submenu-item submenu-link"
                  >{{ i.title }}</router-link
                >
                <div
                  v-else-if="i.menuType && i.menuType === 'holder'"
                  class="submenu-item submenu-holder"
                >
                  {{ i.title }}
                </div>
              </el-menu-item>
            </div>
          </div>
        </div>
      </el-submenu>
    </template>
  </el-menu>
</template>

<script>
const isMenuColItemAllHidden = (menuColArr) => {
  return !menuColArr || menuColArr.length === 0 || menuColArr.every((el) => el.hidden === 1);
};
const isMenuPopupHidden = (menuArr) => {
  /* 
    1、没有menuArr这个key
    2、item.menuArr存在，但是menuArr为空数组
    3、menuArr中 所有的menuColArr中 的各个menu都为隐藏状态

    则隐藏
  */
  return !menuArr || menuArr.length === 0 || menuArr.every((el) => isMenuColItemAllHidden(el));
};

import { menuRes } from "./mockData";
export default {
  name: "ShowCusMultiMenu03",
  data() {
    return {
      menuList: menuRes
    };
  },
  methods: {
    judgeIsMenuItem(item) {
      // 如果一级菜单没有对应跳转链接，说明需要被隐藏 (index是纯数字字符串 则隐藏)
      // if (/^\d+$/.test(item.index)) {
      //   return "隐藏";
      // }
      if (isMenuPopupHidden(item.menuArr)) {
        return "一级";
      }
      return "二级";
    },
    excludeEmptyArr(arr) {
      const res = arr.filter((el) => el.length !== 0);
      return res;
    },
    isShowMenuCol(menuColArr) {
      console.log("menuArr", menuColArr);
      return menuColArr.some(el => el.hidden === 0);
    }
  }
};
</script>

<style lang="scss" scoped>
// .el-menu 是导航栏展示的窗体 如"首页", "基金", "股票" 所在窗体
/* 
  <ul role="menubar" class="nav-menu el-menu--horizontal el-menu">
    <li class="el-menu-item" style="border-bottom-color: transparent;">一级菜单的基金</li>
    <li class="el-menu-item" style="border-bottom-color: transparent;">一级菜单的股票</li>
  </ul>
*/
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

// .el-menu 这个类也会存在于"二级菜单弹窗容器"(在本组件容器中是.submenu-row的父元素)
// 在这里.el-menu父级还有一个div (.el-menu--horizontal) 这个类是用来控制二级菜单弹窗容器的位置以及是否显示(display: none)的;
/* 
<div class="el-menu--horizontal" style="position: absolute; top: 180px; left: 64px; z-index: 2006; display: none;" x-placement="bottom-start">
  <ul role="menu" class="el-menu el-menu--popup el-menu--popup-bottom-start">
  </ul>
</div>
*/

// <el-submenu popper-class="outer-popup-controller"></el-submenu>  <el-submenu>标签上的popper-class="outer-popup-controller" 这个class会渲染到el-menu--horizontal所在的div上
/* 
<div class="el-menu--horizontal outer-popup-controller" style="position: absolute; top: 180px; left: 64px; z-index: 2006; display: none;" x-placement="bottom-start"></div>
*/

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
      font-size: 14px;
      text-decoration: none;
      &:hover {
        color: #1b5fc5;
      }
    }
    .submenu-holder {
      font: bold 18px/36px "Microsoft YaHei";
      cursor: default;
      border-bottom: 2px solid var(--grey-color);
    }
  }
}
</style>
