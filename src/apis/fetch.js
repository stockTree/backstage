// import React from 'react'
import axios from 'axios'

const instance = axios.create({
    baseUrl:'https://5ed0523816017c00165e3476.mockapi.io/api/common/',
    // 超时设置：10秒
    timeout:10000,
    headers: {
        // key=value&key=value的格式
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    transformRequest: [function (data, headers) {
        // 对传参 data 进行任意转换处理,
        let ret = ''
        for (const it in data) {
            if (ret !== '') ret += '&'
            if (Object.prototype.toString.call(data[it]) === '[object Array]' && !data[it].length) {
                ret += encodeURIComponent(it) + '=' + '[]'
            } else {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it])
            }
        }
        return ret
    }],
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
    if (res.status === 10) {
        window.location.href='/#/login' 
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
