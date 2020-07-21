import React, {Component} from 'react'
import PreTitle from '../../../component/preTitle/preTitle.jsx'
import { Table, Space, Button, Input, Col, Row, Select } from 'antd';
const { Option } = Select
import { NavLink } from 'react-router-dom'
import apis from '../../../apis/index.js'

class MerchandiseManagement extends Component {
    constructor (props) {
        super(props)
    }
    state = {
      data: [],
      searchType: 'productId',
      searchKeyword: ''
      
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
        console.log(params)
        apis.merchandiseSearch(params).then((res) => {
            if (res.status === 0) {
                this.setState({data:res.data.list})
            } else {
            }
        }).catch((error) => {
        })
    }
    // 上下架商品
    handleToggle = (status, id) => {
        let state = (status === 1 ? 2 : 1)
        apis.statueToggle({productId: id, status:state}).then((res) => {
            if (res.status === 0) {
                this.handleMerchandiseData()
            } else {
            }
        }).catch((error) => {
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
            }
        }).catch((error) => {
        })
    }
    
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
                        <a onClick={() => {this.handleToggle(record.status, record.id)}}>{record.status === 2 ? '在售' : '已下架'}</a>
                        <NavLink to={'/merchandiseManagement/save'+record.id }>保存</NavLink>
                        <NavLink to={'/merchandiseManagement/edit'+record.id }>编辑</NavLink>
                    </Space>
                )
            }
        ]
        let style = {marginBottom:'16px', marginRight: '12px'}
        let styleSelect = {marginBottom:'16px', marginRight: '6px'}
        return (
            <div className="merchandise">
                <PreTitle title="商品列表">
                    <Button><NavLink to='/merchandiseManagement/save'>添加商品</NavLink></Button>
                </PreTitle>
                <Row>
                    <Col span={5} style={styleSelect}>
                        <Select style={{ width: 120 }} defaultValue="productId" name="searchType" onChange={(val)=>{this.setState({'searchType':val})}}>
                            <Option value="productId">商品id</Option>
                            <Option value="productName">商品名称</Option>
                        </Select>
                    </Col>
                    <Col span={8} style={style}>
                        <Input placeholder="输入查询" name="searchKeyword" onChange={this.handleChangeVal} />
                    </Col>
                    <Col span={6}>
                        <Button onClick={this.handleSearch}>搜索</Button>
                    </Col>
                </Row>
                <Table columns={columns} rowKey='id' dataSource={this.state.data} />
            </div>
        )
    }
}
export default MerchandiseManagement