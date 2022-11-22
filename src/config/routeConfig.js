import router from "@/router";
import store from "@/store";

const menuConfigArr = [
  {
    "index": "/home",
    "title": "首页",
    "hidden": 0,
    "menuType": "inner",
    "menuId": 1,
    "componentPath": "Home.vue"
  },
  {
    "index": "/about",
    "title": "关于",
    "hidden": 0,
    "menuType": "inner",
    "menuId": 2,
    "componentPath": "About.vue"
  },
  {
    "index": "2",
    "title": "测试案例",
    "hidden": 0,
    "menuType": "inner",
    "menuId": 3,
    "menuItem": [
      {
        "index": "/jsonFormat",
        "title": "JsonFormat",
        "hidden": 0,
        "menuType": "inner",
        "menuId": 1,
        "componentPath": "TestJsonFormat.vue"
      }
    ]
  }
];

function loadView(componentPath) {
  return () => import(`@/view/${componentPath}`);
  // return () => import(`${componentPath}`); // 当前路径在src下
}

function createRouteItem(menuItem) {
  const { index, componentPath } = menuItem;
  const routeItem = {
    path: index,
    name: index.slice(1),
    component: loadView(componentPath)
  };
  return routeItem;
}

function recursionPushRouteItem(menuArr, routeArr) {
  menuArr.forEach((item) => {
    const isInner = !(item.menuType && item.menuType === "outer");
    if (isInner) {
      const isRealMenu = item.index && !/^\d$/.test(item.index);
      const isComponentPathExist = item.componentPath && item.componentPath.trim() !== "";
      if (isRealMenu && isComponentPathExist) {
        routeArr.push(createRouteItem(item));
      }
      const isChildMenuExist = item.menuItem && item.menuItem.length > 0;
      if (isChildMenuExist) {
        recursionPushRouteItem(item.menuItem, routeArr);
      }
    }
  });
}

function createRouteArrByMenuArr(menuArr) {
  const routeArr = [];
  recursionPushRouteItem(menuArr, routeArr);
  // routeArr.push({ path: "*", redirect: "/home" });
  return routeArr;
}

let menuArr = [];
router.beforeEach((to, from, next) => {
  if (to.path === "/login" || to.path === "/401") {
    // 未登录,放行  ->  login
    menuArr = [];
    next();
  } else if (menuArr.length > 0) {
    next();
  } else {
    menuArr = menuConfigArr;
    store.commit("setMenuArr", menuArr);
    const routeArr = createRouteArrByMenuArr(menuArr);
    router.addRoutes(routeArr);
    next({ ...to, replace: true });
  }
});
