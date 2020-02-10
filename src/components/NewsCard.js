import React from 'react'
import {Card, Image, Popup} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import NewsDetail from './NewsDetail'


const NewsCard = props => {
    return (
        <Card>
            <Image src={props.story.urlToImage} />
        <Popup position ='bottom center' content={props.story.description} trigger={<Card.Content>
            <Card.Header>
                {props.story.title}
            </Card.Header>
        </Card.Content> } />
    </Card>
    )
}

// const mapStateToProps = state => {
//     return {
//         game: state.games
//     }
// }
export default (NewsCard)