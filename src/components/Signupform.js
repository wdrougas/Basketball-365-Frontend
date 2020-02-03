import React from 'react'
import {Form, Button} from 'semantic-ui-react'
import {connect} from 'react-redux'


class Signupform extends React.Component {
  constructor() {
    super()
  }


handleSubmit = e => {
  console.log(e)
  }

  
  render() {
    return (
    <div> 
        <br/>
        <br/>
        <br/>
    <Form onSubmit={this.handleSubmit}>
    <Form.Group widths='equal'>
      <Form.Field label='First Name' placeholder='First Name' control='input' />
      <Form.Field label='Last Name' placeholder='Last Name' control='input' />
      <Form.Field label='Username' placeholder='Username' control='input' />
      <Form.Field label='Email' placeholder='Email' control='input' />
      <Form.Field type='password' label='Password' placeholder='Password' control='input' />
      <Form.Field label='Favorite Team' control='select'>
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