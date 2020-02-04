import React from 'react'
import {Link, NavLink, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import {Header, Segment, Grid} from 'semantic-ui-react'


const NavBar = (props) => {
    return (
        <Grid>
        <div className='ui blue fixed inverted menu'>
            <Grid.Column>
                <Link to='/' className='item'>
                    <Header>
                        <i className='icon basketball ball' color='black'/>
                        NBA App
                    </Header>
                </Link>
            </Grid.Column>
            <Grid.Column>
                <Link to='/standings' className='item'>
                    <Header>
                        Standings
                    </Header>
                </Link>
            </Grid.Column>
            <Grid.Column>
                <Link to='/teams' className='item'>
                    <Header>
                        Teams
                    </Header>
                </Link>
            </Grid.Column>
            <Grid.Column>
                <Link to='/games' className='item'>
                    <Header>
                        Games
                    </Header>
                </Link>
            </Grid.Column>
            {props.user ? null : 
            <Grid.Column floated='right'>
                <Link to='/signup' className='item'>
                    <Header textAlign='right'>
                        Sign Up
                    </Header>
                </Link>
            </Grid.Column>}
            {props.user ? null :
            <Grid.Column>
                 <Link to='/login' className='item'>
                    <Header textAlign='right'>
                        Login
                    </Header>
                 </Link> 
            </Grid.Column>}
            {props.user ? 
            <Grid.Column floated='right'>
                <Header textAlign='right' className='item' color='black'>
                    Welcome, {props.user.first_name}
                </Header>
            </Grid.Column> : null}
            {props.user ?
            <Grid.Column>
                <Header textAlign='right' className='item' color='black'>
                    Logout
                </Header>
            </Grid.Column>
            : null}
          </div>
        </Grid>
    )
}

const mapStateToProps = state => {
    return {
        user: state.currentUser
    }
}
    
export default connect(mapStateToProps)(NavBar)