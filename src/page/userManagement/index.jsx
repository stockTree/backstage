import React, {Component} from 'react'
import PreTitle from '../../component/preTitle/preTitle.jsx'
import { message, Table } from 'antd';
const { Column} = Table
import apis from '../../apis/index.js'
import userList from './userList.json'

class UserManagement extends Component {
    constructor (props) {
        super(props)
    }
    state = {
        data: []
    } 
    componentDidMount () {
        this.handleUserData()
    }
    handleUserData = () => {
        // apis.userList().then((res) => {
            if (userList.status === 0) {
                this.setState({data:userList.data.list})
            } else {
                message.error('好像出错了');
            }
        // }).catch((error) => {
        //     error && message.error(error);
        // })
    }
    render () {
      // 两种方式都可以
        // const columns = [
        //     {
        //       title: 'id',
        //       dataIndex: 'id',
        //       key: 'id',
        //     },
        //     {
        //       title: 'username',
        //       dataIndex: 'username',
        //       key: 'username',
        //     },
        //     {
        //       title: 'email',
        //       dataIndex: 'email',
        //       key: 'email',
        //     },
        //     {
        //       title: 'phone',
        //       dataIndex: 'phone',
        //       key: 'phone',
        //     },
        //     {
        //       title: 'createTime',
        //       dataIndex: 'createTime',
        //       key: 'createTime',
        //     }
        // ]
        return (
            <div className="user">
                <PreTitle title="用户列表"></PreTitle>
                <Table dataSource={this.state.data} rowKey='id'>
                  <Column title="Id" dataIndex="id" key="id" />
                  <Column title="Username" dataIndex="username" key="username" />
                  <Column title="Email" dataIndex="email" key="email" />
                  <Column title="Phone" dataIndex="phone" key="phone" />
                  <Column title="CreateTime" dataIndex="createTime" key="createTime" />
                </Table>
                {/* <Table columns={columns} rowKey='id' dataSource={this.state.data} /> */}
            </div>
        )
    }
}
export default UserManagement