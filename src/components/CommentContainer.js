import React from 'react'
import {Comment, Form, Button} from 'semantic-ui-react'
import {connect} from 'react-redux'

class CommentContainer extends React.Component {
    constructor(){
        super()
    }

     addComment = (e) => {
        console.log('adding comment')
    }

    render() {
      return (
          <div>
          <p>Comment Container</p>
          <Form reply>
         <Form.TextArea />
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