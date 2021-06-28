import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


export class HeroIndex extends Component {
    render() {
        let {heros} = this.props
        // console.log(heros)
        return (
            <div>
                <h2>Meet The Heroes</h2>
                <main className="heroIndex">
                    {heros && heros.map(hero => {
                    return(
                        <NavLink className="herolink" to = {`/heroshow/${hero.id}`} key = {hero.id}>
                            <p>{hero.name}</p>
                        </NavLink>
                    )
                    })}
                </main>
                    
         
            </div>
        )
    }
}

export default HeroIndex
