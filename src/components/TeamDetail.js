import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

const TeamDetail = props => {
    console.log(props.team)
    return  (
            <div>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
            </div>
        )
        //!this.props.team ? null : (
        //     <div>
        //     <h1>{this.props.team.name}</h1>
        //     </div>
        //)
    }



const mapStateToProps = (store, ownProps) => {
    return {
        team: store.teams.find(
            team => {return team.id === parseInt(ownProps.match.params.id)}
        )
    }
}



export default withRouter(connect(mapStateToProps)(TeamDetail))