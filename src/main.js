import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { ValidationObserver, ValidationProvider } from 'vee-validate';

Vue.config.productionTip = false

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
