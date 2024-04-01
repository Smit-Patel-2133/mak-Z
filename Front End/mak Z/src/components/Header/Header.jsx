import React from 'react'
import './header.css'
import logo from '../../assets/picture/new White NO BG.png';
import toogle_dark from '../../assets/picture/day.png'


const Header = () => {
  return (
    <div className='navbar'>
        <img src={logo} xlt="" className='logo' />
        <ul>
            <li><img src={toogle_dark} alt="Profile" /></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/home">Contect Us</a></li>
            <li><a href="/home">About Us</a></li>
            <li><a href="/home">Template</a></li>
            <li><a href="/home">Home</a></li>
        </ul>
    </div>
  )
}

export default Header