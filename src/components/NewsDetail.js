import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Image} from 'semantic-ui-react'



const NewsDetail = props => {
    debugger
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <h1>{props.story.title}</h1>
            <Image src={props.story.urlToImage} size='large' centered/>
            <br />
            <p>{props.story.content}</p>
        </div>
    )

}


const mapStateToProps = (store, ownProps) => {
    return {
        story: store.news.articles.find(
            story => {return story.title === ownProps.match.params.story})
    }
}

export default withRouter(connect(mapStateToProps)(NewsDetail))