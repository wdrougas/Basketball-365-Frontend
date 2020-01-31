import React from 'react'
import {Card, Image, Divider} from 'semantic-ui-react'
import {Link, withRouter} from 'react-router-dom'



const TeamCard = props => {
    return (
        
        <Card>
        <Image src={props.team.logo} wrapped ui={false} />
        <Card.Content>
        <Link to={`/teams/${props.team.id}`}><Card.Header>{props.team.name}</Card.Header></Link>
        </Card.Content>
        </Card>
        
        )
}

export default withRouter(TeamCard)