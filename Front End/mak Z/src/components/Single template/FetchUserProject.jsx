import React, { useEffect, useRef, useState } from 'react';
import './FetchTemplate.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import ImageZoom from './ImageZoom.jsx'; // Assuming this component is used to zoom in on images

const FetchUserProject = ({ email }) => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isZoomed, setIsZoomed] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

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

    const handleImageDoubleClick = (project) => {
        setSelectedProject(project);
        setIsZoomed(true);
    };

    const handleZoomDoubleClick = () => {
        setIsZoomed(false);
        setSelectedProject(null);
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
                const response = await axios.post(
                    'http://localhost:5000/fetchThis/userProjects',
                    { email }
                );
                setProjects(response.data);
            } catch (err) {
                setError(err);
                console.error('Error fetching user projects:', err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserProjects(); // Fetch projects on component mount
    }, [email]);

    if (isLoading) {
        return <p>Loading user projects...</p>;
    }

    if (error) {
        return <p>Error fetching user projects: {error.message}</p>;
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
                                            <button className="mr-2 mb-2 bg-gray-600 rounded h-10 w-20 text-white">
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
