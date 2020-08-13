import React, {Component} from 'react'
import PreTitle from '../../../component/preTitle/preTitle.jsx'
import { Upload, Button, Input, Col, Row, Select, message, Modal } from 'antd';
import { Form } from '@ant-design/compatible'
const { Option } = Select
import { UploadOutlined } from '@ant-design/icons';
import 'react-quill/dist/quill.snow.css';
import apis from '../../../apis/index.js'
import './index.scss'
import detail from './detail.json'
import getCategory from './getCategory.json'
import save from './save.json'

class Saves extends Component {
    constructor (props) {
        super(props)
    }
    state = {
        params: {},
        firstCategoryId: '',
        firstCategoryList: [],
        secondCategoryId: '',
        secondCategoryList: [],
        fileList: [
            {
            uid: '-1',
            name: '空.png',
            status: 'done',
            url: 'http://www.baidu.com/xxx.png',
            },
        ]
    }
    // 拿到初始数据
    componentDidMount () {
        this.handleGetCategory(0, 1)
        
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.onRowParams.id) {
            // apis.detail({'productId':nextProps.onRowParams.id}).then((res) => {
                if (detail.status === 0) {
                    this.setState({params: detail.data})
                    let {params} = this.state
                    let {firstCategoryId, secondCategoryId, subImages} = params
                    if (params.parentCategoryId) {
                        this.setState({firstCategoryId: detail.data.parentCategoryId,secondCategoryId:detail.data.categoryId})
                    } else {
                        this.setState({firstCategoryId: detail.data.categoryId})
                    }
                    // let subImages = params.imageHost + params.mainImage
                    this.setState({subImages:params.imageHost + params.mainImage})
                } else {
                    message.error('好像出错了');
                }
            // }).catch((error) => {
            //     error && message.error(error);
            // })
        } else {
            this.setState({params: {}})
        }
    }
    handleGetCategory = (id, num) => {
        let categoryId = id || 0
        // apis.getCategory({'categoryId': categoryId}).then((res) => {
            if (getCategory.status === 0) {
                if (num === 2) {
                   this.setState({secondCategoryList: getCategory.data, firstCategoryId: id, secondCategoryId: ''})
                } else {
                    this.setState({firstCategoryList: getCategory.data, secondCategoryId: '',secondCategoryList: []})
                }
            } else {
                message.error('好像出错了');
            }
        // }).catch((error) => {
        //     error && message.error(error);
        // })
    }
    // 拿到第一次的id 
    getFirstId = (e) => {
        this.handleGetCategory(e, 2)
    }    
    getSecondId = (e) => {
        let {firstCategoryId, secondCategoryId, categoryId, parentCategoryId} = this.state
        this.setState({secondCategoryId: e,categoryId:e, parentCategoryId:firstCategoryId})
    }
    // 官方 图片上传 的方法
    handleChange = info => {
        let fileList = [...info.fileList];
        // 1. Limit the number of uploaded files
        // Only to show two recent uploaded files, and old ones will be replaced by the new
        fileList = fileList.slice(-1); // 只要一张
    
        // 2. Read from response and show file link
        fileList = fileList.map(file => {
          if (file.response) {
            file.url = file.response.data.url;
            this.setState({subImages: file.response.data.url})
          }
          return file;
        });
        this.setState({ fileList});
    };
    // 提交
    submit = () => {
        const {form} = this.props
        form.validateFields((err, value) => {
            if (err) {
                return  message.error(err);;
            }
            value.subImages = value.subImages.file.response.data.url
            let params = Object.assign({}, value)
            params.parentCategoryId = value.firstCategoryId
            params.categoryId = value.secondCategoryId
            delete params.firstCategoryId
            delete params.secondCategoryId
            // apis.save(params).then((res) => {
                if (save.status === 0) {
                    form.resetFields()
                    this.props.onCancel()
                    message.success(save.data);
                } else {
                    message.error('好像出错了');
                }
            // }).catch((error) => {
            // })
        })
    }
    render () {
        // 图片需要的信息
        const propsUpload = {
            name: 'upload_file',
            action: '/manage/product/upload.do',
            method: 'POST',
            withCredentials: true,
            multiple: false,
            onChange: this.handleChange,
        }
        const {
            name,
            subtitle,
            categoryId,
            parentCategoryId,
            subImages,
            price,
            stock,
            status,
            firstCategoryId,
            secondCategoryId
        } = this.state.params
        const layout = {
            labelCol: { span: 6 }
        }
        const { form, onCancel, onOk, visible } = this.props;
        const { getFieldDecorator } = form;
        return (
            <Modal
                title="编辑"
                visible={visible}
                onOk={this.submit}
                onCancel={onCancel}
            >
                <PreTitle title="商品列表:"></PreTitle>
                <Form {...layout}>
                <Row>
                    <Col span={18} >
                        <Form.Item name="name" label="商品名称:" >
                            {getFieldDecorator('name', {initialValue: name, rules: [{ required: true, message: "请输入商品名称!" }]})(<Input />)}
                        </Form.Item>
                    </Col>
                </Row>
                 <Row>
                    <Col span={18} >
                        <Form.Item label="商品描述:" >
                            {getFieldDecorator('subtitle', {initialValue: subtitle, rules: [{ required: true, message: "请输入商品描述!" }]})(<Input />)}
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item label="商品分类:" >
                    {getFieldDecorator('firstCategoryId', {initialValue: firstCategoryId, rules: [{ required: true, message: "请输入一级分类!" }]})(<Select
                        style={{ width: '100%' }}
                        placeholder="请选择一级分类"
                        allowClear
                        onChange={this.getFirstId}
                    >
                        {this.state.firstCategoryList.map((item, index) => (
                            <Option value={item.id} key={index}>
                                {item.name}
                            </Option>
                        ))
                        }
                    </Select>)}
                    {getFieldDecorator('secondCategoryId', {initialValue: secondCategoryId, rules: [{ required: true, message: "请输入二级分类!" }]})(<Select
                        style={{ width: '100%' }}
                        placeholder="请选择二级分类"
                        allowClear
                        onChange={this.getSecondId}
                    >
                            {this.state.secondCategoryList.map((item, index) => (
                            <Option value={item.id} key={index}>
                                {item.name}
                            </Option>
                        ))
                    }
                    </Select>)}
                    </Form.Item>
                <Row>
                    <Col span={16} >
                    <Form.Item label="商品价格:">
                    {getFieldDecorator('price', {initialValue: price, rules: [{ type: 'number', min: 1, required: true, message: "请输入商品价格,最低大于0元!" }]})(<Input addonAfter="元" />)}
                    </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={16} >
                    <Form.Item label="商品库存:">
                        {getFieldDecorator('stock', {initialValue: stock, rules: [{type: 'number', min: 1, max:100, required: true, message: "请输入商品库存，最低大于0件，最大不超过100件!" }]})(<Input addonAfter="件" />)}
                    </Form.Item>
                    </Col>
                </Row>
                    <Form.Item label="商品图片:" >
                    {getFieldDecorator('subImages', {initialValue: subImages, rules: [{ required: true, message: "请传入商品图片!" }]})(
                    <Upload {...propsUpload} fileList={this.state.fileList}>
                        <Button>
                        <UploadOutlined />点我上传
                        </Button>
                    </Upload>)}
                    </Form.Item>
                    {/* <Form.Item>
                        <Button type="primary" onClick={this.submit} htmlType="submit">
                            提交
                        </Button>
                    </Form.Item> */}
                </Form>
        </Modal>
        )
    }
}

export default Form.create()(Saves)

