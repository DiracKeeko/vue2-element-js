import router from "@/router";
import store from "@/store";

/* 
// case01 fullComponentPath加上 () =>import(`${fullComponentPath}`)
const fullComponentPathArr = [
  "@/view/Home.vue",
  "@/view/About.vue"
]

function createRouteItem(fullComponentPath) {
  const routeItem = {
    path: fullComponentPath,
    name: fullComponentPath.slice(7, -4),
    component: () => import(`${fullComponentPath}`)
  };
  return routeItem;
}
 */

/* 
// case02 componentPath 加上 () => import(`@/views/${componentPath}`)
// 不报错但没有价值的写法：无入口文件，生产环境编译产物稀碎。
const componentPathArr = [
  "Home.vue",
  "About.vue"
]
function createRouteItem(componentPath) {
  const routeItem = {
    path: componentPath,
    name: componentPath.slice(0, -4),
    component: () => import(`@/views/${componentPath}`)
  };
  return routeItem;
} 
*/

/* 
// case03 朴实无华但可用的写法 path、name、component绑定 (直接写routeItem)
const routeArr = [
  {
    path: "/home",
    name: "home",
    component: () => import("@/view/Home.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/view/About.vue")
  }
]
*/

/* 
// case04 些许麻烦，但配置性强的写法
const nameToComponentPathMap = {
  home: () => import("@/view/Home.vue"),
  about: () => import("@/view/About.vue")
}
 */


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
  },
  {
    "index": "3",
    "title": "showCase",
    "hidden": 0,
    "menuType": "inner",
    "menuId": 3,
    "menuItem": [
      {
        "index": "/cardLayout",
        "title": "cardLayout",
        "hidden": 0,
        "menuType": "inner",
        "menuId": 1,
        "componentPath": "showCase/ComponentCase.vue"
      },
      {
        "index": "/showCusMultiMenu",
        "title": "showCusMultiMenu",
        "hidden": 0,
        "menuType": "inner",
        "menuId": 1,
        "componentPath": "showCase/showCusMultiMenu/ShowCusMultiMenu.vue"
      },
      {
        "index": "/showCusMultiMenu02",
        "title": "showCusMultiMenu02",
        "hidden": 0,
        "menuType": "inner",
        "menuId": 1,
        "componentPath": "showCase/showCusMultiMenu/ShowCusMultiMenu02.vue"
      },
      {
        "index": "/showSkeletonRender",
        "title": "showSkeletonRender",
        "hidden": 0,
        "menuType": "inner",
        "menuId": 1,
        "componentPath": "showCase/showSkeletonRender/ShowSkeletonRender.vue"
      },
      {
        "index": "/thePlainTable",
        "title": "thePlainTable",
        "hidden": 0,
        "menuType": "inner",
        "menuId": 1,
        "componentPath": "showCase/showThePlainTable/ShowThePlainTable.vue"
      },
      {
        "index": "/showVxeTable",
        "title": "showVxeTable",
        "hidden": 0,
        "menuType": "inner",
        "menuId": 1,
        "componentPath": "showCase/showVxeTable/ShowVxeTable.vue"
      },
      {
        "index": "/showGlobalMixin",
        "title": "showGlobalMixin",
        "hidden": 0,
        "menuType": "inner",
        "menuId": 1,
        "componentPath": "showCase/showGlobalMixin/ShowGlobalMixin"
      },
      {
        "index": "/showPdfExporter",
        "title": "showPdfExporter",
        "hidden": 0,
        "menuType": "inner",
        "menuId": 1,
        "componentPath": "showCase/showPdfExporter/ShowPdfExporter"
      },
    ]
  },
  {
    "index": "4",
    "title": "组件展示",
    "hidden": 0,
    "menuType": "inner",
    "menuId": 3,
    "menuItem": [
      {
        "index": "/actionComponent",
        "title": "交互组件",
        "hidden": 0,
        "menuType": "inner",
        "menuId": 1,
        "componentPath": "showComponent/ActionComponent.vue"
      },
    ]
  },
  // {
  //   "index": "4",
  //   "title": "showCase",
  //   "hidden": 0,
  //   "menuType": "inner",
  //   "menuId": 3,
  //   "menuItem": [
  //     {
  //       "index": "/showCusTip",
  //       "title": "showCusTip",
  //       "hidden": 0,
  //       "menuType": "inner",
  //       "menuId": 1,
  //       "componentPath": "showCase/showCusTip/ShowCusTip.vue"
  //     }
  //   ]
  // }
];


function createRouteItem(menuItem) {
  const { index, componentPath } = menuItem;
  const routeItem = {
    path: index,
    name: index.slice(1),
    component: () => import(`@/view/${componentPath}`)
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
