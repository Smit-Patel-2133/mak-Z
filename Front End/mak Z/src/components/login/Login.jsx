import React, {useState} from 'react';

const Login = props => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // You can add your login logic here, such as sending a request to the server
        console.log('Username:', username);
        console.log('Password:', password);
    };
    return (
        <>
        <img loading="lazy" src="S:\project\mak-Z\Front End\mak Z\src\picture\Logo.svg" alt="Company logo"
             className="max-w-full w-[150px] mt-10 ml-10"/>
    <div className="flex justify-center items-center mt-20 px-16 py-12 text-sm leading-5 bg-white sm:px-5">
        <form className="flex flex-col justify-center items-center px-20 py-8 bg-gray-100 w-[500px] sm:px-5 sm:py-4">
                <h2 className="mt-8 text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                <div className="mt-8 w-full">
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <input type="email" id="email" name="email" placeholder="Email address" aria-label="Email address" className="justify-center px-3 py-2.5 w-full text-gray-900 bg-white rounded-md border border-gray-300" />
                </div>
                <div className="mt-4 w-full">
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input type="password" id="password" name="password" placeholder="Password" aria-label="Password" className="justify-center px-3 py-2.5 w-full text-gray-900 bg-white rounded-md border border-gray-300" />
                </div>
                <div className="flex gap-5 justify-between mt-6 w-full">
                    <div className="flex items-center">
                        <input type="checkbox" id="remember-me" name="remember-me" className="mr-2" />
                        <label htmlFor="remember-me" className="text-gray-900">Remember me</label>
                    </div>
                    <button className="font-medium text-rose-500 focus:outline-none focus:underline" tabIndex="0">Forgot your password?</button>
                </div>
                <button type="submit" className="flex justify-center items-center px-16 py-2.5 mt-6 w-full font-medium text-white bg-rose-500 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500" tabIndex="0">Sign in</button>
            </form>
        </div>
        </>
    );
};


export default Login;