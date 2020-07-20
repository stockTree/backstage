import commonApi from './interFace/common'
import userApi from './interFace/user'
const apis = {
    ...commonApi,
    ...userApi
}
export default apis