import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SliderImages from '../SliderImages/SliderImages';
import FeedBack from '../FeedBack/FeedBack.jsx';
import FetchTemplate from "../Single template/FetchTemplate.jsx";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlus } from '@fortawesome/free-solid-svg-icons';
import './Home.css';
import FetchUserProject from "../Single template/FetchUserProject.jsx";
import LoginModal from '../login/LoginModal';
import ProjectDetailsModal from './ProjectDetailsModal';
import {BeatLoader, BounceLoader, ClimbingBoxLoader} from "react-spinners"; // New component

const Home = () => {
    const user = useSelector(state => state.auth);
    const navigate = useNavigate();
    const [templates, setTemplates] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showProjectDetailsModal, setShowProjectDetailsModal] = useState(false);

    useEffect(() => {
        const fetchTemplates = async () => {
            try {
                const response = await axios.post(
                    'http://localhost:5000/fetchThis/forhome',
                    { userEmail: user.email } // Pass the user's email
                );

                if (Array.isArray(response.data)) {
                    setTemplates(response.data);
                    setIsLoading(false);
                } else {
                    throw new Error('Invalid response format');
                }
            } catch (err) {
                console.error('Error fetching templates:', err);
                setError(err);
                setIsLoading(false);
            }
        };

        fetchTemplates();
    }, []);

    const handleNewProjectClick = () => {
        if (!user.isLogedin) {
            setShowLoginModal(true);
        } else {
            setShowProjectDetailsModal(true);
        }
    };

    const handleCloseLoginModal = () => {
        setShowLoginModal(false);
    };

    const handleLogin = () => {
        navigate('/login');
    };

    const handleCloseProjectDetailsModal = () => {
        setShowProjectDetailsModal(false);
    };

    return (
        <div className='bg-gray-100'>
            <Header/>
            <SliderImages/>
            <div className='outer'>
                <h1 className='mt-3 italic'>Welcome {user.name}</h1>
            </div>
            <div className="divider" />
            {user.isLogedin && (
                <div className='outer'>
                    <div className="flex justify-between items-center">
                        <h1 className='mt-3 italic'>Projects</h1>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-5"
                            onClick={handleNewProjectClick}
                        >
                            new Project
                        </button>
                    </div>
                    <div className='-ml-10'>
                        <FetchUserProject email={user.email}/>
                    </div>
                </div>
            )}
            {isLoading ? (
                <div className="flex justify-center items-center h-screen mt-[-74px]">
                    <BounceLoader color={'#123abc'} loading={isLoading}/>
                </div>
            ) : error ? (
                <p></p>
            ) : (
                <FetchTemplate images={templates} templateHeading="Templates" />
            )}
            <FeedBack/>
            <LoginModal
                show={showLoginModal}
                onClose={handleCloseLoginModal}
                onLogin={handleLogin}
            />
            <ProjectDetailsModal
                show={showProjectDetailsModal}
                onClose={handleCloseProjectDetailsModal}
            />
            <Footer/>
        </div>
    );
};

export default Home;
