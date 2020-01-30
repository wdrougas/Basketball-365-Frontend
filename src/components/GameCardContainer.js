import React from 'react'
import GameCard from './GameCard'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'


const GameCardContainer = props => {
    return (
        <h1>GameCardContainer</h1>
    )
}

const mapStateToProps = state => {
    
}

export default withRouter(connect(mapStateToProps)(GameCardContainer))