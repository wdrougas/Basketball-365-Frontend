import React from 'react'
import {connect} from 'react-redux'
import {Grid, Header, List, Modal, Button, Segment, Form} from 'semantic-ui-react'
import {addedFavorite, deleteFavorite} from '../redux/actionCreators'
import {Link} from 'react-router-dom'
import {editProfile} from '../redux/actionCreators'



const favoritesData = 'http://localhost:3000/favorites'
const usersData = 'http://localhost:3000/users'

class UserProfile extends React.Component {
    constructor(props){
        super()
        this.state = {
            disabled: true,
            first_name: props.user.first_name,
            last_name: props.user.last_name,
            email: props.user.email,
            username: props.user.username,
            team: props.user.team_id
        }
    }

handleClick() {
    this.setState({disabled: !this.state.disabled})
}

onTodoChange(value) {
    this.setState({
        first_name: document.getElementById('first_name').value,
        last_name: document.getElementById('last_name').value,
        email: document.getElementById("email").value,
        username: document.getElementById("username").value,
        team: parseInt(document.getElementById("team_id").value)
    })
}

removeFavorite = (favorite) => {
    fetch(favoritesData + `/${favorite.id}`, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(favorite => this.props.deleteFavorite(favorite))
}

handleSubmit = (event) => {
    event.preventDefault();
    this.editProfile(this.props.user)
}

editProfile = (user) => {  
    let configOptions = {
        method: "PATCH",
        headers: {
            "Accept" : 'application/json',
            "Content-Type": "application/json"},
        body: JSON.stringify({
           first_name: this.state.first_name,
           last_name: this.state.last_name,
           username: this.state.username,
           email: this.state.email,
           team_id: this.state.team
        })
    }
    fetch(usersData + `/${user.id}`, configOptions)
    .then(res => res.json())
    .then(user => this.props.editProfile(user))
    .catch(error => console.log(error.message))
}

    render() {
        return (
            <div>
                <br/>
                <br/>
                <br/>
            <h1>{this.props.user.first_name} {this.props.user.last_name}</h1>
            <Grid centered columns={2} widths='equal'>
                    <Grid.Column id="UserProfile-Column">
                    <Segment id="UserProfile-Segment">
                        <Header>Profile Information</Header>
                        <Form>
                        <Form.Input id='first_name' label='First Name' value={this.state.first_name} onChange={e => this.onTodoChange(e.target.value)} disabled={this.state.disabled}></Form.Input>
                        <Form.Input id='last_name' label='Last Name' value={this.state.last_name} onChange={e => this.onTodoChange(e.target.value)} disabled={this.state.disabled}></Form.Input>
                        <Form.Input id='username' label='Username' value={this.state.username} onChange={e => this.onTodoChange(e.target.value)} disabled={this.state.disabled}></Form.Input>
                        <Form.Input id='email' label='Email' value={this.state.email} onChange={e => this.onTodoChange(e.target.value)} disabled={this.state.disabled}></Form.Input>
                        <Form.Field id='team_id' label='Favorite Team' control='select' onChange={e => this.onTodoChange(e.target.value)} value={this.state.team} disabled={this.state.disabled}>
                        {this.props.teams.map(team => <option key={team.id} value={team.id} >{team.name}</option>)}
                        </Form.Field>
                        {this.state.disabled ? <Button onClick={this.handleClick.bind(this)}>Edit Profile</Button> : null}
                        {this.state.disabled ? null: <Button onClick={(e) => this.handleSubmit(e)}>Submit Changes</Button>}
                        </Form>
                    </Segment>
                    </Grid.Column>
                    <Grid.Column id="UserProfile-Column">
                    <Segment id="UserProfile-Segment">
                        <Header>Favorite Players</Header>
                        {this.props.user.favorites.map(favorite => {
                         return <List key={favorite.player.id} player={favorite.player} >
                         <List.Item >
                             <Modal size='mini' trigger={<List.Header as='a'>{favorite.player.position} - {favorite.player.first_name} {favorite.player.last_name}</List.Header>}>
                                 <Modal.Header>
                                     {`${favorite.player.first_name} ${favorite.player.last_name}  `}        
                                     <Button size='mini' icon='remove' color='red' onClick={() => this.removeFavorite(this.props.favorites.find(favorite => favorite.user_id === this.props.user.id && favorite.player_id === favorite.player.id ))}></Button>
                                      
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
                            <Header>Team</Header>
                        <Link to={`/teams/${this.props.user.team.id}`}><h2>{this.props.user.team.name}</h2></Link>
                    </Segment>          
                    </Grid.Column> 
            </Grid>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        user: state.currentUser,
        favorites: state.favorites,
        teams: state.teams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteFavorite: (favorite) => {
            dispatch(deleteFavorite(favorite))
        },
        editProfile: (user) => {
            dispatch(editProfile(user))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)