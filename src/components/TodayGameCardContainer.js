import React from 'react'


import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {Grid, Segment, List, Image} from 'semantic-ui-react'
import ParticlesContainer from './ParticlesContainer'



const TodayGameCardContainer = props => {
    
    const games = props.user.team.home_games.concat(props.user.team.visiting_games)
    const sorted = games.sort((a,b) => {return Date.parse(a.date) - Date.parse(b.date)})
    const removalIndex = sorted.findIndex(game => game.arena === "")
    const playedGames = sorted.slice(0, removalIndex)
    const remainingGames = sorted.slice(removalIndex)
    const lastGame = playedGames.slice(-1)[0]
    const currentGame = remainingGames[0]
    const nextGame = remainingGames[1]
    // var news = props.news.articles
    // var leadStory = props.news.articles[0]
    // var secondStory = props.news.articles[1]
    // var thirdStory = props.news.articles[2]
    // var fourthStory = props.news.articles[3]
    // var fifthStory = props.news.articles[4]
    const topStories = props.news.articles.slice(0,13)
    // debugger
    return (
        <div >
        <ParticlesContainer className='particles'/>  
            <Grid columns={2} >
                    <Grid.Column id="HomePage-Column" width={8}>
                        <h1>Today's Headlines</h1>
                       <List>
                        {topStories.map(story => {
                            return <Segment className='HomePage-Segment'>
                                <List.Item key={story.title} id="Timeline">
                                    <List.Header  as='a' href={story.url} target="_blank" className="Headline">{story.title}</List.Header>  
                                </List.Item>
                            </Segment>
                        })}
                       </List>
                    </Grid.Column>
          
             
                    <Grid.Column id='HomePage-Column' width={8}>
                    <h1>{props.user.team.name} </h1>
                        <Segment className="HomePage-Segment">
                        <h3>Previous Game</h3>
                        <div className='flex-container' >
                            <div className='game'>
                            <Link to={`/teams/${lastGame.visiting_team_id}`}><Image src={lastGame.visiting_team_logo} size='small' /></Link>
                            <h3>{lastGame.visiting_team_name}</h3>
                            </div>
                            <div className='game' id='score' >
                            {lastGame.visiting_team_score} 
                            </div>
                            <div className='game' id='score' >
                            {lastGame.home_team_score}  
                            </div>
                            <div className='game'>
                            <Link to={`/teams/${lastGame.home_team_id}`}><Image src={lastGame.home_team_logo} size='small'/></Link>
                            <h3>{lastGame.home_team_name}</h3>
                            </div>
                        </div>
                        </Segment>
                        <Segment >               
                        <h3>Upcoming Game</h3>
                        <div className='flex-container' >
                            <div className='game'>
                            <Link to={`/teams/${currentGame.visiting_team_id}`}><Image src={currentGame.visiting_team_logo} size='small' /></Link>
                            <h3>{currentGame.visiting_team_name}</h3>
                            </div>
                            <div className='game' id='score'>
                                @
                            </div>
                            <div className='game'>
                            <Link to={`/teams/${currentGame.home_team_id}`}><Image src={currentGame.home_team_logo} size='small'/></Link>
                            <h3>{currentGame.home_team_name}</h3>
                            </div>
                        </div>
                        </Segment> 
                        <Segment >
                        <h3>Following Game</h3>
                        <div className='flex-container' >
                            <div className='game'>
                            <Link to={`/teams/${nextGame.visiting_team_id}`}><Image src={nextGame.visiting_team_logo} size='small' /></Link>
                            <h3>{nextGame.visiting_team_name}</h3>
                            </div>
                            <div className='game' id='score'>
                                @
                            </div>
                            <div className='game'>
                            <Link to={`/teams/${nextGame.home_team_id}`}><Image src={nextGame.home_team_logo} size='small'/></Link>
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