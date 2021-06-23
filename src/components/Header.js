import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export class Header extends Component {
    render() {
        return (
            <div>
                <h1>this is my header</h1>
                <NavLink  to = '/heroindex'>All your Heroes</NavLink>
            </div>
        )
    }
}

export default Header
