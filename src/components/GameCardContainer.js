import React from 'react'
import GameCard from './GameCard'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Segment} from 'semantic-ui-react'


const GameCardContainer = props => {
    var games = [].concat.apply([], props.games)
    console.log(games)
    return (
        <div>
            <br/>
            <br/>
            <h1>2019-2020 Schedule</h1>
            <br/>
            <div className='ui grid fluid container'>
            {games.map(game => {
                 {return <GameCard key={game.id} game={game}/>}
                }
              )
            }       
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        games: state.games
    }
}

export default withRouter(connect(mapStateToProps)(GameCardContainer))