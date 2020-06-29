import React, { Component } from 'react'


export default class SingleRoom extends Component {
    constructor(props){
        super(props)
        
    }
    render() {
        const slug = this.props.match.params['single']
        return (
            <div>
                <p>Single room page</p>
                <p>{slug}</p>
            </div>
        )
    }
}
