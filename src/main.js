import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import globalMixin from "./mixin/globalMixin";
import globalComponent from "./component/globalComponent.js";

import "@/icons";

import "./plugin/element.js";
import "./plugin/vxeTable.js";

import "./config/routeConfig";

import "./scss/theme.scss";

Vue.mixin(globalMixin);
Vue.use(globalComponent);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
