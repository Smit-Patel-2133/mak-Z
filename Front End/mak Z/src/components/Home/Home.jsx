import React, {useEffect, useState} from 'react';
import Header from '../Header/Header';
import SliderImages from '../SliderImages/SliderImages';
import AboutSite from '../AboutSite/AboutSite';
import FeedBack from '../FeedBack/FeedBack.jsx';
import FetchTemplate from "../Single template/FetchTemplate.jsx";
import axios from "axios";

let templateHeading="sample"
const Home = () => {
    const [templates, setTemplates] = useState([]); // State to store fetched templates
    const [isLoading, setIsLoading] = useState(true); // Loading indicator
    const [error, setError] = useState(null); // Error handling
    useEffect(() => {
        const fetchTemplates = async () => {
            try {
                const response = await axios.post('http://localhost:5000/fetchThis/forhome', );

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

    return (
        <div>
         <Header/>
         <SliderImages/>
            {isLoading ? (
                <p className='mb-96'>Loading...</p> // Display loading message
            ) : error ? (
                <p>Error fetching templates: {error.message}</p> // Display error message
            ) : (
                <FetchTemplate images={templates} templateHeading="Templates" /> // Display fetched templates
            )}
         <FeedBack/>
        </div>
    );
};

export default Home;