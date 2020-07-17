import instance from '../fetch'

const commonApi = {
    // 用户密码登录
    login: (data) => {
        return instance({
            method: 'post',
            url: '/manage/user/login.do',
            data
        })
    },
    
    // 用户退出登录
    logOut: () => {
        return instance({
            method: 'post',
            url: '/user/login.do',
        })
    },

    // 首页数据
    statistic: () => {
        return instance({
            method: 'post',
            url: '/manage/statistic/base_count.do',
        })
    }
}
export default commonApi