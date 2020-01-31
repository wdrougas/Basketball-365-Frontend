import React from 'react'
import {Link, NavLink, withRouter } from 'react-router-dom'


const NavBar = () => {
    return (
        <div className='ui blue fixed inverted menu'>
            <Link to='/' className='item'>
                <h2 className='ui header'>
                    <i className='icon basketball ball' color='black'/>
                    <div className='content'>NBA App</div>
                </h2>
            </Link>
            <Link to='/players' className='item'>
                <h2 className='ui header'>
                    <div className='content'>Players</div>
                </h2>
            </Link>
            <Link to='/teams' className='item'>
                <h2 className='ui header'>
                    <div className='content'>Teams</div>
                </h2>
            </Link>
            <Link to='/games' className='item'>
                <h2 className='ui header'>
                    <div className='content'>Games</div>
                </h2>
            </Link>
            <Link to='/signup' className='item'>
                <h2 className='ui right floated header'>
                    <div className='content'>Sign Up</div>
                </h2>
            </Link>
            <Link to='/login' className='item'>
                <h2 className='ui right floated header'>
                    <div className='content'>Login</div>
                </h2>
            </Link>
        </div>
    )
}
    
export default NavBar