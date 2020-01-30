import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom'
import '../App.css';
import NavBar from './NavBar'
import GameCardContainer from './GameCardContainer'
import {connect} from 'react-redux'
import {fetchingGames, fetchingTeams, fetchingPlayers} from '../redux/actionCreators'

class App extends React.Component {


componentDidMount() {
  this.props.fetchingGames()
  this.props.fetchingPlayers()
  this.props.fetchingTeams()
}


  render() {
    return (
      <div className="App">
        <NavBar />
        <GameCardContainer games={this.props.games}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    games: state.games,
    players: state.players,
    teams: state.teams
  }
}

const mapDispatchToProps = dispatch => ({
    fetchingGames: () => {dispatch(fetchingGames())},
    fetchingTeams: () => {dispatch(fetchingTeams())},
    fetchingPlayers: () => {dispatch(fetchingPlayers())}
  }
)




export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
