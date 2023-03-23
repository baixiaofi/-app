import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter );
// 引入路由组件
import Home  from '@/pages/Home';
import Search  from '@/pages/Search';
import Login  from '@/pages/Login';
import Register  from '@/pages/Register';

export default new VueRouter ({
    // 配置路由
    routes:[
        {
            path:"/home",
            component:Home,
            meta:{show:true}
        },
        {
            path:"/search",
            component:Search,
            meta:{show:true},
            name:'search'
        },
        {
            path:"/login",
            component:Login,
            meta:{show:false}
        },
        {
            path:"/register",
            component:Register,
            meta:{show:false}
        },
        //  项目跑起来的时候定向到首页，加上就报错
        // {
        //       path :'#',
        //       redirect: "/home"
        // }
    ]
})