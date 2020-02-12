import React from 'react'
import {Link, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import {Menu, Dropdown} from 'semantic-ui-react'
import {loggedOut} from '../redux/actionCreators'


class NavBar extends React.Component {

fun() {
    this.props.history.push(`/${this.props.user.id}`)
}



    render() {
    return (
        <Menu>
               
            <Menu.Item onClick={() => this.props.history.push('/')}>
                        <i className='icon basketball ball' color='black'/>
                        NBA App
            </Menu.Item>
               
            <Menu.Item onClick={() => this.props.history.push('/standings')}>
                        Standings                   
            </Menu.Item>
            <Menu.Item onClick={() => this.props.history.push('/teams')}>
                        Teams
            </Menu.Item>
            <Menu.Item onClick={() => this.props.history.push("/games")}>
                        Games
            </Menu.Item>
            {this.props.user ? null : 
            <Menu.Menu position='right'>
                <Menu.Item onClick={() => this.props.history.push('/signup')}>                 
                        Sign Up
            </Menu.Item>
            <Menu.Item onClick={() => this.props.history.push('/login')}>   
                    Login
            </Menu.Item>
            </Menu.Menu>}
            {this.props.user ? 
            <Menu.Menu position='right'>
                <Dropdown id="profileDropDown" text={this.props.user.first_name}>
                    <Dropdown.Menu>
                       <Dropdown.Item text='Profile' onClick={this.fun.bind(this)}/>
                        <Dropdown.Item text='Logout' onClick={this.props.loggedOut}/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Menu> : null}
        </Menu>
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