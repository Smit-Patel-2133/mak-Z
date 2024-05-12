    import React, {useState} from "react";
    import axios from "axios";
    import {useNavigate} from 'react-router-dom';
    import login_girl from '../../assets/Auth Pictures/log.svg'
    import './Login.css'
    import { useDispatch } from 'react-redux';
    import { currentUser } from '../../features/authentication/auth.js';
    import  pic from'../../assets/Profile picture/3.png'
    const LoginForm = () => {
        const navigate = useNavigate(); // Initialize useNavigate hook
        const dispatch = useDispatch();
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [message, setMessage] = useState("");

        const handleEmailChange = (event) => {
            setEmail(event.target.value);
        };

        const handlePasswordChange = (event) => {
            setPassword(event.target.value);
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const response = await axios.post('http://localhost:5000/login', { email, password });
                if (response.data.message === "Login successful") {
                    try {
                        const response2 = await axios.get(`http://localhost:5000/user/details?email=${email}`);
                        const { username, email: userEmail, profile_pic } = response2.data;

                        // Dynamically import profile picture
                        const profilePicturePath = await import(`../../assets/Profile picture/${profile_pic}.png`);
                        dispatch(currentUser({ name:username, email: userEmail, profilePicture: profilePicturePath.default }));
                        navigate('/home');
                    } catch (error) {
                        console.log(error);
                        setMessage("Error fetching user details");
                    }
                } else {
                    setMessage(response.data.message);
                }
            } catch (error) {
                setMessage("Failed to log in. Please try again.");
            }
        };



        return (
            <>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <input
                            type="text"
                            value={email}
                            onChange={handleEmailChange}
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Email address"
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Password"
                        />
                    </div>
                    <div className="flex justify-between items-center mb-6">
                        <a
                            className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                            onClick={(e) => navigate('/forgot-password')}
                        >
                            Forgot password?
                        </a>
                    </div>
                    {message && <p className="text-red-500">{message}</p>}
                    <button
                        type="submit"
                        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                    >
                        Sign in
                    </button>
                </form>
                <div className="flex items-center mb-6 pt-4">
                    <p className="text-gray-600 ml-4">Don't have an account? </p>
                    <a
                        className="text-blue-500 ml-2 mb-3 cursor-pointer hover:underline"
                        onClick={() => navigate('/signup')}
                    >Sign up</a>
                </div>
            </>
        );
    }

    const Login = () => {
        return (
            <>
            <section className="h-screen">
                <div className="container px-6 py-12 h-full">
                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                        <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0 ">
                            <img
                                src={login_girl}
                                className="w-full"
                                alt="Phone image"
                            />
                        </div>
                        <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                            <h2 className="pb-6 text-3xl font-bold">Login</h2>
                            <LoginForm/>
                        </div>
                    </div>
                </div>
            </section>
                </>
        );
    };

    export default Login;
