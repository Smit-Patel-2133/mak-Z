import React, { useState } from 'react';
import WLogo from "../../assets/picture/white_noBG.png";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleOldPasswordChange = (event) => {
        setOldPassword(event.target.value);
    };

    const handleNewPasswordChange = (event) => {
        setNewPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Your logic to handle password change
        
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
            <img
                src={WLogo}
                alt="logo"
                className="max-w-full w-[120px] mt-10 ml-10 rounded-full absolute top-0 left-0"
            />
            <form className="max-w-md w-full bg-white rounded-md shadow-md p-6" onSubmit={handleSubmit}>
                <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
                    Change password
                </h2>
                <div className="mb-4">
                    <input
                        type="email"
                        placeholder="Email"
                        aria-label="Email"
                        className="w-full px-3 py-2.5 text-gray-800 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        placeholder="Old Password"
                        aria-label="Old Password"
                        className="w-full px-3 py-2.5 text-gray-800 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        value={oldPassword}
                        onChange={handleOldPasswordChange}
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        placeholder="New Password"
                        aria-label="New Password"
                        className="w-full px-3 py-2.5 text-gray-800 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        value={newPassword}
                        onChange={handleNewPasswordChange}
                    />
                </div>
                <div className="flex justify-between items-center mb-4">
                    <button
                        type="button"
                        className="font-medium text-gray-600 focus:outline-none hover:underline"
                        tabIndex="0"
                    >
                        login?
                    </button>
                </div>
                
                <button
                    type="submit"
                    className="w-full px-6 py-2.5 font-medium text-white bg-blue-500 rounded-md focus:outline-none hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    tabIndex="0"
                >
                    Change Password
                </button>
            </form>
            
        </div>
    );
};

export default ForgotPassword;
