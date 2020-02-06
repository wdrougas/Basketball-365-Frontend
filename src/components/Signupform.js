import React from 'react'
import {Form, Button, Grid, Header, Segment} from 'semantic-ui-react'
import {connect} from 'react-redux'
import swal from 'sweetalert'
import {Redirect, withRouter} from 'react-router-dom'

const usersData = 'http://localhost:3000/users'
class Signupform extends React.Component {
  constructor() {
    super()
  }


handleSubmit = e => {
  console.log()
  let configOptions = {
    method: "POST",
    headers: {
      "Accept": 'application/json',
      "Content-Type": "application/json"
    }, 
    body: JSON.stringify({
      first_name: document.getElementById('first_name').value,
      last_name: document.getElementById('last_name').value, 
      username: document.getElementById('username').value,
      password_digest: document.getElementById('password').value, 
      email: document.getElementById('email').value,
      team_id: document.getElementById('team_id').value
    })

  }
  fetch(usersData, configOptions)
  .then(res =>  {
    if (res.ok) {
      swal("Done", "Profile created!", 'success')
      this.props.history.push('/login')
    } else {
      swal('Sign up failed', 'Please try again', 'error')
    }
  })
  }

  
  render() {
    return (
    <div className="Login"> 
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' >
  <Grid.Column style={{ maxWidth: 450 }}>
    <Header as='h2' color='blue' textAlign='center'>
      Sign up
    </Header>
    <Form size='large' onSubmit={this.handleSubmit}>
      <Segment stacked >
      <Form.Input fluid id='first_name' label='First Name' placeholder='First Name' control='input' required />
      <Form.Input fluid id='last_name' label='Last Name' placeholder='Last Name' control='input' required/>
      <Form.Input fluid id='username' label='Username' placeholder='Username' control='input' required/>
      <Form.Input fluid id='email' label='Email' placeholder='Email' control='input' required/>
      <Form.Input fluid id='password' type='password' label='Password' placeholder='Password' control='input' required/>
      <Form.Field id='team_id' label='Favorite Team' control='select' required>
        {this.props.teams.map(team => <option key={team.id} value={`${team.id}`}><img src={team.logo} className='ui avatar image'/>{team.name}</option>)}
      </Form.Field>
      <Button color='blue' fluid size='large' type='submit'>Submit</Button>
  </Segment>
  </Form>
  </Grid.Column>
  </Grid>
  </div>
    )
  }

}


const mapStateToProps = state => {
    return {
      teams: state.teams
    }
}
export default withRouter(connect(mapStateToProps)(Signupform))