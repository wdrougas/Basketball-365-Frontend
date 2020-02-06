import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {Image, List, Modal, Segment, Grid,Button} from 'semantic-ui-react'
import CommentContainer from './CommentContainer'
import swal from 'sweetalert'
import {addedFavorite, deleteFavorite} from '../redux/actionCreators'
// import state from 'sweetalert/typings/modules/state'


const favoritesData = 'http://localhost:3000/favorites'
class TeamDetail extends React.Component {


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
    console.log(games)
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
                            <List.Item>
                                <Image avatar src={game.visiting_team_logo} />
                                <List.Content>
                    <List.Header as='a'><Link to={`/teams/${game.visiting_team_id}`}>{game.visiting_team_name}</Link> {game.visiting_team_score} | {game.home_team_score} {game.home_team_name} </List.Header>
                                </List.Content>
                            </List.Item>
                        </List>
                    })}
                </Grid.Column>
                </Grid>
                {/* <Grid centered columns={2}>
                    <Grid.Column>
                        <CommentContainer team={this.props.team}/>
                    </Grid.Column>
                </Grid> */}
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