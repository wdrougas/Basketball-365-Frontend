import React from 'react'
import TeamCard from './TeamCard'
import {connect} from 'react-redux'
import TeamDetail from './TeamDetail'
import {withRouter, Switch, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'


const TeamCardContainer = props => {
            return (
                <div>
                
                <h1>Teams</h1>
                <br/>
                <div className='ui grid fluid container'>
                    {props.teams.map(team => {
                    return <TeamCard key={team.id} team={team}/>  })}
                </div>
                </div>
            )
        }
        
const mapStateToProps = state => {
    return {
        teams: state.teams
    }
}

export default withRouter(connect(mapStateToProps)(TeamCardContainer))