import React from 'react'
import {Image, Segment} from 'semantic-ui-react'
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

