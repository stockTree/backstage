import React, {Component} from 'react'
import { Row, Col, Form, Input, Button, message  } from 'antd';
import './index.scss'
import apis from '../../apis/index.js'
import Utils from '../../assets/utils/utils'
const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>


class Login extends Component{
    constructor (props) {
        super (props)
    }
    state = {
        valAccount: 'admin',
        valPwd: 'admin'
    }
    getValue = (e) => {
        let inputName = e.target.name
        let inputValue = e.target.value
        this.setState({[inputName]:inputValue})
    }
    // 账号密码校验
    validateParams = () => {
        let validate = {
            result: true,
            resultMsg: ''
        }
        let {valAccount, valPwd} = this.state
        if (valAccount) {
            validate.result = true
        } else {
            validate.resultMsg = '账号不存在'
            validate.result = false
        }
        if (valPwd) {
            validate.result = true
        } else {
            validate.resultMsg = '密码不存在'
            validate.result = false
        }
        return validate
    }
    // 登录
    handleLogin = () => {
        let {valAccount, valPwd} = this.state
        if (this.validateParams().result) {
            let params = {
                username: valAccount,
                password: valPwd
            }
            apis.login(params).then((res) => {
                if (res.status === 0) {
                    let setVal = new Utils()
                    setVal.setStorage('userData', res.data)
                    window.location.href = '/'
                } else {
                    message.error('好像出错了');
                }
            }).catch((error) => {
                 error && message.error(error);
            })
        } else {
            console.log(this.validateParams().resultMsg)
        }
    }
    componentDidMount () {
        document.addEventListener('keydown', this.onKeyDownEnter)
    }
    // 回车键登录
    onKeyDownEnter = (e) => {
        console.log(e,'e')
        if(e.keyCode === 13) {
            this.handleLogin()
        }
    }
    
    render () {
        let {valAccount, valPwd} = this.state
        return (
            <div>
                <Row>
                    <Col span={8} offset={8} className="log-card g-blue-bg">
                        <DemoBox className="site-card-border-less-wrapper">
                            <span className="log-title">欢迎，进入管理后台</span>
                            <Input
                                className="log-input"
                                type="text"
                                placeholder="请输入账号"
                                onChange={this.getValue}
                                name="valAccount"
                                value={valAccount}
                                
                            />
                            <Input
                                className="log-input"
                                type="text"
                                placeholder="请输入密码"
                                onChange={this.getValue}
                                name="valPwd"
                                value={valPwd}
                            />
                            <span>账号admin,密码admin</span>
                            <Button type="primary" size="large" block onClick={this.handleLogin} onKeyDown={this.onKeyDownEnter}>登录</Button>
                        </DemoBox>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Login