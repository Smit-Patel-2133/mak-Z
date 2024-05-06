import React, { useEffect, useRef, useState } from 'react';
import './FetchTemplate.css';
import axios from 'axios'; // For API calls
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const FetchUserProject = ({ email }) => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const sliderRef = useRef(null);
    const isDown = useRef(false);
    const startX = useRef(null);
    const scrollLeft = useRef(null);

    const handleMouseDown = (e) => {
        e.preventDefault();
        isDown.current = true;
        startX.current = e.pageX - sliderRef.current.offsetLeft;
        scrollLeft.current = sliderRef.current.scrollLeft;
    };

    const handleMouseUp = () => {
        isDown.current = false;
    };

    const handleMouseMove = (e) => {
        if (!isDown.current) return;
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX.current) * 2;
        sliderRef.current.scrollLeft = scrollLeft.current - walk;
    };

    useEffect(() => {
        const fetchUserProjects = async () => {
            if (!email) {
                setIsLoading(false);
                return;
            }
            setIsLoading(true);
            setError(null);

            try {
                const response = await axios.post('http://localhost:5000/fetchThis/userProjects', {
                    email: email,
                });
                setProjects(response.data);
            } catch (err) {
                setError(err);
                console.error('Error fetching user projects:', err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserProjects(); // Fetch projects on component mount
    }, [email]); // Dependency on email

    if (isLoading) {
        return <p>Loading user projects...</p>; // Show loading message
    }

    if (error) {
        return <p>Error fetching user projects: {error.message}</p>; // Show error message
    }

    return (
        <div className="fetch-template-container">
            {/* Static heading */}
            <div
                className="scrollable"
                ref={sliderRef}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                {projects.length > 0 ? (
                    <ul className="image-list">
                        {projects.map((project, index) => (
                            <li key={index} className="image-item">
                                <div className="inner">
                                    <img
                                        src={`data:image/png;base64,${project.htmlImg}`}
                                        alt={project.name}
                                    />
                                    <div className="info">
                                        <h6 className="name">{project.name}</h6>
                                        <button className="like-button">
                                            <FontAwesomeIcon icon={faHeart}/>
                                            <span className="likes">0</span> {/* Placeholder for likes */}
                                        </button>
                                    </div>
                                    <div>
                                        <button className='bg-blue-700 rounded'>
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p> </p>
                )}
            </div>
        </div>
    );
};

export default FetchUserProject;
