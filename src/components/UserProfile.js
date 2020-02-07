import React from 'react'
import {connect} from 'react-redux'
import {Grid, Header, List, Modal, Button} from 'semantic-ui-react'
import {addedFavorite, deleteFavorite} from '../redux/actionCreators'



const favoritesData = 'http://localhost:3000/favorites'
class UserProfile extends React.Component {

removeFavorite = (favorite) => {
    fetch(favoritesData + `/${favorite.id}`, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(favorite => this.props.deleteFavorite(favorite))
}

    render() {
        return (
            <div>
                <br/>
                <br/>
                <br/>
            <h1>{this.props.user.first_name} {this.props.user.last_name}</h1>
            <Grid columns={2} relaxed='very'>
                <Grid.Row>
                    <Grid.Column>
                        <Header>Profile Information</Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Header>Favorite Players</Header>
                        {this.props.user.favorites.map(favorite => {
                         return <List key={favorite.player.id} player={favorite.player} >
                         <List.Item >
                             <Modal trigger={<List.Header as='a'>{favorite.player.position} - {favorite.player.first_name} {favorite.player.last_name}</List.Header>}>
                                 <Modal.Header>
                                     <p>{favorite.player.first_name} {favorite.player.last_name}        
                                     <Button size='mini' onClick={() => this.removeFavorite(this.props.favorites.find(favorite => favorite.user_id === this.props.user.id && favorite.player_id === favorite.player.id ))}>Remove From Favorites</Button>
                                      </p>
                                     </Modal.Header>
                                 <Modal.Content>
                                     <p>College: {favorite.player.college}</p>
                                     <p>Years Pro: {favorite.player.yearsPro}</p>
                                     <p>Date of Birth: {favorite.player.date_of_birth}</p>
                                     <p>Country: {favorite.player.country} </p>
                                 </Modal.Content>
                             </Modal>               
                             </List.Item>
                             </List>   
                        })}
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Header>Team</Header>
                        <p>{this.props.user.team.name}</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        user: state.currentUser,
        favorites: state.favorites
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteFavorite: (favorite) => {
            dispatch(deleteFavorite(favorite))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)