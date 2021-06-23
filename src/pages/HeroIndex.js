import React, { Component } from 'react'

export class HeroIndex extends Component {
    render() {
        return (
            <div>
                <h1>this is my heroindex page</h1>
                {this.props.heros.map(hero => {
                    return <p key = {hero.id}>{hero.name}</p>
                })}
            </div>
        )
    }
}

export default HeroIndex
