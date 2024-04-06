// ForgotPassword.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './ForgotPassword.css';
import { useNavigate } from "react-router-dom";
import boyI from '../../assets/Auth Pictures/log.svg';
import logo from '../../assets/picture/new black noBG.png'
const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [showNewPasswordFields, setShowNewPasswordFields] = useState(false);
    const [showSendOTPButton, setShowSendOTPButton] = useState(true);
    const navigate = useNavigate();

    const generateOTP = async () => {
        try {
            const response = await axios.post("http://localhost:5000/api/send-otp", { email });
            if (response.data.success) {
                setOtpSent(true);
                setMessage("");
                setShowSendOTPButton(false);
            } else if (response.status === 404) {
                setMessage("User not found");
            } else {
                setMessage("Failed to send OTP. Please try again later.");
            }
        } catch (error) {
            console.error("Error sending OTP:", error);
            setMessage("Failed to send OTP. Please try again later.");
        }
    };

    const verifyOTP = async () => {
        try {
            const otpPattern = /^\d{6}$/;
            if (!otpPattern.test(otp)) {
                setMessage("OTP must be a 6-digit number.");
                return;
            }

            const response = await axios.post("http://localhost:5000/api/verify-otp", { email, otp: Number(otp) });
            if (response.data.success) {
                setShowNewPasswordFields(true);
                setMessage("");
                setOtpSent(false);
            } else {
                setMessage("Incorrect OTP. Please enter the correct OTP.");
            }
        } catch (error) {
            console.error("Error verifying OTP:", error);
            setMessage("Failed to verify OTP. Please try again later.");
        }
    };

    const updatePassword = async () => {
        try {
            const response = await axios.post("http://localhost:5000/api/update-password", { email, newPassword });
            if (response.data.success) {
                setMessage("Password updated successfully!");
                navigate('/login');
            } else {
                setMessage("Failed to update password. Please try again later.");
            }
        } catch (error) {
            console.error("Error updating password:", error);
            setMessage("Failed to update password. Please try again later.");
        }
    };

    return (
        <div className="forgot-password-container flex flex-col md:flex-row">
            <img src={logo} className='md:w-1/12 pt-7 ml-7' />
            <div className='splitL left md:w-1/2 flex items-center justify-center order-2 md:order-1'>
                <img
                    src={boyI}
                    className="w-4/4 md:w-10/12"
                    alt="Phone image"
                />
            </div>
            <div className='splitR right md:w-1/2 flex items-center justify-center order-1 md:order-2'>
                <form className="max-w-md w-full bg-white rounded-md shadow-md p-6">
                    <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
                        Forgot password
                    </h2>
                    <div className="form-item">
                        <input
                            type="email"
                            placeholder="Email"
                            aria-label="Email"
                            className="w-full px-3 py-2.5 text-gray-800 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    {showSendOTPButton && (
                        <div className="form-item">
                            <button
                                type="button"
                                className="w-full px-6 py-2.5 font-medium text-white bg-blue-500 rounded-md focus:outline-none hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                onClick={generateOTP}
                                disabled={!email}
                            >
                                Send OTP
                            </button>
                        </div>
                    )}

                    {otpSent && (
                        <div className="form-item">
                            <input
                                type="text"
                                placeholder="Enter OTP"
                                aria-label="OTP"
                                className="w-full px-3 py-2.5 text-gray-800 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                            />
                            <div className='pb-4'></div>
                            <button
                                type="button"
                                className="w-full px-6 py-2.5 font-medium text-white bg-blue-500 rounded-md focus:outline-none hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                onClick={verifyOTP}
                            >
                                Verify OTP
                            </button>
                        </div>
                    )}

                    {showNewPasswordFields && (
                        <>
                            <div className="form-item">
                                <input
                                    type="password"
                                    placeholder="New Password"
                                    aria-label="New Password"
                                    className="w-full px-3 py-2.5 text-gray-800 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                            </div>
                            <div className="form-item">
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    aria-label="Confirm Password"
                                    className="w-full px-3 py-2.5 text-gray-800 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                            <button
                                type="button"
                                className="w-full px-6 py-2.5 font-medium text-white bg-blue-500 rounded-md focus:outline-none hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                onClick={updatePassword}
                            >
                                Change Password
                            </button>
                        </>
                    )}

                    {message && <p className="text-red-500 mb-4">{message}</p>}
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
