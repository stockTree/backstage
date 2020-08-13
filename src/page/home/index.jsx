import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import PreTitle from '../../component/preTitle/preTitle.jsx'
import { message } from 'antd';
import './index.scss'
import apis from '../../apis/index.js'

class Home extends Component{
    constructor (props) {
        super(props)
    }
    state = {
        userCount: '-',
        productCount: '-',
        orderCount: '-'
    }
    componentDidMount() {
        apis.statistic().then((res) => {
            if (res.status === 0) {
                this.setState(res.data)
            } else {
                message.error('请重新登录');
                window.location.href="/#/login"
            }
        }).catch((error) => {
            error && message.error(error)
        })
    }
    componentWillUnmount() {
        this.setState = ()=>false;
    }
    render () {
        let {userCount, productCount, orderCount} = this.state
        return (
            <div className="home">
                <PreTitle title="首页"></PreTitle>
                <section>
                    <ol>
                        <li>
                            <NavLink to="/userManagement">
                                <span className="num">{userCount}</span>
                                <span className="numText">用户总数</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/merchandiseManagement">
                                <span className="num">{productCount}</span>
                                <span className="numText">商品总数</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dataManagement">
                                <span className="num">{orderCount}</span>
                                <span className="numText">数据展示</span>
                            </NavLink>
                        </li>
                    </ol>
                </section>
                
            </div>
        )
    }
}
export default Home