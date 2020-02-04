import React from 'react'
import {Card, Image} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {withRoute, Link, NavLink} from 'react-router-dom'


const TodayGameCard = props => {
    console.log(props.game)
    return (
        <Card>
        <Image.Group size='small'>
            <Image src={props.game.visiting_team_logo} />
            <Image src={props.game.home_team_logo} />
        </Image.Group>
        <Card.Content>
        <Card.Header>
            <Link to={`/teams/${props.game.visiting_team_id}`} activeClassName='selected'>{props.game.visiting_team_name}</Link> vs. <Link to={`/teams/${props.game.home_team_id}`} > {props.game.home_team_name} </Link>
            </Card.Header>
        </Card.Content> 
    </Card>
    )
}

// const mapStateToProps = state => {
//     return {
//         game: state.games
//     }
// }
export default (TodayGameCard)