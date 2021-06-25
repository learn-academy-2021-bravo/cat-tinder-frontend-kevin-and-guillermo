import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// import heros from '../mockHero'

export class HeroIndex extends Component {
    render() {
        let {heros} = this.props
        console.log(heros)
        return (
            <div>
                <h1>this is my heroindex page</h1>
                    {heros && heros.map(hero => {
                    return(
                        <NavLink to = {`/heroshow/${hero.id}`} key = {hero.id}>
                            <p>{hero.name}</p>
                        </NavLink>
                    )
                    })}
                    
         
            </div>
        )
    }
}

export default HeroIndex
