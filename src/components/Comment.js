import React from 'react'
import {Comment} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'

const Comment = props => {
  debugger
    return (
        <Comment>
        <Comment.Content>
    <Comment.Author as='a'>{props.comment.user.first_name} {props.comment.user.last_name}</Comment.Author>
          <Comment.Metadata>
            <div>{props.comment.created_at}</div>
          </Comment.Metadata>
          <Comment.Text>{props.comment.body}</Comment.Text>
          <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    )
}

export default withRouter(Comment)