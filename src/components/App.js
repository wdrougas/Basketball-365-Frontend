import React from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom'
import '../App.css';
import NavBar from './NavBar'
import GameCardContainer from './GameCardContainer'
import TodayGameCardContainer from './TodayGameCardContainer'
import TeamDetail from './TeamDetail'
import Loginform from './Loginform'
import Signupform from './Signupform'
import Standings from './Standings'
import {connect} from 'react-redux'
import {fetchingGames, fetchingTeams, fetchingPlayers, fetchingStandings, fetchingComments} from '../redux/actionCreators'
import TeamCardContainer from './TeamCardContainer';



class App extends React.Component {


componentDidMount() {
  this.props.fetchingGames()
  this.props.fetchingPlayers()
  this.props.fetchingTeams()
  this.props.fetchingStandings()
  this.props.fetchingComments()
}




render() {
  
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path ='/' render={() => this.props.user ? <TodayGameCardContainer /> : <Redirect to='/login' />}/>
          <Route path='/login' render={() => this.props.user ? <Redirect to='/'/>: <Loginform/>}/> 
          <Route exact path='/games' component={GameCardContainer} />
          <Route path='/teams/:id' component={TeamDetail} />
          <Route path='/teams' component={TeamCardContainer} />
          <Route exact path='/standings' component={Standings} />
          <Route exact path='/signup' component={Signupform} />
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
    user: state.currentUser,
    comments: state.comments,
    date: state.date
  }
}

const mapDispatchToProps = dispatch => ({
    fetchingGames: () => {dispatch(fetchingGames())},
    fetchingTeams: () => {dispatch(fetchingTeams())},
    fetchingPlayers: () => {dispatch(fetchingPlayers())},
    fetchingStandings: () => {dispatch(fetchingStandings())},
    fetchingComments: () => {dispatch(fetchingComments())}
  }
)


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
