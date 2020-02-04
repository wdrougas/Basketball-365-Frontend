import React from 'react'
import TodayGameCard from './TodayGameCard'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Card} from 'semantic-ui-react'



const TodayGameCardContainer = props => {
    var games = [].concat.apply([], props.games)
    return (
        <div>
        <br/>
        <br/>
        <br/>
        <h1>Today's Games</h1>
        <br/>
        <div className='ui grid fluid container'>
            <Card.Group itemsPerRow={4}>
                {games.map(game => {
                    let today = new Date()
                    let todaysDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()+1)
                    if (!!game.date && game.date == todaysDate)  {
                    return <TodayGameCard key={game.id} game={game}/>}
                    }
                    )
                }   
            </Card.Group>
        </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        games: state.games
    }
}

export default withRouter(connect(mapStateToProps)(TodayGameCardContainer))