import React from 'react'
import TeamCard from './TeamCard'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Segment, Grid} from 'semantic-ui-react'


const TeamCardContainer = props => {
            return (
                <div>
                <br />
                <br />
                <br/>
                <h1>Teams</h1>
                <br/>
                    <div className= 'ui grid fluid container'>
                    <Grid columns={6}>
                    {props.teams.map(team => {
                    return <Grid.Column><TeamCard key={team.id} team={team}/> </Grid.Column> })}
                    </Grid>
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