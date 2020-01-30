import React from 'react'
import {Link, NavLink, withRouter } from 'react-router-dom'


const NavBar = () => {
    return (
        <div className='ui blue inverted menu'>
            <Link to='/' className='item'>
                <h2 className='ui header'>
                    <i className='icon basketball ball' color='black'/>
                    <div className='content'>NBA App</div>
                </h2>
            </Link>
        </div>
    )
}
    
export default NavBar