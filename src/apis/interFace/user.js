import instance from '../fetch'

const userApi = {
    // 用户数据
    userList: (data) => {
        return instance({
            method: 'post',
            url: '/manage/user/list.do',
            data
        })
    }
}
export default userApi