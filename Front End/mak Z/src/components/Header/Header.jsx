import React, {useState} from 'react'
import './header.css'
import logo from '../../assets/picture/new black noBG.png';
import toogle_dark from '../../assets/picture/day.png'


const Header = () => {
    const {isLogin,useIsLogin}=useState('false')
  return (
    <div className='navbar'>
        <img src={logo} xlt="" className='logo' />
        <ul>
            <li><img src={toogle_dark} alt="Profile" /></li>
            {isLogin || <li><a href="/login">Login</a></li>}
            <li><a href="/home">Contact Us</a></li>
            <li><a href="/home">About Us</a></li>
            <li><a href="/home">Template</a></li>
            <li><a href="/home">Home</a></li>
        </ul>
    </div>
  )
}

export default Header