import React, { Component } from 'react'


export class HeroShow extends Component {
    render() {
        console.log(this.props.hero)
        let { hero } = this.props
        return (
            <div>
                <h1>this is my heroshow page</h1>
                <p>{ hero.name }</p>
                <p>{ hero.age }</p>
                <p>{ hero.enjoys }</p>
                <p>{ hero.superpower }</p>
            </div>
        )
    }
}

export default HeroShow
