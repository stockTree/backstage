import commonApi from './interFace/common'
import userApi from './interFace/user'
import merchandiseApi from './interFace/merchandise'
const apis = {
    ...commonApi,
    ...userApi,
    ...merchandiseApi
}
export default apis