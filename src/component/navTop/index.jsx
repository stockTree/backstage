import React, {Component} from 'react'
import { message, Button } from 'antd';
import apis from '../../apis/index.js'
// import index from '../../apis/index.js'
import './index.scss'
import Utils from '../../assets/utils/utils'

let _utils = new Utils()
class NavTop extends Component {
    constructor (props) {
        super(props)
    }
    state = {
        user:_utils.getStorage('userData') || ''
    }
    // 退出登录
    handleLeave = () => {
        apis.logOut().then((res) => {
            _utils.getStorage('userData')
            window.location.href = '/#/login'
        }).catch((error) => {
            error && message.error(error);
        })
        
    }
    render () {
        return (
            <div className="top">
                <h2>
                    管理后台
                </h2>
                <div>
                    <span>欢迎{this.state.user.username}</span>
                    <Button type="dashed" onClick={this.handleLeave}>退出</Button>
                </div>
        
            </div>
        )
    }
}
export default NavTop