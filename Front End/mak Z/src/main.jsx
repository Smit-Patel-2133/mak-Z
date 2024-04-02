import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import LandingPage from "./components/Landing/LandingPage.jsx";
import SignupForm from "./components/SingUp/SignupForm.jsx";
import Login from "./components/login/Login.jsx";
import Home from "./components/Home/Home.jsx";
import ForgotPassword from './components/login/ForgotPassword.jsx';
import EditPage from './components/EditPage/EditPage.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';

const router=createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<App/>}>
        <Route path='' element={<LandingPage/>}/>
        <Route path='/signup' element={<SignupForm/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
        <Route path='/editPage' element={<EditPage/>}/>
    </Route>

))
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
