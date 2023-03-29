//d登录和注册的仓库

import {reqGetCode} from '@api';
const state = {};
const mutations = {};

const actions = {
    async   getCode({commit},phone){
          let result = await reqGetCode(phone);
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