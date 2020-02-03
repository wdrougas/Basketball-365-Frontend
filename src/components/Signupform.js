import React from 'react'
import {Form} from 'semantic-ui-react'


const Signupform = props => {
    return (
    <div> 
        <br/>
        <br/>
        <br/>
    <Form>
    <Form.Group widths='equal'>
      <Form.Field label='First Name' placeholder='First Name' control='input' />
      <Form.Field label='Last Name' placeholder='Last Name' control='input' />
      <Form.Field label='Username' placeholder='Username' control='input' />
      <Form.Field label='Email' placeholder='Email' control='input' />
      <Form.Field label='Password' placeholder='Password' control='input' />
      <Form.Field label='Favorite Team' control='select'>
        <option value='male'>Male</option>
        <option value='female'>Female</option>
      </Form.Field>
      <Form.Field label='Create Profile' control='button'>
      Submit
    </Form.Field>
    </Form.Group>
  </Form>
</div>
    )
}

export default Signupform