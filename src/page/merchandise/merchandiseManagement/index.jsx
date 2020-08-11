import React, {Component} from 'react'
import PreTitle from '../../../component/preTitle/preTitle.jsx'
import { Table, Space, Button, Input, Col, Row, Select } from 'antd';
const { Option } = Select
import { NavLink } from 'react-router-dom'
import apis from '../../../apis/index.js'
import Saves from './save.jsx'

class MerchandiseManagement extends Component {
    constructor (props) {
        super(props)
    }
    state = {
        data: [],
        searchType: 'productId',
        searchKeyword: '',
        visible: false,
        rowParams: {}
    }
    // 商品信息录入
    handleChangeVal = (e) => {
        let name = e.target.name
        let value = e.target.value
        this.setState({[name]:value})
    }
    // 商品信息查询
    handleSearch = () => {
        // console.log()
        let { searchType, searchKeyword } = this.state
        let params = {
            [searchType] : searchKeyword
            // pageNum: 1
        }
        apis.merchandiseSearch(params).then((res) => {
            if (res.status === 0) {
                this.setState({data:res.data.list})
            } else {
                message.error('好像出错了'); 
            }
        }).catch((error) => {
            error && message.error(error);
        })
    }
    // 上下架商品
    handleToggle = (status, id) => {
        let state = (status === 1 ? 2 : 1)
        apis.statueToggle({productId: id, status:state}).then((res) => {
            if (res.status === 0) {
                this.handleMerchandiseData()
            } else {
                message.error('好像出错了');
            }
        }).catch((error) => {
            error && message.error(error);
        })
    }
    componentDidMount () {
        this.handleMerchandiseData()
    }
    // 获取商品列表数据
    handleMerchandiseData = () => {
        apis.merchandiseList().then((res) => {
            if (res.status === 0) {
                this.setState({data:res.data.list})
            } else {
                message.error('好像出错了');
            }
        }).catch((error) => {
            error && message.error(error);
        })
    }
    
    //弹窗展示和关闭
    open = (row) => {
        if (row) {
            this.setState({visible: true,rowParams:row})
        } else {
            this.setState({visible: true, rowParams: {}})
        }
    }
    handleOk = e => {
        this.setState({
            visible: false, 
        });
    };
    //弹窗关闭
    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };
    render () {
        const columns = [
            {
              title: 'Id',
              dataIndex: 'id',
              key: 'id',
            },
            {
              title: '商品名称',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: '品类',
              dataIndex: 'categoryId',
              key: 'categoryId',
            },
            {
              title: '标题',
              dataIndex: 'subtitle',
              key: 'subtitle',
            },
            {
              title: '价格',
              dataIndex: 'price',
              key: 'price',
            },
            {
                title: '状态',
                dataIndex: 'status',
                key: 'status',
                render:(status) => (
                    <span>
                        {status === 1 ? '在售' : '已下架'}
                    </span>
                )
            },
            {
                title: '操作',
                dataIndex: 'status',
                key: 'status',
                render:(text,record) => (
                    <Space size="middle">
                        <a onClick={() => {this.handleToggle(record.status, record.id)}}>{record.status === 2 ? '在售' : '下架'}</a>
                        <a onClick={() => {this.open(record)}}>编辑</a>
                    </Space>
                )
            }
        ]
        let style = {marginBottom:'16px', marginRight: '12px'}
        let styleSelect = {marginBottom:'16px'}
        let styleSearch = {marginBottom:'16px', marginRight: '12px'}
        return (
            <div className="merchandise">
                <PreTitle title="商品列表">
                </PreTitle>
                <Row>
                    <Col style={styleSelect}>
                        <Select style={{ width: 120 }} defaultValue="productId" name="searchType" onChange={(val)=>{this.setState({'searchType':val})}}>
                            <Option value="productId">商品id</Option>
                            <Option value="productName">商品名称</Option>
                        </Select>
                    </Col>
                    <Col style={style}>
                        <Input placeholder="输入查询" name="searchKeyword" onChange={this.handleChangeVal} />
                    </Col>
                    <Col style={styleSearch}>
                        <Button type="primary" onClick={this.handleSearch}>搜索</Button>
                    </Col>
                    <Col style={style}>
                        <Button ghost type="primary"><a onClick={() => {this.open()}}>新增商品</a></Button>
                    </Col>
                </Row>
                <Saves
                    onOk={this.handleOk}
                    visible={this.state.visible}
                    onRowParams = {this.state.rowParams}
                    onCancel={this.handleCancel} />
                <Table columns={columns} rowKey='id' dataSource={this.state.data} />
            </div>
        )
    }
}
export default MerchandiseManagement