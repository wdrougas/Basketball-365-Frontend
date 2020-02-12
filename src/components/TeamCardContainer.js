import React from 'react'
import TeamCard from './TeamCard'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Grid} from 'semantic-ui-react'
import ParticlesContainer from './ParticlesContainer'


const TeamCardContainer = props => {
            return (
                <div>
                <ParticlesContainer />
                <br />
                    <div className= 'ui grid fluid container'>
                    <Grid columns={6}>
                    {props.teams.map(team => {
                    return <Grid.Column className="TeamCard-Column"><TeamCard key={team.id} team={team}/> </Grid.Column> })}
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