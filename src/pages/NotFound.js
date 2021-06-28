import React, { Component } from 'react'
import fatcap from '../assets/fatcap.jpeg'

class NotFound extends Component {
    render() {
        return (
            <div className="main">
                <h1 className="notFoundText">!!!No Heroes Here!!!</h1>
                <img src={fatcap} alt="fat captain america eating cookies" 
                className="notFoundPic"/>
            </div>
        )
    }
}

export default NotFound
