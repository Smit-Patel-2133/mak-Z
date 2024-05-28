// Header.js
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'; // Import NavLink
import logo from '../../assets/picture/new White NO BG.png';
import './header.css';

const Header = () => {
    const user = useSelector(state => state.auth);
    const navigate =useNavigate()
    
    useEffect(()=>{
        const path = window.location.pathname;
        const segments = path.split('/');
        const currentPage=document.getElementsByClassName('activeHeader')[0];
        if(currentPage){
            currentPage.classList.remove('activeHeader')
        }
        const currentPageAdd=document.getElementById(segments[1]);
        if(currentPageAdd){
            currentPageAdd.classList.add('activeHeader')
        }
    },[]);

    return (

        <div className='navbar '>
            <img src={logo} alt="" className='logo' />
            <ul>
                {user.isLogedin ? (
                    <li><NavLink id='userProfile' to="/userProfile"><img src={user.profilePicture} alt="Profile" className='profa'/></NavLink></li>
                ) : (
                    <li><NavLink id='login' to="/login">Login</NavLink></li>
                    )}
                <li><NavLink id='ContactUs' to="/ContactUs">Contact Us</NavLink></li> {/* Example NavLink */}
                <li><NavLink id='AboutUs' to="/AboutUs">About Us</NavLink></li> {/* Example NavLink */}
                <li><NavLink id='templates' to="/templates">Template</NavLink></li> {/* Example NavLink */}
                <li><NavLink id='home' to="/home">Home</NavLink></li> {/* Example NavLink */}
                <li><NavLink id='admin' to={"/admin"}>DashBord</NavLink></li>
            </ul>
        </div>

    );
}

export default Header;
