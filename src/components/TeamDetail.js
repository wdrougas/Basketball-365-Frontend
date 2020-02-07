import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {Image, List, Modal, Segment, Grid,Button} from 'semantic-ui-react'
import CommentContainer from './CommentContainer'
import swal from 'sweetalert'
import {addedFavorite, deleteFavorite} from '../redux/actionCreators'
// import state from 'sweetalert/typings/modules/state'


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
    debugger
    this.setState({
        isModalOpen: false
    })
}

gameModal(game) {

    return (
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
        <Modal>
            <Modal.Header>
                <Image avatar src={game.api.game[0].hTeam.logo}/>
                {game.api.game[0].hTeam.fullName}
                vs.
                {game.api.game[0].vTeam.fullName}
                <Image avatar src={game.api.game[0].vTeam.logo}/>
            </Modal.Header>

        </Modal>
    )
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
var games = this.props.team.home_games.concat(this.props.team.visiting_games)
var sorted = games.sort((a,b) => {return Date.parse(a.date) - Date.parse(b.date)})
    return  !this.props.team ? <div className="ui active transition visible dimmer">
    <div className="content"><div className="ui text loader">Loading</div></div>
  </div> : (
        <div>
            <br/>
            <br/>
            <br />
            <h1>{this.props.team.name}</h1>
            <Segment>
            <Grid columns ={2} relaxed='very'>
            <Grid.Column>
            <h3>Roster</h3>
            {this.props.team.players.map(player => {
            return <List key={player.id} player={player} >
            <List.Item >
                <Modal trigger={<List.Header as='a'>{player.position} - {player.first_name} {player.last_name}</List.Header>}>
                    <Modal.Header>
                        <p>{player.first_name} {player.last_name}
                        {this.props.user && !this.props.user.favorites.map(favorite => favorite.player_id).includes(player.id) ? <Button size='mini' onClick={() => this.createFavorite(player)}>Add To Favorites</Button> : <Button size='mini' onClick={() => this.removeFavorite(this.props.favorites.find(favorite => favorite.user_id === this.props.user.id && favorite.player_id === player.id ))}>Remove From Favorites</Button>}
                        
                         </p>
                        </Modal.Header>
                    <Modal.Content>
                        <p>College: {player.college}</p>
                        <p>Years Pro: {player.yearsPro}</p>
                        <p>Date of Birth: {player.date_of_birth}</p>
                        <p>Country: {player.country} </p>
                    </Modal.Content>
               </Modal>               
                </List.Item>
                </List>})}
                <br/>
                <br/>
                <CommentContainer team={this.props.team}/>
            </Grid.Column>
            <Grid.Column>
                <h3>Schedule</h3>
                {sorted.map(game => {
                    return <List key={game.id} game={game}>
                        <List.Item onClick={() => this.fetchGameData(game)}>
                            <List.Content>
                            <List.Header as='a'> {game.visiting_team_name} {game.visiting_team_score} | {game.home_team_score} {game.home_team_name} </List.Header>
                           </List.Content>
                        </List.Item>
                    </List>
                })}
            </Grid.Column>
            </Grid>
            {this.state.game ?  
            <Modal open={this.state.isModalOpen} onClose={this.handleClose}>
            <Modal.Header>
                <Image avatar src={this.state.game.hTeam.logo}/>
                {this.state.game.hTeam.fullName}
                vs.
                {this.state.game.vTeam.fullName}
                <Image avatar src={this.state.game.vTeam.logo}/>
            </Modal.Header>
            </Modal> : null}
            </Segment>
        </div>
        )
    }
}


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