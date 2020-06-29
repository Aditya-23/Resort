import React from 'react'
import {
    Card,
    CardText,
    CardTitle,
    Button
} from 'reactstrap'

export default function MainBar(props) {
    return (
        <div >
            <Card body inverse style={{ backgroundColor: 'rgba(0,0,0,0.4)', borderColor: '#333',  paddingTop: 50, paddingBottom: 50 }}><br/>
                <h1>{props.title}</h1><br/><br/>
                <h4>{props.subtitle}</h4>
                <a href="/rooms/"><Button>Rooms page</Button></a>
            </Card>
        </div>
    )
}
