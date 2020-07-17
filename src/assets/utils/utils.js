class UtilsFn {
    // 保存到localstorage
    setStorage (name, data) {
        if (data && name) {
            console.log(typeof data === 'object')
            if (typeof data === 'object') {
                localStorage.setItem(name, JSON.stringify(data))
            }
        } else {
            return ''
        }
    }
    // 取localstorage的值
    getStorage (name) {
        let getVal= ''
        if (name) {
            getVal = JSON.parse(localStorage.getItem(name))
            console.log(getVal, 33)
        }
        return getVal
    }
    // 删除localstorage的值
    delStorage (name) {
        if (name) {
            localStorage.removeItem(name)
        }
    }
}
export default UtilsFn