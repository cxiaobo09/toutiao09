import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入elementui组件
import ElmentUI from 'element-ui'
import '@/styles/index.less'
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
Vue.use(ElmentUI) // 全局定义
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
