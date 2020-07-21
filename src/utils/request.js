import axios from 'axios'
import Vue from 'vue'
const baseURL = process.env.VUE_APP_BASE_API
const service = axios.create({
  baseURL: baseURL, // api base_url
  timeout: 6000 // 请求超时时间
})
// request interceptor
service.interceptors.request.use(
  config => {
    const token = Vue.$cookies.get('token')
    if (token) {
      config.headers.token = token // 让每个请求携带自定义 token 请根据实际情况自行修改
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)
// response interceptor
service.interceptors.response.use((response) => {
  return response.data
}, error => {
  if (error.response) {
    const { status, config, data } = error.response
    if (status === 400 || status === 401 || status === 403) {
      // store.dispatch('user/logout')
      // store.dispatch('user/logout')

    } else {
      return data
    }
  } else {
    if (error.message.indexOf('timeout') !== -1) {
      error.message = '网络请求超时'
    }
    if (error.message.indexOf('Network') !== -1) {
      error.message = '网络异常'
    }

    return Promise.reject(error)
  }
}
)
export default service
