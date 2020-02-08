import React from 'react'
import TodayGameCard from './TodayGameCard'
import GameCard from './GameCard'
import NewsCard from './NewsCard'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Grid} from 'semantic-ui-react'



const TodayGameCardContainer = props => {
    debugger
    var games = props.user.team.home_games.concat(props.user.team.visiting_games)
    var sorted = games.sort((a,b) => {return Date.parse(a.date) - Date.parse(b.date)})
    const removalIndex = sorted.findIndex(game => game.arena === "")
    var playedGames = sorted.slice(0, removalIndex)
    var remainingGames = sorted.slice(removalIndex)
    var lastGame = playedGames.slice(-1)[0]
    var currentGame = remainingGames[0]
    var nextGame = remainingGames[1]
    var news = props.news.articles
    var leadStory = props.news.articles[0]
    var secondStory = props.news.articles[1]
    var thirdStory = props.news.articles[2]

    return (
        <div >
        <br/>
        <br/>
        <br/>
        <h1>Today's Headlines</h1>
        <br/>
        <div className='ui grid fluid container'>
            <Grid columns={3}>
                <Grid.Row>
                    <Grid.Column>
                        <NewsCard key={leadStory.title} story={leadStory}/>
                    </Grid.Column>
                    <Grid.Column>
                        <NewsCard key={secondStory.title} story={secondStory} />
                    </Grid.Column>
                    <Grid.Column>
                        <NewsCard key={thirdStory.title} story={thirdStory} />
                    </Grid.Column>
                </Grid.Row>
                <div>
                    <h1>{props.user.team.name}</h1>
                </div>
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
            </Grid>
        </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        games: state.games,
        user: state.currentUser,
        news: state.news
    }
}

export default withRouter(connect(mapStateToProps)(TodayGameCardContainer))