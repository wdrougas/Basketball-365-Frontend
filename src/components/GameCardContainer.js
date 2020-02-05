import React from 'react'
import GameCard from './GameCard'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Segment} from 'semantic-ui-react'
import DateFnsUtils from '@date-io/date-fns'
import {DatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers'
import {selectedDate} from '../redux/actionCreators'

class GameCardContainer extends React.Component {


    
render() {
 let games = [].concat.apply([], this.props.games)
    return (
        <div>
            <br/>
            <br/>
            <br />
            <h1>2019-2020 Schedule</h1>
            <br/>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker value={this.props.date} onChange={() => this.props.selectedDate()}/>
            </MuiPickersUtilsProvider>
            <br />
            <div className='ui grid fluid container'>
            {games.map(game => {
                 {return <GameCard key={game.id} game={game}/>}
                }
              )
            }       
            </div>
        </div>
    )
    }
}

const mapStateToProps = state => {
    return {
        games: state.games,
        date: state.date
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectedDate: (date) => {
            dispatch(selectedDate(date))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GameCardContainer))