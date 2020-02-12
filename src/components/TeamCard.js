import React from 'react'
import {Image, Segment, Grid} from 'semantic-ui-react'
import {Link, withRouter} from 'react-router-dom'



const TeamCard = props => {
    return (
        <div className='TeamCard'>
                <Link to={`/teams/${props.team.id}`}><Image className="TeamCardImage" src={props.team.logo} /></Link>
                {/* <h2>{props.team.name}</h2> */}
        </div>
        )
}

export default withRouter(TeamCard)


//<Link to={`/teams/${props.team.id}`}><Card.Header>{props.team.name}</Card.Header></Link>

