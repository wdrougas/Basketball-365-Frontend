import React from 'react'
import {Card, Image, Row} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


const GameCard = props => {
    return (
        <Card>
        <Image.Group itemsPerRow={2}>
            <Image src={props.game.visiting_team_logo} size='small' />
            <Image src={props.game.home_team_logo} size='small' />
        </Image.Group>
        <Card.Content>
        <Card.Header>{props.game.visiting_team_name} vs. {props.game.home_team_name}</Card.Header>
        <Card.Description>
            {props.game.arena} - {props.game.city}
            <br/>
            <br/>
            <Link to={`/teams/${props.game.visiting_team_id}`}>{props.game.visiting_team_name} - {props.game.visiting_team_score}</Link>
            <br/>
            <Link to={`teams/${props.game.home_team_id}`}>{props.game.home_team_name} - {props.game.home_team_score}</Link>
        </Card.Description>
        </Card.Content> 
    </Card>
    )
}

// const mapStateToProps = state => {
//     return {
//         game: state.games
//     }
// }
export default (GameCard)

//<Link to={`/teams/${game.visiting_team_id}`}>{game.visiting_team_name}</Link>