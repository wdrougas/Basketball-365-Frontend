import React from 'react'
import {Link, NavLink, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import {Header, Segment, Grid} from 'semantic-ui-react'
import {loggedOut} from '../redux/actionCreators'


class NavBar extends React.Component {



  render() {
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
            {this.props.user ? null : 
            <Grid.Column floated='right'>
                <Link to='/signup' className='item'>
                    <Header textAlign='right'>
                        Sign Up
                    </Header>
                </Link>
            </Grid.Column>}
            {this.props.user ? null :
            <Grid.Column>
                 <Link to='/login' className='item'>
                    <Header textAlign='right'>
                        Login
                    </Header>
                 </Link> 
            </Grid.Column>}
            {this.props.user ? 
            <Grid.Column floated='right'>
                <Link to={`/${this.props.user.id}`} className='item'>
                    <Header textAlign='right'>
                        Welcome, {this.props.user.first_name}
                    </Header>
                </Link>
            </Grid.Column> : null}
            {this.props.user ?
            <Grid.Column>
                <Header textAlign='right' className='item' color='black' onClick={this.props.loggedOut}>
                    Logout
                </Header>
            </Grid.Column>
            : null}
          </div>
        </Grid>
    )
    }
}

const mapStateToProps = state => {
    return {
        user: state.currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loggedOut: () => {
            dispatch(loggedOut())
        }
    }
}
    
export default connect(mapStateToProps, mapDispatchToProps)(NavBar)