import React from 'react'
import {Link, NavLink, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import {Header, Segment, Grid, Dropdown} from 'semantic-ui-react'
import {loggedOut} from '../redux/actionCreators'


class NavBar extends React.Component {


fun() {
    this.props.history.push(`/${this.props.user.id}`)
}

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
                <Dropdown text={this.props.user.first_name}>
                    <Dropdown.Menu>
                       <Dropdown.Item text='Profile' onClick={this.fun.bind(this)}/>
                        <Dropdown.Item text='Logout' onClick={this.props.loggedOut}/>
                    </Dropdown.Menu>
                </Dropdown>
            </Grid.Column> : null}
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
    
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))