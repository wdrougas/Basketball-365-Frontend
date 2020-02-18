import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Image, List, Modal, Segment, Grid,Button} from 'semantic-ui-react'
import CommentContainer from './CommentContainer'
import swal from 'sweetalert'
import {addedFavorite, deleteFavorite} from '../redux/actionCreators'
import ParticlesContainer from './ParticlesContainer'
import moment from 'moment'



const favoritesData = 'http://localhost:3000/favorites'

const headers = {
    "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY
  }



class TeamDetail extends React.Component {
    constructor() {
        super()
        this.handleClose = this.handleClose.bind(this)
        this.state = {
            isModalOpen: false,
            game: null
        }
    }

fetchGameData(game) {
    return (
        fetch(`https://api-nba-v1.p.rapidapi.com/gameDetails/${game.game_id}`, {
            'method': 'GET',
            'headers' : headers
        })
        .then(res => res.json())
        .then(game => this.setState({game: game.api.game[0], isModalOpen: true}))
    )
}



handleClose() {
    this.setState({
        isModalOpen: false
    })
}


createFavorite = (player) => { 
    let playerId = player.id      
    let configOptions = {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            user_id: this.props.user.id,
            player_id: playerId
        })
    }
    fetch(favoritesData, configOptions)
    .then(res => res.json())
  .then(data => {
      if (data.message === "Player added to favorites!") {
          let newObj = JSON.parse(data.favorite)
          this.props.addedFavorite(newObj)
          swal("Done!", data.message, "success")
      } else {
          swal("Error!", data.message, 'error')
      }
  })
  .catch(error => alert(error.message))
}
   removeFavorite = (favorite) => {
    fetch(favoritesData + `/${favorite.id}`, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(favorite => this.props.deleteFavorite(favorite))
}

    

render() {
    // const sortedPlayers = this.props.team.players.sort((a,b) => {
    //     if (a.last_name < b.last_name) {return -1}
    //     if (a.last_name > b.last_name) {return 1}
    //     return 0
    // })
    // const games = this.props.team.home_games.concat(this.props.team.visiting_games)
    // const sorted = this.props.team.home_games.concat(this.props.team.visiting_games).sort((a,b) => {return Date.parse(a.date) - Date.parse(b.date)})
    return  !this.props.team ? 
    <div className="content"><div className="ui active inline centered text loader">Loading</div></div>
    : (
        <div >
           <ParticlesContainer className='particles'/>
            <h1>{this.props.team.name} <Image src={this.props.team.logo} avatar /> </h1>
            
            <Grid columns ={2} >
            <Grid.Column id="Team-Column" >
            <h3>Roster</h3>
            <Segment style={{overflow: 'auto', maxHeight: 400 }} >
            <List  >
            {this.props.team.players.sort((a,b) => {
        if (a.last_name < b.last_name) {return -1}
        if (a.last_name > b.last_name) {return 1}
        return 0
    }).map(player => {
            return <Segment vertical >
            <List.Item >
                <Modal size='mini' trigger={<List.Header as='a'>{player.position} - {player.first_name} {player.last_name}</List.Header>}>
                    <Modal.Header>
                        {`${player.first_name} ${player.last_name}  `}
                        {this.props.user && this.props.favorites.map(favorite => favorite.player_id).includes(player.id) ? <Button size='mini' icon='remove' color='red' onClick={() => this.removeFavorite(this.props.favorites.find(favorite => favorite.user_id === this.props.user.id && favorite.player_id === player.id ))}></Button>: null}
                        {this.props.user && !this.props.user.favorites.map(favorite => favorite.player_id).includes(player.id) ? <Button size='mini' icon='plus' color='green' onClick={() => this.createFavorite(player)}></Button> : null}
                         
                        </Modal.Header>
                    <Modal.Content>
                        <p>College: {player.college}</p>
                        <p>Years Pro: {player.yearsPro}</p>
                        <p>Date of Birth: {moment(player.date_of_birth).format("LL")}</p>
                        <p>Country: {player.country} </p>
                    </Modal.Content>
               </Modal>               
                </List.Item>
                </Segment>
                })}
                </List>
                <br/>
                <br/>
                </Segment>
                <Segment>
                <CommentContainer team={this.props.team}/>
                </Segment>
            </Grid.Column>
            <Grid.Column id="Team-Column" >
                <h3>Schedule</h3>
            <Segment style={{overflow: 'auto', maxHeight: 800 }} >
                <List >
                {this.props.team.home_games.concat(this.props.team.visiting_games).sort((a,b) => {return Date.parse(a.date) - Date.parse(b.date)}).map(game => {
                       return <Segment vertical >
                       <List.Item onClick={() => this.fetchGameData(game)}>
                            <List.Content>
                            <List.Header as='a'> {game.visiting_team_name} {game.visiting_team_score} | {game.home_team_score} {game.home_team_name} </List.Header>
                           </List.Content>
                        </List.Item>
                        </Segment>
                })}
                </List>
                </Segment>
            </Grid.Column>
            </Grid>
            {this.state.game ?  
            <Modal open={this.state.isModalOpen} onClose={this.handleClose} size='small'>
            <Modal.Header >
                <Image avatar src={this.state.game.vTeam.logo}/>  {this.state.game.vTeam.fullName}    {this.state.game.vTeam.score ?  this.state.game.vTeam.score.points: null}   |   {this.state.game.hTeam.score ?  this.state.game.hTeam.score.points : null}      {this.state.game.hTeam.fullName}  <Image avatar src={this.state.game.hTeam.logo}/>
            </Modal.Header>
            <Modal.Content>
                
                {this.state.game.hTeam.leaders[0] ? 
                <Grid columns={2} widths='equal' relaxed ='very'>
                
                    <Grid.Column>
                        <Segment>
                            <p>Points: {this.state.game.vTeam.leaders[0].name} {this.state.game.vTeam.leaders[0].points} points</p>
                            <p>Rebounds: {this.state.game.vTeam.leaders[1].name} {this.state.game.vTeam.leaders[1].rebounds} rebounds</p>
                            <p>Assists: {this.state.game.vTeam.leaders[2].name} {this.state.game.vTeam.leaders[2].assists} assists</p>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>

                            <p>Points: {this.state.game.hTeam.leaders[0].name} {this.state.game.hTeam.leaders[0].points} points</p>
                            <p>Rebounds: {this.state.game.hTeam.leaders[1].name} {this.state.game.hTeam.leaders[1].rebounds} rebounds</p>
                            <p>Assists: {this.state.game.hTeam.leaders[2].name} {this.state.game.hTeam.leaders[2].assists} assists</p>
                        </Segment>
                    </Grid.Column>
                </Grid>
                 : null}
            </Modal.Content>
            </Modal> : null}
        </div>
        )
    }
}

      //game.api.game[0].vTeam.fullName visiting team name
        //game.api.game[0].hTeam.fullName home team name
        //game.api.game[0].vTeam.score.points visiting team score
        //game.api.game[0].hTeam.score.points home team score
        //game.api.game[0].vTeam.leaders[0].points visiting team leading scorer total points
        //game.api.game[0].vTeam.leaders[0].name visiting team leading scorer name
        //game.api.game[0].vTeam.leaders[1].rebounds visiting team leading rebounder total rebounds
        //game.api.game[0].vTeam.leaders[1].name visiting team leading rebounder name 
        //game.api.game[0].vTeam.leaders[2].assists visiting team leading assists total assists
        //game.api.game[0].vTeam.leaders[2].name visiting team leading assists name 
        //game.api.game[0].hTeam.leaders[0].points home team leading scorer total points
        //game.api.game[0].hTeam.leaders[0].name home team leading scorer name
        //game.api.game[0].hTeam.leaders[1].rebounds home team leading rebounder total rebounds
        //game.api.game[0].hTeam.leaders[1].name home team leading rebounder name 
        //game.api.game[0].hTeam.leaders[2].assists home team leading assists total assists
        //game.api.game[0].hTeam.leaders[2].name home team leading assists name 


const mapDispatchToProps = dispatch => {
    return {
        addedFavorite: (favorite) => {
            dispatch(addedFavorite(favorite))
        },
        deleteFavorite: (favorite) => {
            dispatch(deleteFavorite(favorite))
        }
    }
}

const mapStateToProps = (store, ownProps) => {
    return {
        team: store.teams.find(
            team => {return team.id === parseInt(ownProps.match.params.id)}
        ),
        user: store.currentUser,
        favorites: store.favorites
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TeamDetail))