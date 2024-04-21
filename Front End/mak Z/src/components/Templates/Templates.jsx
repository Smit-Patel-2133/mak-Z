import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx';
import FetchTemplate from '../Single template/FetchTemplate.jsx';

const Templates = () => {
    const [templates, setTemplates] = useState([]); // State to store fetched templates
    const [isLoading, setIsLoading] = useState(true); // Loading indicator
    const [error, setError] = useState(null); // Error handling

    useEffect(() => {
        const fetchTemplates = async () => {
            try {
                console.log("Fetching templates..."); // Log to confirm fetch
                const response = await axios.get(`http://localhost:5000/featchThis?type=Home Page`); // Correct endpoint
                console.log("Response received:", response.data); // Log the response data

                // Check if data is in expected format
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
            <Header />
            {isLoading ? (
                <p>Loading...</p> // Display loading message
            ) : error ? (
                <p>Error fetching templates: {error.message}</p> // Display error message
            ) : (
                // Pass the fetched templates to FetchTemplate
                <FetchTemplate images={templates} templateHeading="Home" />
            )}
        </div>
    );
};

export default Templates;
