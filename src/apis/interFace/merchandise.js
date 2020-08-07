import instance from '../fetch'

const merchandiseApi = {
    // 用户数据
    merchandiseList: (data) => {
        return instance({
            method: 'post',
            url: '/manage/product/list.do',
            data
        })
    },

    // 搜索商品信息
    merchandiseSearch: (data) => {
        return instance({
            method: 'post',
            url: '/manage/product/search.do',
            data
        })
    },

    // 产品上下架
    statueToggle: (data) => {
        return instance({
            method: 'post',
            url: '/manage/product/set_sale_status.do',
            data
        })
    },

    // 品类查询
    getCategory: (data) => {
        return instance({
            method: 'post',
            url: '/manage/category/get_category.do',
            data
        })
    },

    // 新增产品
    save: (data) => {
        return instance({
            method: 'post',
            url: '/manage/product/save.do',
            data
        })
    },

    // 产品内容查询
    detail: (data) => {
        return instance({
            method: 'post',
            url: 'product/detail.do',
            data
        })
    }
}
export default merchandiseApi