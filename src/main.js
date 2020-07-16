import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Fragment from 'vue-fragment'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
Vue.use(Fragment.Plugin)
Vue.use(ElementUI)
Vue.config.productionTip = false

import './permission'
import './assets/css/reset.css'
import './assets/css/border.css'
import './assets/css/public.css'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
