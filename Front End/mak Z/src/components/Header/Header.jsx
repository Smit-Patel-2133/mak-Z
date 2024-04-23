// Header.js
import React from 'react';
import { useSelector } from 'react-redux';
<<<<<<< HEAD
import { NavLink } from 'react-router-dom'; // Import NavLink
import logo from '../../assets/picture/new white cap noBG.png';
=======
import { NavLink, useNavigate } from 'react-router-dom'; // Import NavLink
import logo from '../../assets/picture/new black noBG.png';
>>>>>>> eae3486ced4ed0114cd88f675e42a4d79c4c81d5
import './header.css';

const Header = () => {
    const user = useSelector(state => state.auth);
    const navigate =useNavigate()

    return (
        <div className='bg-blue-700'>
        <div className='navbar '>
            <img src={logo} alt="" className='logo' />
            <ul>
                {user.isLogedin ? (
                    <li><img src={user.profilePicture} alt="Profile"/></li>
                ) : (
                    <li><NavLink to="/login">Login</NavLink></li>
                    )}
<<<<<<< HEAD
                <li><NavLink to="/">Contact Us</NavLink></li> {/* Example NavLink */}
                <li><NavLink to="/AboutUs">About Us</NavLink></li> {/* Example NavLink */}
=======
                <li><NavLink to="/ContactUs">Contact Us</NavLink></li> {/* Example NavLink */}
                <li><NavLink to="/">About Us</NavLink></li> {/* Example NavLink */}
>>>>>>> eae3486ced4ed0114cd88f675e42a4d79c4c81d5
                <li><NavLink to="/templates">Template</NavLink></li> {/* Example NavLink */}
                <li><NavLink to="/home">Home</NavLink></li> {/* Example NavLink */}
            </ul>
        </div>
        </div>
    );
}

export default Header;
