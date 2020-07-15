import React, {Component} from 'react'
import NavTop from '../navTop/index.jsx'
import NavSide from '../navSide/index.jsx'
class Layout extends Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <div>
                <NavTop />
                <NavSide />
                <span>{this.props.children}</span>
            </div>
        )
    }
}
export default Layout