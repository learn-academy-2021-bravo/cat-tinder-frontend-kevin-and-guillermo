import React, { Component } from 'react'


export class HeroShow extends Component {
    render() {
        console.log(this.props.hero)
        let { hero } = this.props
        return (
            <div className="main">
                <h1>Hero: { hero.name }</h1>
                <br/>
                <img src={ hero.picture } alt="user picture"></img>
                <br/>
                <h4>Age: { hero.age }</h4>
                <br/>
                <h4>Enjoys:<h5> { hero.enjoys }</h5></h4>
                <br/>
                <h4>Superpower: <h5>{ hero.superpower }</h5></h4>
                
            </div>
        )
    }
}

export default HeroShow
