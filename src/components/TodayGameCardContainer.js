import React from 'react'
import TodayGameCard from './TodayGameCard'
import GameCard from './GameCard'
import NewsCard from './NewsCard'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Grid, Segment, List, Image, Header} from 'semantic-ui-react'



const TodayGameCardContainer = props => {
    
    var games = props.user.team.home_games.concat(props.user.team.visiting_games)
    var sorted = games.sort((a,b) => {return Date.parse(a.date) - Date.parse(b.date)})
    const removalIndex = sorted.findIndex(game => game.arena === "")
    var playedGames = sorted.slice(0, removalIndex)
    var remainingGames = sorted.slice(removalIndex)
    var lastGame = playedGames.slice(-1)[0]
    var currentGame = remainingGames[0]
    var nextGame = remainingGames[1]
    // var news = props.news.articles
    // var leadStory = props.news.articles[0]
    // var secondStory = props.news.articles[1]
    // var thirdStory = props.news.articles[2]
    // var fourthStory = props.news.articles[3]
    // var fifthStory = props.news.articles[4]
    var topStories = props.news.articles.slice(0,15)
    // debugger
    return (
        <div >
        <br/>
        <br/>
        <br/>
        <br />
        
            <Grid columns={2}>
                    <Grid.Column id="HomePage-Column">
                        <br/>
                        <h1>Today's Headlines</h1>
                        
                       <List>
                        {topStories.map(story => {
                            return <Segment vertical>
                                <List.Item id="Timeline">
                                    <List.Header  as='a' href={story.url} target="_blank" id="Headline">{story.title}</List.Header>  
                                </List.Item>
                            </Segment>
                        })}
                       </List>
                       
                    </Grid.Column>
          
             
                    <Grid.Column id='HomePage-Column'>
                        <br/>
                    <h1>{props.user.team.name} </h1>
                        
                        <Segment vertical>
                        <h3>Previous Game</h3>
                        <div className='flex-container' >
                            <div className='game'>
                            <Image src={lastGame.visiting_team_logo} size='small' />
                            <h3>{lastGame.visiting_team_name}</h3>
                            </div>
                            <div className='game' id='score' >
                            {lastGame.visiting_team_score} 
                            </div>
                            <div className='game' id='score' >
                            {lastGame.home_team_score}  
                            </div>
                            <div className='game'>
                            <Image src={lastGame.home_team_logo} size='small'/>
                            <h3>{lastGame.home_team_name}</h3>
                            </div>
                        </div>
                        </Segment>
                        <Segment vertical>               
                        <h3>Upcoming Game</h3>
                        <div className='flex-container' >
                            <div className='game'>
                            <Image src={currentGame.visiting_team_logo} size='small' />
                            <h3>{currentGame.visiting_team_name}</h3>
                            </div>
                            <div className='game' id='score'>
                                @
                            </div>
                            <div className='game'>
                            <Image src={currentGame.home_team_logo} size='small'/>
                            <h3>{currentGame.home_team_name}</h3>
                            </div>
                        </div>
                        </Segment> 
                        <Segment vertical>
                        <h3>Following Game</h3>
                        <div className='flex-container' >
                            <div className='game'>
                            <Image src={nextGame.visiting_team_logo} size='small' />
                            <h3>{nextGame.visiting_team_name}</h3>
                            </div>
                            <div className='game' id='score'>
                                @
                            </div>
                            <div className='game'>
                            <Image src={nextGame.home_team_logo} size='small'/>
                            <h3>{nextGame.home_team_name}</h3>
                            </div>
                        </div>
                        </Segment>
                    </Grid.Column>
                    
                
            </Grid>
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