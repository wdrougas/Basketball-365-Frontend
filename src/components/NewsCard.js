import React from 'react'
import {Card, Image, Popup} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import NewsDetail from './NewsDetail'


const NewsCard = props => {
    return (
        <Card className='News-Card'>
            <Image src={props.story.urlToImage} />
        <Card.Content>
            <Card.Header>
               <a href={props.story.url} target="_blank" >{props.story.title} </a>
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
export default (NewsCard)