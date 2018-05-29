// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router.config'
import qui from '../../src/index.js'
// 完整引用
// Vue.use(qui)
// 独立引用
const { Hello } = qui 
Vue.component(Hello.name, Hello)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app-container',
  router,
  components: { App },
  template: '<App/>'
})
