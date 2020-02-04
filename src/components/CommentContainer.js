import React from 'react'
import {Comment, Form, Button} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

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
        .catch(error => alert(error.message))
        var form = document.getElementById("comment_form")
        form.reset()

    }

    

    render() {
      return (
          <div>
          <h4>Comments</h4>
          <Comment.Group>
            {this.props.comments.map(comment => {
            return <Comment key={comment.id} comment={comment} />})}
          </Comment.Group>
          <Form id="comment_form"reply>
         <Form.TextArea id='comment_box' />
          {this.props.user ? <Button content='Add Comment' labelPosition='left' icon='edit' primary onClick={this.addComment}/> : null }
          </Form>
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

export default withRouter(connect(mapStateToProps)(CommentContainer))