import React from 'react'
import TeamCard from './TeamCard'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Segment} from 'semantic-ui-react'


const TeamCardContainer = props => {
            return (
                <div>
                
                <h1>Teams</h1>
                <br/>
                    <Segment.Group>
                    {props.teams.map(team => {
                    return <TeamCard key={team.id} team={team}/>  })}
                    </Segment.Group>
                </div>
            )
        }
        
const mapStateToProps = state => {
    return {
        teams: state.teams
    }
}

export default withRouter(connect(mapStateToProps)(TeamCardContainer))