import React, { useState } from "react";
import Login_girl from '../../assets/Auth Pictures/draw2.svg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import profile from '../../assets/Profile picture/1.png'
import {currentUser} from "../../features/authentication/auth.js";
import {useDispatch} from "react-redux";

const SignupForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setMessage("*The password and confirm password do not match");
            return;
        }

        const data = {
            name: formData.name,
            email: formData.email,
            password: formData.password,
        };

        try {
            const response = await axios.post('http://localhost:5000/api/signup', data);

            if (response.data.error) {
                setMessage(response.data.error);
            } else {
                setMessage(response.data.message);
                const profilePicturePath = await import(`../../assets/Profile picture/1.png`);

                dispatch(currentUser({ name:data.name, email: data.email, profilePicture: profilePicturePath.default }));
                navigate('/home');
            }
        } catch (error) {
            setMessage('An unexpected error occurred. Please try again later.');
        }
    };

    return (
        <section className="h-screen">
            <div className="container px-6 py-12 h-full">
                <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                        <img
                            src={Login_girl}
                            className="w-full"
                            alt="logo"
                        />
                    </div>
                    <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                        <form
                            className="flex flex-col justify-center px-8 py-9 max-w-full bg-white rounded-lg shadow-sm w-[448px] max-md:px-5 max-md:mt-10"
                            onSubmit={handleSubmit}
                        >
                            <div className="text-3xl font-extrabold text-gray-800 mb-8 self-center text-2xl leading-8 text-center whitespace-nowrap text-neutral-900">
                                Sign up to Mak-Z
                            </div>
                            <div className="mt-4">
                            
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    autoComplete="off"
                                    placeholder="Name"
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 mt-1 text-base text-gray-800 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-300"
                                    required
                                />
                            </div>
                            <div className="mt-4">
                                
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 mt-1 text-base text-gray-800 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-300"
                                    required
                                />
                            </div>
                            <div className="mt-4">
                       
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 mt-1 text-base text-gray-800 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-300"
                                    required
                                />
                            </div>
                            <div className="mt-4">
                            
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 mt-1 text-base text-gray-800 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-300"
                                    required
                                />
                            </div>
                            {message && <p className='text-red-600'>{message}</p>}
                            <button
                                type="submit"
                                className="px-4 py-2 mt-4 text-base font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                            >
                                Sign Up
                            </button>
                            <div className="flex gap-3.5 self-center mt-4 text-center whitespace-nowrap">
                                <div className="grow text-gray-500">Already have an account?</div>
                                <a href="/login" className="text-blue-500 hover:underline">Log in</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignupForm;
