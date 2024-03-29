import React, { useState } from "react";
import WLogo from "../../assets/picture/white_noBG.png";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleNewUser = () => {
        navigate('/signup');
    };

    const handleChangePassword = () => {
        navigate('/forgot-password'); // Corrected handler name and navigation path
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });
            setMessage(response.data.message);
            if (response.data.message === "User not found") {
                // Display appropriate message to the user
                setMessage("User not found. Please check your credentials or sign up.");
            } else {
                navigate('/home');
            }
        } catch (error) {
            setMessage(error.response.data.error);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
            <img src={WLogo} alt="logo" className="max-w-full w-[120px] mt-10 ml-10 rounded-full absolute top-0 left-0"/>
            <form className="max-w-md w-full bg-white rounded-md shadow-md p-6" onSubmit={handleSubmit}>
                <h2 className="text-3xl font-extrabold text-gray-800 mb-8"> Sign in to your account </h2>
                <div className="mb-4">
                    <input type="email" placeholder="Email address" aria-label="Email address" className="w-full px-3 py-2.5 text-gray-800 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" onChange={handleEmailChange}/>
                </div>
                <div className="mb-4">
                    <input type="password" placeholder="Password" aria-label="Password" className="w-full px-3 py-2.5 text-gray-800 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"  onChange={handlePasswordChange}/>
                </div>
                <div className="flex justify-between items-center mb-4">
                    {/* Corrected onClick handler */}
                    <button type="button" className="font-medium text-gray-600 focus:outline-none hover:underline" tabIndex="0" onClick={handleChangePassword}>
                        Forgot your password?
                    </button>
                </div>
                {message && <p className="text-red-500 mb-4">{message}</p>}
                <button type="submit" className="w-full px-6 py-2.5 font-medium text-white bg-blue-500 rounded-md focus:outline-none hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" tabIndex="0">
                    Sign in
                </button>
            </form>
            <div className="flex justify-between items-center mb-4 p-5">
                New to Mak-Z?
                <button type="button" className="font-medium text-gray-600 focus:outline-none hover:underline ml-3" tabIndex="0" onClick={handleNewUser}>
                    Join Now
                </button>
            </div>
        </div>
    );
};

export default Login;
