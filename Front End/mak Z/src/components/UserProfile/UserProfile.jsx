import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import './UserProfile.css';
import Header from '../Header/Header';
import logo from '../../assets/picture/people.jpg';

const UserProfile = () => {
    const user = useSelector(state => state.auth);
    const navigate =useNavigate()

    return (
        // {user.isLogedin ? (
        //     <li><img src={user.profilePicture} alt="Profile" className='profa'/></li>
        // ) : (
        //     <li><NavLink to="/login">Login</NavLink></li>
        //     )}
        <>
            <Header />
            <div className='profilePage'>
                <div className='profileInfo'>
                    <img src={logo} alt='Profile Picture' />
                    <div className='profileUserInfo'>
                        <h3>Abhay Patel</h3>
                        <p style={{opacity:'.5'}}>abhayhingrajiya18@gmail.com</p>
                    </div>
                </div>
                <div className='profileTemplate'>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </>

    );
}

export default UserProfile;
