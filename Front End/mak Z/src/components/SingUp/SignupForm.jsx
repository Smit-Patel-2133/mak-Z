import React, {useState} from "react";
import BNBG from '../../assets/picture/Black_noBG.png';
import axios from 'axios';
import LandingPage from "../Landing/LandingPage.jsx";
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Check if the password and confirm password fields match
        if (formData.password !== formData.confirmPassword) {
            setMessage("*The password and confirm password do not match");
            formData.password = ''
            formData.confirmPassword = ''
            return; // Stop form submission if passwords don't match
        } else {
            try {
                const response = await axios.post('http://localhost:5000/SignUp', formData);

                setMessage(response.data);
                navigate('/home');
            } catch (error) {
                setMessage(error.response.data);
            }
        }
    };


    return (
        <div className="relative">
            <img
                loading="lazy"
                src={BNBG}
                alt="logo"
                className="max-w-full w-[100px] mt-10 ml-10 rounded-full absolute top-0 left-0"
            />
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <form
                    className="flex flex-col justify-center px-8 py-9 max-w-full bg-white rounded-lg shadow-sm w-[448px] max-md:px-5 max-md:mt-10"
                    onSubmit={handleSubmit}
                >
                    <div className="text-3xl font-extrabold text-gray-800 mb-8 self-center text-2xl leading-8 text-center whitespace-nowrap text-neutral-900">
                        Sign up to Mak-Z
                    </div>
                    <div className="mt-5">
                        <label htmlFor="name" className="text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            autoComplete="off"
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-1 text-base text-gray-800 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>
                    <div className="mt-5">
                        <label htmlFor="email" className="text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-1 text-base text-gray-800 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>
                    <div className="mt-5">
                        <label htmlFor="password" className="text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-1 text-base text-gray-800 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>
                    <div className="mt-5">
                        <label htmlFor="confirmPassword" className="text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-1 text-base text-gray-800 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>
                    {message && <p className='text-red-600'>{message}</p>}
                    <button
                        type="submit"
                        className="px-4 py-2 mt-3 text-base font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
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
    );
};

export default SignupForm;
