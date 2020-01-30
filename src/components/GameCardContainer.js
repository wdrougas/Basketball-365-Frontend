import React from 'react'
import GameCard from './GameCard'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'


const GameCardContainer = props => {
    var games = [].concat.apply([], props.games)
    return (
        <div className='Game-Container'>
            {games.map(game => {
                let today = new Date()
                let todaysDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
                if (game.date == todaysDate) {
                return <GameCard key={game.id} game={game}/>}
                }
            )
        }
        </div>
        
    )
}

const mapStateToProps = state => {
    return {
        games: state.games
    }
}

export default withRouter(connect(mapStateToProps)(GameCardContainer))


// export default class AllMovies extends React.Component {
//     render() {
//         return (
//         <div className="ui grid">
            
//             {this.props.movies.map(movie => <MovieCard key ={movie.id} movie={movie} />) }
            //</div>
//         )
//     }
// }