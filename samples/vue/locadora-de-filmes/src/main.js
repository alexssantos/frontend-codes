import Vue from 'vue'
import App from './App.vue'

//Bootstrap ==
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
//===========

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
