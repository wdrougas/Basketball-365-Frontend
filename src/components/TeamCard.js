import React from 'react'
import {Card, Image, Divider} from 'semantic-ui-react'


const TeamCard = props => {
    return (
            <Card>
            <Image.Group size='small'>
                <Image src={props.team.logo} />
                <Image src={props.team.logo} />
            </Image.Group>
            <Card.Content>
            <Card.Header></Card.Header>
            <Card.Description>
            </Card.Description>
            </Card.Content>
        </Card>
        )
}

export default TeamCard