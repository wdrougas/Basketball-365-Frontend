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
                        <div className='content'>NBA App</div>
                    </Header>
                </Link>
            </Grid.Column>
            <Grid.Column>
                <Link to='/standings' className='item'>
                    <Header>
                        <div className='content'>Standings</div>
                    </Header>
                </Link>
            </Grid.Column>
            <Grid.Column>
                <Link to='/teams' className='item'>
                    <Header>
                        <div className='content'>Teams</div>
                    </Header>
                </Link>
            </Grid.Column>
            <Grid.Column>
                <Link to='/games' className='item'>
                    <Header>
                        <div className='content'>Games</div>
                    </Header>
                </Link>
            </Grid.Column>
            {props.user ? null : 
            <Grid.Column floated='right'>
                <Link to='/signup' className='item'>
                    <Header textAlign='right'>
                        <div className='content'>Sign Up</div>
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
                <Header textAlign='right'>
                    <div className='content'>Welcome, {props.user.first_name}</div>
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