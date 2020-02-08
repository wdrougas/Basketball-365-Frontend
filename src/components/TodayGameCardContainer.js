import React from 'react'
import TodayGameCard from './TodayGameCard'
import GameCard from './GameCard'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Grid} from 'semantic-ui-react'



const TodayGameCardContainer = props => {
    var games = props.user.team.home_games.concat(props.user.team.visiting_games)
    var sorted = games.sort((a,b) => {return Date.parse(a.date) - Date.parse(b.date)})
    const removalIndex = sorted.findIndex(game => game.arena === "")
    var playedGames = sorted.slice(0, removalIndex)
    var remainingGames = sorted.slice(removalIndex)
    var lastGame = playedGames.slice(-1)[0]
    var currentGame = remainingGames[0]
    var nextGame = remainingGames[1]


headlines = () => {
fetch('https://newsapi.org/v2/everything?' +
    'q=NBA&' +
    'from=2020-02-08&' +
    'sortBy=popularity&' +
    'apiKey=process.env.REACT_APP_NEWS_API_KEY').then(res => res.json())
    .then(data => console.log(data))
}
    return (
        <div >
        <br/>
        <br/>
        <br/>
        <h1>{props.user.team.name}</h1>
        <br/>
        <div className='ui grid fluid container'>
            <Grid columns={3}>
                <Grid.Row>
                    <Grid.Column>
                        
                    </Grid.Column>
                    <Grid.Column>

                    </Grid.Column>
                    <Grid.Column>

                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <h3>Previous Game</h3>
                        <GameCard key={lastGame.id} game={lastGame}/>
                    </Grid.Column>
                    <Grid.Column>
                        <h3>Upcoming Game</h3>
                        <TodayGameCard key={currentGame.id} game={currentGame}/>
                    </Grid.Column>
                    <Grid.Column>
                        <h3>Following Game</h3>
                        <TodayGameCard key={nextGame.id} game={nextGame}/>
                    </Grid.Column>
                </Grid.Row>
                    <div>
                        <h1>Watchlist</h1>
                    </div>
            </Grid>
        </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        games: state.games,
        user: state.currentUser
    }
}

export default withRouter(connect(mapStateToProps)(TodayGameCardContainer))