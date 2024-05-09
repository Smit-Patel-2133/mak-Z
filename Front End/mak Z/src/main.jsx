import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from "./components/Landing/LandingPage.jsx";
import SignupForm from "./components/SingUp/SignupForm.jsx";
import Login from "./components/login/Login.jsx";
import Home from "./components/Home/Home.jsx";
import ForgotPassword from './components/login/ForgotPassword.jsx';
import EditPage from './components/EditPage/EditPage.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Templates from "./components/Templates/Templates.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import ContactUs from"./components/ContactUs/contact.jsx";
import UserProfile from"./components/UserProfile/UserProfile.jsx";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<App/>}>
        <Route path='' element={<LandingPage/>} />
        <Route path='/signup' element={<SignupForm/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/forgot-password' element={<ForgotPassword/>} />
        <Route path='/editPage/:projectId?' element={<EditPage/>} />
        <Route path='/templates' element={<Templates/>} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/ContactUs' element={<ContactUs/>}/>
        <Route path='/userProfile' element={<UserProfile/>}/>
    </Route>
));

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}> {/* Wrap your App component with Provider */}
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
);