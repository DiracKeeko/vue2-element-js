import router from '@/router';
import store from '@/store';

const menuConfigArr = [
  {
    index: '/home',
    title: '首页',
    hidden: 0,
    menuType: 'inner',
    menuId: 1
  }
];

const allRouteArr = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/view/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/view/About.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/view/TestJsonFormat.vue')
  },
  {
    path: '/*',
    redirect: '/'
  }
];

function recursionPushPath(menuList, pathList) {
  menuList.forEach((item) => {
    if (!(item.menuType && item.menuType === 'isOuter')) {
      if (item.index && !/^\d$/.test(item.index)) {
        pathList.push(item.index);
      }
      if (item.menuItem && item.menuItem.length > 0) {
        recursionPushPath(item.menuItem, pathList);
      }
    }
  });
}

function createRouteArrByPathList(pathList) {
  const routeArr = allRouteArr.filter((item) => {
    return pathList.includes(`/${item.name}`); // 涉及路由传参,用 /name 来判定
  });
  routeArr.push({ path: '*', redirect: '/home' });
  return routeArr;
}

function createPathList(menuConfigArr) {
  const pathList = [];
  recursionPushPath(menuConfigArr, pathList);
  return pathList;
}

let menuList = [];
router.beforeEach((to, from, next) => {
  if (to.path === '/login' || to.path === '/401') {
    // 未登录,放行  ->  login
    menuList = [];
    next();
  } else if (menuList.length > 0) {
    next();
  } else {
    menuList = menuConfigArr;
    store.commit('setMenuList', menuList);
    const pathList = createPathList(menuList);
    const routeArr = createRouteArrByPathList(pathList);
    router.addRoutes(routeArr);
    next({ ...to, replace: true });
  }
});
