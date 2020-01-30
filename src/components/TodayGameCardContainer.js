import React from 'react'
import GameCard from './GameCard'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'



const TodayGameCardContainer = props => {
    var games = [].concat.apply([], props.games)
    return (
        <div>
        <h1>Today's Games</h1>
        <br/>
        <div className='ui grid fluid container'>
            {games.map(game => {
                let today = new Date()
                let todaysDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
                if (!!game.date && game.date == todaysDate)  {
                return <GameCard key={game.id} game={game}/>}
                }
            )
        }
        </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        games: state.games
    }
}

export default withRouter(connect(mapStateToProps)(TodayGameCardContainer))


// export default class AllMovies extends React.Component {
//     render() {
//         return (
//         <div className="ui grid">
            
//             {this.props.movies.map(movie => <MovieCard key ={movie.id} movie={movie} />) }
            //</div>
//         )
//     }
// }