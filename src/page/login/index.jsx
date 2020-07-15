import React, {Component} from 'react'
import { Row, Col, Form, Input, Button } from 'antd';
import './index.scss'
import apis from '../../apis/index.js'
const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>


class Login extends Component{
    // constructor (props) {
    //     super (props)
        state = {
            valAccount: '22',
            valPwd: '33'
        }
    // }
    getValue = (e) => {
        console.log(e,11,2)
        console.log(e.target.value,24)
        console.log(e.target.name,23)
        let inputName = e.target.name
        let inputValue = e.target.value
        console.log(inputName,inputValue)
        this.setState({[inputName]:inputValue})
    }
    handleLogin = () => {
        console.log(11,3)
        let {valAccount, valPwd} = this.state
        let params = {
            username: valAccount,
            password: valPwd
        }
        apis.login(params).then((res) => {
            console.log(11)
            if (res.code === '0') {
                // this.payBtnVisible = false
                // window.open(res.data.qrCodeUrl)
            } else {
                console.log(11)
                // this.$message.error(res.message)
            }
        }).catch((error) => {
            // this.$message.error(error.message)
        })
    }
    
    render () {
        let {valAccount, valPwd} = this.state
        return (
            <div>
                <Row>
                    <Col span={8} offset={8} className="log-card g-blue-bg">
                        <DemoBox className="site-card-border-less-wrapper">
                            <span className="log-title">欢迎，进入管理后台</span>
                            {/* <Card title="登录" bordered={false} className="g-padding g-blue-bg" style={{ width: 300}}> */}
                            {/* <Form name="" onChange= {this.getValue}>
                                <Form.Item name="valAccount" >
                                    <Input />
                                </Form.Item>
                                <Form.Item name="valPwd" >
                                    <Input />
                                </Form.Item>
                            </Form> */}
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
                                    <Button type="primary" size="large" block onClick={this.handleLogin}>登录</Button>
                            {/* </Card> */}
                        </DemoBox>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Login