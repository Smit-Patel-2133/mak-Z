import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "./components/login/Login.jsx";
import SignUp from "./components/SingUp/SignUp.jsx";

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                </Routes>

                <button
                    className="flex justify-center items-center mt-35 ml-36 px-6 py-2.5 font-medium text-white bg-blue-500 rounded-md focus:outline-none hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    tabIndex="0"
                    onClick={() => window.location.href = '/login'}>Login
                </button>
                <button
                    className="flex justify-center items-center mt-35 ml-36 px-6 py-2.5 font-medium text-white bg-blue-500 rounded-md focus:outline-none hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    tabIndex="0"
                    onClick={() => window.location.href = '/signup'}>Sign Up
                </button>
            </Router>
        </div>
    );
}

export default App;
