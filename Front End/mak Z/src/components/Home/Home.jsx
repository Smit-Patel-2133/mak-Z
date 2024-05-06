import React, {useEffect, useState} from 'react';
import Header from '../Header/Header';
import SliderImages from '../SliderImages/SliderImages';

import FeedBack from '../FeedBack/FeedBack.jsx';
import FetchTemplate from "../Single template/FetchTemplate.jsx";
import axios from "axios";
import {useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; // FontAwesome library
import {faHeart, faPlus} from '@fortawesome/free-solid-svg-icons'; // Plus icon
import './Home.css'
import FetchUserProject from "../Single template/FetchUserProject.jsx";


const Home = () => {
    const user = useSelector(state => state.auth);
    const navigate = useNavigate();
    const [templates, setTemplates] = useState([]); // State to store fetched templates
    const [isLoading, setIsLoading] = useState(true); // Loading indicator
    const [error, setError] = useState(null); // Error handling
    useEffect(() => {

        const fetchTemplates = async () => {
            try {
                const response = await axios.post('http://localhost:5000/fetchThis/forhome',);

                if (Array.isArray(response.data)) {
                    setTemplates(response.data); // Store fetched data
                    setIsLoading(false); // Loading complete
                } else {
                    throw new Error('Invalid response format');
                }
            } catch (err) {
                console.error('Error fetching templates:', err); // Log the error
                setError(err);
                setIsLoading(false); // Loading complete
            }
        };

        fetchTemplates(); // Trigger the fetch
    }, []); // Run once when the component mounts
    const newProject = () => {
        navigate('/editPage')
    }
    return (
        <div>
            <Header/>
            <SliderImages/>
            <div className='outer'><h1 className='mt-3 italic'>Welcome {user.name}</h1>
            </div>
            <div className="divider"/>
            <div className='outer'>
                <h1 className='mt-3 italic'>Projects</h1>
                <div className='flex'>

                    <div className='mr-4'>
                        <FetchUserProject email={user.email}/>
                    </div>

                    <div className='inner'>
                        <div className="plus-container"> {/* Circle with plus icon */}
                            <FontAwesomeIcon icon={faPlus} className="fa-plus-large" onClick={newProject}/>
                        </div>
                    </div>

                </div>
            </div>
            {isLoading ? (
                <p className='mb-96'>Loading...</p> // Display loading message
            ) : error ? (
                <p>Error fetching templates: {error.message}</p> // Display error message
            ) : (
                <FetchTemplate images={templates} templateHeading="Templates"/> // Display fetched templates
            )}
            <FeedBack/>
        </div>
    );
};

export default Home;