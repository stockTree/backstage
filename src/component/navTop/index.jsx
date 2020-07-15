import React, {Component} from 'react'
import './index.scss'

class NavTop extends Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <div className="top">
                <h2>
                    
                    管理后台
                </h2>
                <span>登录</span>
            </div>
        )
    }
}
export default NavTop