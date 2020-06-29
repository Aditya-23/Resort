import React, { Component } from 'react'
import homeImg from '../images/defaultBcg.jpeg'
import MainBar from './MainBar'
import ReturnToHome from './ReturnToHome'
import MainImage from './MainImage'

export default class MidSegment extends Component {
    render() {
        return (
            <div>
                <section className={this.props.classForImage} >
                    {this.props.children}
                </section>   
            </div>
        )
    }
}
