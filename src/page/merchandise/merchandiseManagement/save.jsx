import React, {Component} from 'react'
import PreTitle from '../../../component/preTitle/preTitle.jsx'
import { Upload, Button, Input, Col, Row, Select, message } from 'antd';
import { Form } from '@ant-design/compatible'
const { Option } = Select
import { UploadOutlined } from '@ant-design/icons';
import 'react-quill/dist/quill.snow.css';
import apis from '../../../apis/index.js'
class Saves extends Component {
    constructor (props) {
        super(props)
    }
    state = {
        params: {
            name: 'jak',
            subtitle: 'nicai',
            categoryId: 0,
            parentCategoryId: 0,
            subImages: '',
            price: '',
            stock: '',
            status: 1,
        },
        name: 'hah',
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
        let {state} = this.props.location
        let { params} = this.state
        this.setState({params:state})
    }
    handleGetCategory = (id, num) => {
        let categoryId = id || 0
        apis.getCategory({'categoryId': categoryId}).then((res) => {
            if (res.status === 0) {
                if (num === 2) {
                   this.setState({secondCategoryList: res.data, firstCategoryId: id, secondCategoryId: ''})
                } else {
                    this.setState({firstCategoryList: res.data, secondCategoryId: '',secondCategoryList: []})
                }
            } else {
                message.error('好像出错了');
            }
        }).catch((error) => {
            error && message.error(error);
        })
    }
    // 拿到详情
    // handleDetail = () => {
    //     apis.detail({'productId': categoryId}).then((res) => {
    //         if (res.status === 0) {
    //             if (num === 2) {
    //                this.setState({secondCategoryList: res.data, firstCategoryId: id, secondCategoryId: ''})
    //             } else {
    //                 this.setState({firstCategoryList: res.data, secondCategoryId: '',secondCategoryList: []})
    //             }
    //         } else {
    //             message.error('好像出错了');
    //         }
    //     }).catch((error) => {
    //         error && message.error(error);
    //     })
    // }
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
    // 名称
    getNoteVal = (e) => {
        let val = e.target.value
        this.setState({name: val})
    }
    // 描述
    getSubtitleVal = (e) => {
        let val = e.target.value
        this.setState({subtitle: val})
    }
    // 价格
    getPriceVal = (e) => {
        let val = e.target.value
        this.setState({price: val})
    }// 库存
    getStockVal = (e) => {
        let val = e.target.value
        this.setState({stock: val})
    }
    // 校验
    validate = (params) => {
        let { name, subtitle, categoryId, parentCategoryId, subImages, price, stock } = params
        let valiObj = {
            valiNote: '',
            valiJudje: true
        }
        if (!parseInt(stock)) {
            valiObj.valiNote = "请输入商品件数"
            valiObj.valiJudje = false
        }
        if (!(parseFloat(price))) {
            valiObj.valiNote = "请输入商品价格"
            valiObj.valiJudje = false
        }
        if (!subImages) {
            valiObj.valiNote = "请选择商品图片"
            valiObj.valiJudje = false
        }
        if ((parseInt(categoryId) > 0) && (parseInt(parentCategoryId) > 0)) {} else {
            valiObj.valiNote = "请选择产品分类"
            valiObj.valiJudje = false
        }
        if (!subtitle) {
            valiObj.valiNote = "请输入商品详情"
            valiObj.valiJudje = false
        }
        if (!name) {
            valiObj.valiNote = "请输入商品名称"
            valiObj.valiJudje = false
        }
        return valiObj
    }
    // 提交
    submit = () => {
        let { name, subtitle, categoryId, parentCategoryId, subImages, price, stock, status } = this.state.params
        let params = {
            name, subtitle, categoryId, parentCategoryId, subImages, price, stock, status
        }
        if (this.validate(params).valiJudje) {
            apis.save(params).then((res) => {
                if (res.status === 0) {
                    window.location.href = '/#/merchandiseManagement/index'
                } else {
                    message.error('好像出错了');
                }
            }).catch((error) => {
            })
        } else{
            console.log('不通过') 
        }
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
            status
        } = this.state.params
        const firstCategoryId  = this.state.params.categoryId
        const secondCategoryId  = ''
        const { form } = this.props;
        const { getFieldDecorator } = form;
        return (
            <div className="merchandise">
                <PreTitle title="商品列表"></PreTitle>
                <Form>
                <Row>
                    <Col span={18} >
                        <Form.Item name="name" onChange={ e => this.getNoteVal(e) } label="商品名称" >
                        {getFieldDecorator('name', {initialValue: name})(<Input />)}
                        </Form.Item>
                    </Col>
                </Row>
                 <Row>
                    <Col span={18} >
                        <Form.Item onChange={ e => this.getSubtitleVal(e) } label="商品描述" >
                            {getFieldDecorator('subtitle', {initialValue: subtitle})(<Input />)}
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item label="商品分类" >
                {getFieldDecorator('firstCategoryId', {initialValue: firstCategoryId})(<Select
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
                    {getFieldDecorator('secondCategoryId', {initialValue: secondCategoryId})(<Select
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
                    <Form.Item onChange={ e => this.getPriceVal(e) } label="商品价格">
                    {getFieldDecorator('price', {initialValue: price})(<Input addonAfter="元" />)}
                    </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={16} >
                    <Form.Item onChange={ e => this.getStockVal(e) } label="商品库存">
                        {getFieldDecorator('stock', {initialValue: stock})(<Input addonAfter="件" />)}
                    </Form.Item>
                    </Col>
                </Row>
                    <Form.Item label="商品图片" >
                    <Upload {...propsUpload} fileList={this.state.fileList}>
                        <Button>
                        <UploadOutlined /> 点我上传
                        </Button>
                    </Upload>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" onClick={this.submit} htmlType="submit">
                            提交
                        </Button>
                    </Form.Item>
                </Form>
                        
            </div>
        )
    }
}

// Saves = createForm()(Saves)
// export default createForm()(Saves)
// export default Form.create({ name: "Saves" })(Saves);
// Saves = Form.create()(Saves)
// Saves 
// export default Saves
export default Form.create()(Saves)
