import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import home from './home';
import search from './search';

// state:{},仓库
// mutations:{},修改仓库唯一手段
// actions:{},处理action，可以书写自己的业务或者处理异步
// getters:{},理解为计算属性，用于简化仓库数据，让组件获取仓库数据方便

export default new Vuex.Store({
 modules:{
    home,
    search,
 }
});
