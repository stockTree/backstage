import React, {Component} from 'react'
class PreTitle extends Component{
    constructor(props) {
        super(props)
    }
    render (props) {
        return (
            <div>
                <h2>{this.props.title}</h2>
                {this.props.children}
            </div>
        )
    }
}
export default PreTitle