import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {Image, Container, List, Modal, Segment, Grid, Comment} from 'semantic-ui-react'
import CommentContainer from './CommentContainer'


class TeamDetail extends React.Component {

    render() {
        return  !this.props.team ? <div className="ui active transition visible dimmer">
        <div className="content"><div className="ui text loader">Loading</div></div>
      </div> : (
            <div>
                <br/>
                <br/>
                <h1>{this.props.team.name}</h1>
                <Segment>
                <Grid columns ={3} relaxed='very'>
                <Grid.Column>
                <h3>Roster</h3>
                {this.props.team.players.map(player => {
                return <List key={player.id} player={player} >
                <List.Item >
                    <Modal trigger={<List.Header as='a'>{player.position} - {player.first_name} {player.last_name}</List.Header>}>
                        <Modal.Header>{player.first_name} {player.last_name}</Modal.Header>
                        <Modal.Content>
                            <p>College: {player.college}</p>
                            <p>Years Pro: {player.yearsPro}</p>
                            <p>Date of Birth: {player.date_of_birth}</p>
                            <p>Country: {player.country} </p>
                        </Modal.Content>
                    </Modal>               
                    </List.Item>
                    </List>})}
                </Grid.Column>
                <Grid.Column>
                    <h3>Home Games</h3>
                    {this.props.team.home_games.map(game => {
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
                <Grid.Column>
                    <h3>Away Games</h3>
                    {this.props.team.visiting_games.map(game => {
                        return <List key={game.id} game={game}>
                            <List.Item>
                                <Image avatar src={game.visiting_team_logo} />
                                <List.Content>
                    <List.Header as='a'>{game.visiting_team_name} {game.visiting_team_score} | {game.home_team_score} <Link to={`/teams/${game.home_team_id}`}>{game.home_team_name}</Link> </List.Header>
                                </List.Content>
                            </List.Item>
                        </List>
                    })}
                </Grid.Column>
                </Grid>
                </Segment>
                <CommentContainer team={this.props.team}/>
            </div>
            )
        }
    }



const mapStateToProps = (store, ownProps) => {
    return {
        team: store.teams.find(
            team => {return team.id === parseInt(ownProps.match.params.id)}
        )
    }
}



export default withRouter(connect(mapStateToProps)(TeamDetail))