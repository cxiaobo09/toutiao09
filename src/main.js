import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入elementui组件
import ElmentUI from 'element-ui'
import '@/styles/index.less'
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import axios from 'axios'
Vue.use(ElmentUI) // 全局定义
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
Vue.prototype.$axios = axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
