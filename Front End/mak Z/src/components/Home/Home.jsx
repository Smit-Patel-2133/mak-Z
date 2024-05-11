import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
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
import ProjectDetailsModal from './ProjectDetailsModal'; // New component

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
            <div className='outer'>
                <h1 className='mt-3 italic'>Projects</h1>
                <div className='flex'>
                    <div className='mr-4'>
                        <FetchUserProject email={user.email} />
                    </div>
                    <div className='inner' onClick={handleNewProjectClick}>
                        <div className="plus-container" >
                            <FontAwesomeIcon
                                icon={faPlus}
                                className="fa-plus-large"

                            />
                        </div>
                    </div>
                </div>
            </div>
            {isLoading ? (
                <p className='mb-96'>Loading...</p>
            ) : error ? (
                <p>Error fetching templates: {error.message}</p>
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
        </div>
    );
};

export default Home;
