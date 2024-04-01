import React from 'react'
import './Navbar.css'

import logo_dark from '../../assets/picture/new White NO BG.png'
import toogle_dark from '../../assets/picture/day.png'

const Navbar = ({theme,setTheme}) => {
  return (
    <div className='navbar'>
        <img src={logo_dark} xlt="" className='logo' />
        <ul>
            <li><img src={toogle_dark} alt="Profile" /></li>
            <li>Sign in</li>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Template</li>
            <li>Home</li>
        </ul>
    </div>
  )
}

export default Navbar