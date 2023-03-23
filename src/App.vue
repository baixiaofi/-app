<template>
  <div id="app">
   <!-- 使用非路由组件 -->
     <Header></Header>
     <!-- 路由组件出口 -->
      <router-view></router-view>

     <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
// 引入非路由组件
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components:{
    // 注册非路由组件
    Header,
    Footer
  }
}
</script>

<style>
#app {
 font-size: 12px;
}
</style>
