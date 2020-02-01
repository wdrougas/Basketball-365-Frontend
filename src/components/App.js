import React from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom'
import '../App.css';
import NavBar from './NavBar'
import GameCardContainer from './GameCardContainer'
import TodayGameCardContainer from './TodayGameCardContainer'
import TeamDetail from './TeamDetail'
import Loginform from './Loginform'
import Standings from './Standings'
import {connect} from 'react-redux'
import {fetchingGames, fetchingTeams, fetchingPlayers, fetchingStandings} from '../redux/actionCreators'
import TeamCardContainer from './TeamCardContainer';

class App extends React.Component {


componentDidMount() {
  this.props.fetchingGames()
  this.props.fetchingPlayers()
  this.props.fetchingTeams()
  this.props.fetchingStandings()
}





  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path ='/' render={() => <Redirect to='/login' />}/>
          <Route path='/login' component={Loginform}/> 
          <Route exact path='/games' component={GameCardContainer} />
          <Route path='/teams/:id' component={TeamDetail} />
          <Route path='/teams' component={TeamCardContainer} />
          <Route exact path='/standings' component={Standings} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    games: state.games,
    players: state.players,
    teams: state.teams,
    user: state.currentUser
  }
}

const mapDispatchToProps = dispatch => ({
    fetchingGames: () => {dispatch(fetchingGames())},
    fetchingTeams: () => {dispatch(fetchingTeams())},
    fetchingPlayers: () => {dispatch(fetchingPlayers())},
    fetchingStandings: () => {dispatch(fetchingStandings())}
  }
)


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
