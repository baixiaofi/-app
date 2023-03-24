import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
// 引入路由
import store from '@/store';

import TypeNav from '@/components/TypeNav';
Vue.component(TypeNav.name,TypeNav)
Vue.config.productionTip = false
 
import {reqgetCategoryList} from '@/api';
reqgetCategoryList();
new Vue({
  render: h => h(App),
  // 注册路由
  router,
  // 注册仓库组件身上会多$store属性
  store,

}).$mount('#app')



