import Vue from 'vue';

import App from './App.vue';
import store from './store/store.js';
import { datePlugin } from './plugins/plugin.js';

Vue.config.productionTip = false;
Vue.use(datePlugin);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
