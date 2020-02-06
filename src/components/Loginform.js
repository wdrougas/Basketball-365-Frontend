import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {fetchedUser} from '../redux/actionCreators'
import {withRouter, Link} from 'react-router-dom'
import swal from 'sweetalert'

class LoginForm extends React.Component {
    
    state ={
        username: '',
        password: ''
    }

    handleChange = (e, {name, value}) => {
        this.setState({ [name]: value })
    }


    handleLoginSubmit = () => {
        fetch(`http://localhost:3000/login`, {
            method: 'POST',
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify({username: document.getElementById('username_field').value})
        }).then(res => res.json())
          .then(data => {
            if (data.error !== "Invalid username. Please try again!") {
            this.props.fetchedUser(data)
            } else {
              swal("Error", data.error, 'error')
            }
        })}

    render() {
        return (
<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' className='Login'>
  <Grid.Column style={{ maxWidth: 450 }}>
    <Header as='h2' color='blue' textAlign='center'>
      Log-in to your account
    </Header>
    <Form size='large' onSubmit={this.handleLoginSubmit}>
      <Segment stacked>
        <Form.Input id="username_field" fluid icon='user' iconPosition='left' placeholder='Username' name='username' onChange={this.handleChange} value={this.state.username} required/>
        <Form.Input
          fluid
          icon='lock'
          iconPosition='left'
          placeholder='Password'
          name='password'
          type='password'
          onChange={this.handleChange}
          value={this.state.password}
          required
        />

        <Button color='blue' fluid size='large'>
          Login
        </Button>
      </Segment>
    </Form>
    <Message>
      New to us? <Link to='/signup'>Sign up</Link>
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


export default withRouter(connect(null, mapDispatchToProps)(LoginForm))