import React, { Component } from 'react'
import MidSegment from '../components/MidSegment'
import MainBar from '../components/MainBar'
import ReturnToHome from '../components/ReturnToHome'
import Services from '../components/Services'

export default class Home extends Component {
    render() {
        return (
            <div>
                <MidSegment classForImage="home">
                    <MainBar title="Welcome to Beach Resort" subtitle="Have a look at our rooms below"/>
                </MidSegment>

                <Services/>
                <h1>sadas</h1>
                <h1>sadas</h1>
                <h1>sadas</h1><h1>sadas</h1>
                

            </div>
        )
    }
}


