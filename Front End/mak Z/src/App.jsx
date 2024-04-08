import React from 'react';
import {BrowserRouter , Route , Routes, Outlet} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from "./components/Landing/LandingPage.jsx";
import SignupForm from "./components/SingUp/SignupForm.jsx";
import Login from "./components/login/Login.jsx";
import Home from "./components/Home/Home.jsx";
import ForgotPassword from './components/login/ForgotPassword.jsx';
import EditPage from './components/EditPage/EditPage.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage/>}/>
                <Route path='/signup' element={<SignupForm/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/forgot-password' element={<ForgotPassword/>}/>
                <Route path='/editPage' element={<EditPage/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
