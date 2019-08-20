import Vue from 'vue';

import App from './App.vue';
import store from './store/store.js';
import { datePlugin } from './plugins/plugin.js';
import ApiService from './core/api';

Vue.config.productionTip = false;
Vue.use(datePlugin);

ApiService.init();

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
