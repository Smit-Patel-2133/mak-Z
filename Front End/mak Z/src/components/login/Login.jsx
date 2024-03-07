import React, {useState} from "react";
import WLogo from "../../assets/picture/white_noBG.png";

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Your login logic here (e.g., API request)
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div className="flex flex-col sm:flex-row">
            {/* Black Part (Logo) */}
            <div className="w-full sm:w-1/2 h-screen bg-gray-800 flex flex-col items-center justify-center">
                <img
                    loading="lazy"
                    src={WLogo}
                    alt="logo"
                    className="max-w-full w-[600px] rounded-full mb-4 ml-4 mt-4"
                />
            </div>

            {/* White Part (Login Form) */}
            <div className="bg-gray-100 w-full sm:w-1/2 p-4 sm:p-8 h-screen flex items-center justify-center">
                <form className="flex flex-col items-center max-w-md w-full bg-white rounded-md shadow-md p-6">
                    <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
                        Sign in to your account
                    </h2>
                    <div className="w-full mb-4">
                        <label htmlFor="email" className="sr-only">
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email address"
                            aria-label="Email address"
                            className="w-full px-3 py-2.5 text-gray-800 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className="w-full mb-4">
                        <label htmlFor="password" className="sr-only">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            aria-label="Password"
                            className="w-full px-3 py-2.5 text-gray-800 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <div className="flex justify-between items-center w-full mb-4">
                        <div className="flex items-center"></div>
                        <button
                            className="font-medium text-gray-600 focus:outline-none hover:underline"
                            tabIndex="0"
                        >
                            Forgot your password?
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="flex justify-center items-center w-full px-6 py-2.5 font-medium text-white bg-blue-500 rounded-md focus:outline-none hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        tabIndex="0"
                        onClick={handleSubmit}
                    >
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
