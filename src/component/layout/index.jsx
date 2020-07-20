import React, {Component} from 'react'
import NavTop from '../navTop/index.jsx'
import NavSide from '../navSide/index.jsx'
import './index.scss'
class Layout extends Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <div className="layout">
                <NavTop />
                <NavSide />
                <div className="content">{this.props.children}</div>
            </div>
        )
    }
}
export default Layout