// Header.js
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'; // Import NavLink
import logo from '../../assets/picture/new black noBG.png';
import './header.css';

const Header = () => {
    const user = useSelector(state => state.auth);

    return (
        <div className='navbar'>
            <img src={logo} alt="" className='logo' />
            <ul>
                {user.isLogedin ? (
                    <li><img src={user.profilePicture} alt="Profile"/></li>
                ) : (
                    <li><NavLink to="/login">Login</NavLink></li>
                    )}
                <li><NavLink to="/">Contact Us</NavLink></li> {/* Example NavLink */}
                <li><NavLink to="/">About Us</NavLink></li> {/* Example NavLink */}
                <li><NavLink to="/templates">Template</NavLink></li> {/* Example NavLink */}
                <li><NavLink to="/home">Home</NavLink></li> {/* Example NavLink */}
            </ul>
        </div>
    );
}

export default Header;
