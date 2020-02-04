import React from 'react'
import {Comment, Form, Button} from 'semantic-ui-react'
import {connect} from 'react-redux'

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
        .then(comment => <Comment comment={comment}/>)
        var form = document.getElementById("comment_form")
        form.reset()
        
    }

    

    render() {
      return (
          <div>
          <p>Comment Container</p>
          <Form id="comment_form"reply>
         <Form.TextArea id='comment_box' />
          {this.props.user ? <Button content='Add Comment' labelPosition='left' icon='edit' primary onClick={this.addComment}/> : null }
          </Form>
          </div>
      )
    }

    
}

const mapStateToProps = state => {
    return {
        user: state.currentUser
    }
}

export default connect(mapStateToProps)(CommentContainer)