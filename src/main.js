import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
// 引入路由

import TypeNav from '@/pages/Home/TypeNav';
Vue.component(TypeNav.name,TypeNav)
Vue.config.productionTip = false
 
import {reqgetCategoryList} from '@/api';
reqgetCategoryList();
new Vue({
  render: h => h(App),
  // 注册路由
  router
}).$mount('#app')



