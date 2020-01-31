import React from 'react'
import {Card, Image, Divider, List, Segment} from 'semantic-ui-react'
import {Link, withRouter} from 'react-router-dom'



const TeamCard = props => {
    return (
    <div className='row'>
        <Segment>
        <Image avatar src={props.team.logo} />
        <Link to={`/teams/${props.team.id}`}><h2>{props.team.name}</h2></Link>
        </Segment>
    </div> 
        )
}

export default withRouter(TeamCard)


//<Link to={`/teams/${props.team.id}`}><Card.Header>{props.team.name}</Card.Header></Link>

{/* <List.Item>
      <Image avatar src={props.team.logo} />
      <List.Content>
      <Link to={`/teams/${props.team.id}`}><List.Header>{props.team.name}</List.Header></Link>
      </List.Content>
    </List.Item> */}