import React from 'react'
import {Card, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import NewsDetail from './NewsDetail'


const NewsCard = props => {
    return (
       <Link to={`/news/${props.story.title}`}> <Card>
            <Image src={props.story.urlToImage} />
        <Card.Content>
            <Card.Header>
                {props.story.title}
            </Card.Header>
            <Card.Description>
                {props.story.description}
            </Card.Description>
        </Card.Content> 
    </Card></Link>
    )
}

// const mapStateToProps = state => {
//     return {
//         game: state.games
//     }
// }
export default (NewsCard)