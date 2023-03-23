const {defineConfig} = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies : true ,
  lintOnSave:false,//规避命名方法
  devServer:{
    // port:8080,
    proxy: {
      '/api':{
       
        // // changeOrigin:true,
        // target:'http://39.98.123.211',
        target:'http://gmall-h5-api.atguigu.cn',
        // pathRewrite:{'^/api': '' },

      }
    }
  }
})
