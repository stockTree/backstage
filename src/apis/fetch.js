// import React from 'react'
import axios from 'axios'

const instance = axios.create({
    baseUrl:'http://admintest.happymmall.com',
    // 超时设置：10秒
    timeout:10000,
    headers: {
        // key=value&key=value的格式
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    responseType: 'json',
    withCredentials: true
})

// 请求拦截器
instance.interceptors.request.use(
(config) => {
    return config
},
(error) => {
    return Promise.reject(error)
})

// 响应拦截器
instance.interceptors.response.use((response) => {
    const res = response.data
    if (res.code = '10') {
        router.replace('/login')    
        return Promise.reject(res)
    }
    if (!res) {
        return Promise.reject(res)
    }
    return res
},
(error) => {
    return Promise.reject(error)
})

export default instance
