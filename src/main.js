import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugin/element.js';

import "./config/routeConfig";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
