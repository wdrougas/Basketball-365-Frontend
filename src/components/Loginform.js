import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {fetchedUser} from '../redux/actionCreators'
import {withRouter} from 'react-router-dom'

class LoginForm extends React.Component {
    
    state ={
        username: '',
        password: ''
    }

    handleChange = (e, {name, value}) => {
        this.setState({ [name]: value })
    }


    handleLoginSubmit = () => {
        console.log('loginclicked')
        fetch(`http://localhost:3000/login`, {
            method: 'POST',
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify({username: this.state.username})
        }).then(res => res.json())
        .then(user => this.props.fetchedUser(user))
    }

    render() {
        return (
<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
  <Grid.Column style={{ maxWidth: 450 }}>
    <Header as='h2' color='teal' textAlign='center'>
      {/* <Image src='/logo.png' />  */}
      Log-in to your account
    </Header>
    <Form size='large' onSubmit={this.handleLoginSubmit}>
      <Segment stacked>
        <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' name='username' onChange={this.handleChange} value={this.state.username}/>
        <Form.Input
          fluid
          icon='lock'
          iconPosition='left'
          placeholder='Password'
          name='password'
          type='password'
          onChange={this.handleChange}
          value={this.state.password}
        />

        <Button color='teal' fluid size='large'>
          Login
        </Button>
      </Segment>
    </Form>
    <Message>
      New to us? <a href='#'>Sign Up</a>
    </Message>
  </Grid.Column>
</Grid>
)
}
}

const mapDispatchToProps = dispatch => {
  return {
    fetchedUser: (user) => {
      dispatch(fetchedUser(user))
    }
  }
}


export default connect(null, mapDispatchToProps)(LoginForm)