import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import ImageZoom from './ImageZoom.jsx';
import { useNavigate } from 'react-router-dom';
import './FetchTemplate.css'

const FetchUserProject = ({ email }) => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isZoomed, setIsZoomed] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const navigate = useNavigate(); // Ensure correct import
    const sliderRef = useRef(null);
    const isDown = useRef(false);
    const startX = useRef(null);
    const scrollLeft = useRef(null);

    // Function for navigating to the edit page
    const handleEditClick = (projectId) => {
        navigate(`/editPage/${projectId}`); // Use `navigate` to move to the edit page with the project ID
    };

    // Mouse event handlers for slider functionality
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

    // Zoom handling for images
    const handleImageDoubleClick = (project) => {
        setSelectedProject(project);
        setIsZoomed(true);
    };

    const handleZoomDoubleClick = () => {
        setIsZoomed(false);
        setSelectedProject(null);
    };

    // Fetch user projects on component mount
    useEffect(() => {
        const fetchUserProjects = async () => {
            if (!email) {
                setIsLoading(false); // Avoid loading state if no email is provided
                return;
            }

            setIsLoading(true); // Set loading state
            setError(null); // Reset error state

            try {
                const response = await axios.post(
                    'http://localhost:5000/fetchThis/userProjects',
                    { email }
                );
                setProjects(response.data); // Set the fetched projects
            } catch (err) {
                setError(); // Set error if fetching fails

            } finally {
                setIsLoading(false); // End loading state
            }
        };

        fetchUserProjects(); // Fetch projects on component mount
    }, [email]); // Re-run only when the email changes

    if (isLoading) {
        return <p>Loading user projects...</p>; // Display loading message during fetch
    }

    if (error) {
        return <p>Error fetching user projects: {error.message}</p>; // Display error message
    }

    return (<>
            <div className="fetch-template-container">
                {isZoomed ? (
                    <ImageZoom
                        image={selectedProject}
                        userName={selectedProject ? selectedProject.name : 'Unknown'}
                        onDoubleClick={handleZoomDoubleClick}
                    />
                ) : (
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
                                    <li
                                        key={index}
                                        className="image-item"
                                        onDoubleClick={() => handleImageDoubleClick(project)}
                                    >
                                        <div className='-ml-2'/>
                                        <div className="inner">
                                            <img
                                                src={`data:image/png;base64,${project.htmlImg}`}
                                                alt={project.name}
                                            />
                                            <div className="info">
                                                <div className="mt-1"/>
                                                <div className="flex items-center">
                                                    <h6 className="name">{project.name}</h6>
                                                    <button className="like-button ml-auto">
                                                        <FontAwesomeIcon icon={faHeart}/>
                                                        <span className="ml-2">{project.likes}</span>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="flex flex-col justify-between h-full items-center mt-3">
                                                <button className="mr-2 mb-2 bg-gray-600 rounded h-10 w-20 text-white"
                                                        onClick={() => handleEditClick(project.id)}>
                                                    Edit
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p></p>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default FetchUserProject;