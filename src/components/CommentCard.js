import React from 'react'
import {Comment} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteComment} from '../redux/actionCreators'

class CommentCard extends React.Component {
  constructor(){
    super()
  }

  removeComment = (commentObj) => {
    fetch(`http://localhost:3000/comments/${commentObj.id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(comment => this.props.deleteComment(comment))
    
    
  }

  render () {
    return (
        <Comment>
        <Comment.Content>
    <Comment.Author as='a'>{this.props.comment.user.username}</Comment.Author>
          <Comment.Metadata>
            <div>{this.props.comment.created_at}</div>
          </Comment.Metadata>
          <Comment.Text>{this.props.comment.body}</Comment.Text>
          <Comment.Actions>
            {this.props.user && this.props.user.id === this.props.comment.user.id ? 
            <Comment.Action onClick={() => this.removeComment(this.props.comment)}>Delete</Comment.Action> : null}
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteComment: (comment) => {
      dispatch(deleteComment(comment))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentCard))