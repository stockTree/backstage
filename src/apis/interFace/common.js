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
}
export default commonApi