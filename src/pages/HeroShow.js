import React, { Component } from 'react'
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom'




export class HeroShow extends Component {
    render() {
        // console.log(this.props.hero)
        let { hero } = this.props
        console.log(hero.picture)
        return (
            <div className="main">
                <h1>Hero: { hero.name }</h1>
                <br/>
                <img className="heroPic" src={ hero.picture } alt="user picture"></img>
                <br/>
                <h4>Age: { hero.age }</h4>
                <br/>
                <h4>Enjoys:<h5> { hero.enjoys }</h5></h4>
                <br/>
                <h4>Superpower: <h5>{ hero.superpower }</h5></h4>
                <NavLink to="/heroindex">
                    <Button onClick={ () => this.props.deleteHero(hero.id)}>
                        Delete Hero
                    </Button>
                </NavLink>
            </div>
        )
    }
}

export default HeroShow
