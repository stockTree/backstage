import React, {Component} from 'react'
class PreTitle extends Component{
    constructor(props) {
        super(props)
    }
    render (props) {
        let style={marginBottom:'26px'} 
        return (
            <div>
                <h2 style={style}>{this.props.title}</h2>
                {this.props.children}
            </div>
        )
    }
}
export default PreTitle