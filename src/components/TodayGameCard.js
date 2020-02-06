import React from 'react'
import {Card, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


const TodayGameCard = props => {
    return (
        <Card>
        <Image.Group itemsPerRow={2}>
            <Image src={props.game.visiting_team_logo} size='small'/>
            <Image src={props.game.home_team_logo} size='small' />
        </Image.Group>
        <Card.Content>
        <Card.Header>
            <Link to={`/teams/${props.game.visiting_team_id}`} className='selected'>{props.game.visiting_team_name}</Link> vs. <Link to={`/teams/${props.game.home_team_id}`} > {props.game.home_team_name} </Link>
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