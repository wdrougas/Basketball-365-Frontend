import React from 'react'
import GameCard from './GameCard'


const GameCardContainer = props => {
    return (
        <div className='ui grid'>
            {console.log(props.games)}
            {/* {props.games.map(game => <GameCard key={game.id} game={game}/>)} */}
        </div>
    )
}

export default GameCardContainer


// export default class AllMovies extends React.Component {
//     render() {
//         return (
//         <div className="ui grid">
            
//             {this.props.movies.map(movie => <MovieCard key ={movie.id} movie={movie} />) }
            //</div>
//         )
//     }
// }