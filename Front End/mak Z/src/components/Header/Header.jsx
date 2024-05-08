// Header.js
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'; // Import NavLink
import logo from '../../assets/picture/new White NO BG.png';
import './header.css';

const Header = () => {
    const user = useSelector(state => state.auth);
    const navigate =useNavigate()

    return (

        <div className='navbar '>
            <img src={logo} alt="" className='logo' />
            <ul>
                {user.isLogedin ? (
                    <li><img src={user.profilePicture} alt="Profile" className='profa'/></li>
                ) : (
                    <li><NavLink to="/login">Login</NavLink></li>
                    )}
                <li><NavLink to="/ContactUs">Contact Us</NavLink></li> {/* Example NavLink */}
                <li><NavLink to="/AboutUs">About Us</NavLink></li> {/* Example NavLink */}
                <li><NavLink to="/templates">Template</NavLink></li> {/* Example NavLink */}
                <li><NavLink to="/home">Home</NavLink></li> {/* Example NavLink */}
            </ul>
        </div>

    );
}

export default Header;
