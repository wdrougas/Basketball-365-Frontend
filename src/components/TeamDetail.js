import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Image} from 'semantic-ui-react'


const TeamDetail = props => {
    console.log(props.team)
    return  !props.team ? <div class="ui active transition visible dimmer">
    <div class="content"><div class="ui text loader">Loading</div></div>
  </div> : (
        <div>
            <br/>
            <br/>
            <h1>{props.team.name}</h1>
            <Image src={props.team.logo} wrapped ui={false} />
        </div>
        )
    }



const mapStateToProps = (store, ownProps) => {
    return {
        team: store.teams.find(
            team => {return team.id === parseInt(ownProps.match.params.id)}
        )
    }
}



export default withRouter(connect(mapStateToProps)(TeamDetail))