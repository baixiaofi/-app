import axios  from 'axios'

const requests = axios.create({
    // 配置对象
    // 基础路径，发请求的时候，路径当中会出现api
    baseURL: "/api",
    // 请求超时的时间
    timeout: 5000,
});
// 请求拦截器：在发请求之前，请求拦截器可以检测到，可以再请求发出之前做一些事情
requests.interceptors.request.use((config) => {

    return config
})
// 相应拦截器
requests.interceptors.response.use((res) => {
    // 成功的回调函数：服务器相应数据回来以后，响应拦截器可以检测到，可以做一些事情
    return res.data;
}, (error) => {
    // 服务器响应失败的回调函数
    return Promise.reject(new Error('faile'))
})
// 对外暴露

export default requests;
