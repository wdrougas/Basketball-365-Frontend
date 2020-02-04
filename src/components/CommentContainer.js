import React from 'react'
import {Comment, Form, Button, Header} from 'semantic-ui-react'
import CommentCard from './CommentCard'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {addedComment} from '../redux/actionCreators'

class CommentContainer extends React.Component {
    constructor(){
        super()
    }

     addComment = (e) => {
        console.log('adding comment')
        let configOptions = {
            method: "POST",
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                user_id: this.props.user.id,
                team_id: this.props.team.id,
                body: document.getElementById('comment_box').value
            })
        }
        fetch('http://localhost:3000/comments', configOptions)
        .then(res => res.json())
        .then(comment => this.props.addedComment(comment))
        .catch(error => alert(error.message))
        var form = document.getElementById("comment_form")
        form.reset()

    }

    

    render() {
      return (
          <div>
          <Comment.Group>
              <Header as='h3' dividing>
                  Comments
              </Header>
            {this.props.comments.map(comment => {
            return <CommentCard key={comment.id} comment={comment} />})}
          </Comment.Group>
          {this.props.user ? 
          <Form id="comment_form"reply>
         <Form.TextArea id='comment_box' />
          <Button content='Add Comment' labelPosition='left' icon='edit' primary onClick={this.addComment}/>
          </Form> : null }
          </div>
      )
    }

    
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.currentUser,
        comments: state.comments.filter(
            comment => {return comment.team.id ===  ownProps.team.id}
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addedComment: (comment) => {
            dispatch(addedComment(comment))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentContainer))