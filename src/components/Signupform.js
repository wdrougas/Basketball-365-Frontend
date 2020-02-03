import React from 'react'
import {Form, Button} from 'semantic-ui-react'
import {connect} from 'react-redux'

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
  .then(res => res.json())
  .then(user => console.log(user))
  }

  
  render() {
    return (
    <div> 
        <br/>
        <br/>
        <br/>
    <Form onSubmit={this.handleSubmit}>
    <Form.Group widths='equal'>
      <Form.Field id='first_name' label='First Name' placeholder='First Name' control='input' />
      <Form.Field id='last_name' label='Last Name' placeholder='Last Name' control='input' />
      <Form.Field id='username' label='Username' placeholder='Username' control='input' />
      <Form.Field id='email' label='Email' placeholder='Email' control='input'  />
      <Form.Field id='password' type='password' label='Password' placeholder='Password' control='input' />
      <Form.Field id='team_id' label='Favorite Team' control='select' >
        {this.props.teams.map(team => <option key={team.id} value={`${team.id}`}>{team.name}</option>)}
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form.Group>
  </Form>
  </div>
    )
  }

}


const mapStateToProps = state => {
    return {
      teams: state.teams
    }
}
export default connect(mapStateToProps)(Signupform)