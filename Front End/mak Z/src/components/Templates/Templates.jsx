import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx';
import FetchTemplate from '../Single template/FetchTemplate.jsx';
import {useSelector} from "react-redux";
import {BounceLoader, ClimbingBoxLoader} from 'react-spinners';

const Templates = () => {
    const user = useSelector(state => state.auth);
    const [templates, setTemplates] = useState({
        login: [],
        home: [],
        signup: [],
        landing: [],
    });
    const [isLoading, setIsLoading] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTemplates = async () => {
            let data = { ...templates }; // Start with current templates to avoid overwriting with errors
            let hadError = false; // Track if any errors occurred

            const fetchTemplate = async (type) => {
                try {
                    const response = await axios.post('http://localhost:5000/fetchThis', { type,userEmail: user.email});
                    if (Array.isArray(response.data)) {
                        console.log(data[type])
                        data[type] = response.data;
                    }
                } catch (err) {
                    if (err.response && err.response.status === 404) {
                        console.warn(`Template of type '${type}' not found.`);
                    } else {
                        console.error(`Error fetching template '${type}':`, err);
                        setError(err);
                        hadError = true; // An error occurred, aside from 404
                    }
                }
            };

            await Promise.all([
                fetchTemplate('login'),
                fetchTemplate('home'),
                fetchTemplate('signup'),
                fetchTemplate('landing'),
            ]);

            setTemplates(data);
            if (!hadError) {
                setIsLoading(false);
            }
        };

        fetchTemplates();
    }, []);

    return (
        <div>
            <Header />
            {isLoading ? (
                <div className="flex justify-center items-center h-screen mt-[-74px]">
                    <BounceLoader    color={'#123abc'} loading={isLoading}/>
                </div>
            ) : error ? (
                <p>Error fetching templates: {error.message}</p>
            ) : (
                <>
                    {templates.login.length > 0 && (
                        <FetchTemplate images={templates.login} templateHeading="Login" />
                    )}
                    {templates.home.length > 0 && (
                        <FetchTemplate images={templates.home} templateHeading="Home" />
                    )}
                    {templates.signup.length > 0 && (
                        <FetchTemplate images={templates.signup} templateHeading="Signup" />
                    )}
                    {templates.landing.length > 0 && (
                        <FetchTemplate images={templates.landing} templateHeading="Landing" />
                    )}
                </>
            )}
        </div>
    );
};

export default Templates;
