import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom'
import '../App.css';
import NavBar from './NavBar'
import GameCardContainer from './GameCardContainer'
import TodayGameCardContainer from './TodayGameCardContainer'
import TeamDetail from './TeamDetail'
import Loginform from './Loginform'
import PlayerCardContainer from './PlayerCardContainer'
import {connect} from 'react-redux'
import {fetchingGames, fetchingTeams, fetchingPlayers} from '../redux/actionCreators'
import TeamCardContainer from './TeamCardContainer';

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
        <Switch>
          <Route exact path ='/' component={TodayGameCardContainer}/>
          {/* <Route path='/login' render={() => this.props.currentUser ? <Redirect to='/'/>: <Loginform />}/> */}
          <Route exact path='/games' component={GameCardContainer} />
          <Route path='/teams/:id' component={TeamDetail} />
          <Route path='/teams' component={TeamCardContainer} />
          <Route exact path='/players' component={PlayerCardContainer} />
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
  }
}

const mapDispatchToProps = dispatch => ({
    fetchingGames: () => {dispatch(fetchingGames())},
    fetchingTeams: () => {dispatch(fetchingTeams())},
    fetchingPlayers: () => {dispatch(fetchingPlayers())}
  }
)


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));


// render() {
    
//   return (

//   <div>
//     <HeaderComponent handleClick={this.logout} user={this.state.currentUser}/>
//     <br/> 

//     <Switch>
//     {/* <div className='ui text container'> */}
//         <Route exact path ="/login" render={() => this.state.currentUser ? <Redirect to='/' />: <LoginForm updateUser={this.updateUser}/>} />
//         <Route exact path ='/' render={() => this.state.currentUser ? <div> <Searchbar onSearch={this.onSearch} handleChange={this.handleChange}/> <FavoriteButton user={this.state.currentUser} handleClick={this.showFavorites}/> <br/><AllMovies user={this.state.currentUser} movies={this.filteredMovies(this.state.movies)} /></div> : <Redirect to="/login" /> }/>
//         <Route path='/movies/:id' render={(props) => {
//           let movieID = parseInt(props.match.params.id)
//           let foundMovie = this.state.movies.find(movie => movie.id === movieID)
//         return foundMovie ? <MovieCardDetails 
//         movieDetails={foundMovie} 
//         addFavorites ={this.addFavorites}
//         removeFromFavorites={this.removeFromFavorites}
//         />: null}} /> 
//         <Route exact path='/favorites/:id' render={() => this.state.favorites ? <div> <Searchbar onSearch={this.onSearch} handleChange={this.handleChange}/> <AllMoviesButton user={this.state.currentUser} handleClick={this.showFavorites}/> <br/> <AllMovies movies={this.filteredMovies(this.state.favorites)} /></div> : null}/>
//     </Switch>
//   </div>
//   );
// }
// }