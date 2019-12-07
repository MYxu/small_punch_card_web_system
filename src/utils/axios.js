/**
 * axios 封装
 */

import Axios from 'axios'
import Vue from 'vue'

// 额外挂载axios到Vue prototype下面，便于在页面直接使用axios发请请求
// 不过这样就会破坏了我们Api模块化同一管理的封装，这样做是为了某些特殊的请求吧
Vue.prototype.$axios = Axios

let instance = Axios.create()

// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default instance
