import React, { Component } from 'react'
import MidSegment from '../components/MidSegment'
import MainBar from '../components/MainBar'

export default class Error extends Component {
    render() {
        return (
            <div>
                <MidSegment classForImage="home">
                    <MainBar title="404 page not found" subtitle="Return to Home"/>
                </MidSegment>
            </div>
        )
    }
}
