import React, {Component} from 'react'
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined, BranchesOutlined } from '@ant-design/icons';
import {NavLink} from 'react-router-dom'
import './index.scss'

const { SubMenu } = Menu;

class NavSide extends Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <div className="side">
                <Menu
                    mode="inline"
                    onOpenChange={this.onOpenChange}
                    style={{ width: '100%',height:"100vh" }}
                >
                    <Menu.Item
                        key="sub1"
                        icon={<MailOutlined />}
                    >
                        <NavLink to="/">首页</NavLink>
                    </Menu.Item>
                    <SubMenu key="sub2" icon={<AppstoreOutlined />} title="商品">
                        <Menu.Item key="5">
                            <NavLink to="/merchandiseManagement">商品管理</NavLink>
                        </Menu.Item>
                        {/* <Menu.Item key="6">
                            <NavLink to="/categoryManagement">品类管理</NavLink>
                        </Menu.Item> */}
                    </SubMenu>
                    <SubMenu key="sub3" icon={<BranchesOutlined />} title="可视化">
                        <Menu.Item key="7">
                            <NavLink to="/dataManagement">数据展示</NavLink>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" icon={<SettingOutlined />} title="用户">
                        <Menu.Item key="9">
                            <NavLink to="/userManagement">用户管理</NavLink>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}
export default NavSide