import React from 'react'
import GameCard from './GameCard'
import {connect} from 'react-redux'
import DateFnsUtils from '@date-io/date-fns'
import {DatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers'
import { Grid, Header} from 'semantic-ui-react'

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

 let todaysGames = games.filter(game => game.date === this.state.selectedDate)
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
            <Grid columns={4}>
                    {todaysGames.length !== 0 ? todaysGames.map(game => {
                        return <Grid.Column><GameCard key={game.id} game={game}/></Grid.Column> 
                        } 
                    ) : <Header>No games scheduled</Header>
                    }       
                </Grid>
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