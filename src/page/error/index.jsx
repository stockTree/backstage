import React, {Component} from 'react'

class Error extends Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <div className="top">
                <h2>
                    路径错误 <a href="/">指路首页</a>
                </h2>
            </div>
        )
    }
}
export default Error