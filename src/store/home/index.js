import {reqgetCategoryList} from '@/api';
const state = {};
const mutations = {};
const actions = {
    async  categoryList(){
    
          let result = await reqgetCategoryList();
          console.log(result)
    }
};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters,
}