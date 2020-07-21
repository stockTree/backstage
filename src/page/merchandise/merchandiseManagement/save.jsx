import React, {Component} from 'react'
import PreTitle from '../../../component/preTitle/preTitle.jsx'
import { Table, Space, Button, Input, Col, Row, Select, Form } from 'antd';
const { Option } = Select
import { NavLink } from 'react-router-dom'
import apis from '../../../apis/index.js'

class Saves extends Component {
    constructor (props) {
        super(props)
    }
    state = {
      data: [],
      searchType: 'productId',
      searchKeyword: ''
    }
    
    render () {
        return (
            <div className="merchandise">
                <PreTitle title="商品列表"></PreTitle>
                <Form ref={this.formRef} name="control-ref">
                <Row>
                    <Col span={18} >
                        <Form.Item name="note" label="商品信息" >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} >
                    <Form.Item name="" label="所属分类">
                        <Select
                            placeholder="请选择一级分类"
                            allowClear
                        >
                            <Option value="other">other</Option>
                        </Select>
                        <Select
                            placeholder="请选择二级分类"
                            allowClear
                        >
                            <Option value="other">other</Option>
                        </Select>
                    </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={12} >
                    <Form.Item name="note" label="商品价格">
                        <Input addonAfter="元" />
                    </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={12} >
                    <Form.Item name="note" label="商品库存" >
                        <Input addonAfter="元" />
                    </Form.Item>
                    </Col>
                </Row>
                    <Form.Item name="note" label="商品图片" >
                        <Input/>
                    </Form.Item>
                    <Form.Item name="note" label="商品详情" >
                        <Input />
                    </Form.Item>
                    <Form.Item>
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>
                    </Form.Item>
                </Form>
                {/* <Row>
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
                </Row> */}
            </div>
        )
    }
}
export default Saves