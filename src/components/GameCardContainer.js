import React from 'react'
import GameCard from './GameCard'
import {connect} from 'react-redux'
import DateFnsUtils from '@date-io/date-fns'
import {DatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers'

class GameCardContainer extends React.Component {
    constructor(){
        super() 
        let today = new Date()
        let todaysDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate())
        this.state = {
            selectedDate: todaysDate
        }
    }

changeDate = date => {
    let selectedDate = date
    let x = selectedDate.toISOString().substring(0,10)
    let y = x.replace(/-0+/g, '-')
    this.setState({selectedDate: y})
}

    
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
                <DatePicker value = {this.state.selectedDate} onChange={(date) => this.changeDate(date)}/>
            </MuiPickersUtilsProvider>
            <br />
            <br />
            <div className='ui grid fluid container'>
            {games.map(game => {
                if (this.state.selectedDate === game.date) {
                  return <GameCard key={game.id} game={game}/>
                }
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
        games: state.games
    }
}


export default connect(mapStateToProps)(GameCardContainer)