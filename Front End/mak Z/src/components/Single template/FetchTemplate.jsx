import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import ImageZoom from './ImageZoom.jsx';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginModal from '../login/LoginModal'; // Import the LoginModal component
import ProjectDetailsModalEdit from './ProjectDetailsModalEdit'; // Import the ProjectDetailsModalEdit component

const FetchTemplate = ({ templateHeading, images }) => {
    const user = useSelector(state => state.auth);
    const sliderRef = useRef(null);
    const isDown = useRef(false);
    const startX = useRef(null);
    const scrollLeft = useRef(null);

    const [isZoomed, setIsZoomed] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [showLoginModal, setShowLoginModal] = useState(false); // State to control login modal
    const [showProjectDetailsModal, setShowProjectDetailsModal] = useState(false); // State to control project details modal

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

    const handleImageDoubleClick = (image) => {
        setSelectedImage(image);
        setIsZoomed(true);
    };

    const handleZoomDoubleClick = () => {
        setIsZoomed(false);
        setSelectedImage(null);
    };

    const userName = selectedImage ? selectedImage.name : 'Unknown';
    const navigate = useNavigate();
    const handleEditClick = (projectId) => {
        if (user.isLogedin) {
            setShowProjectDetailsModal(true);
        } else {
            setShowLoginModal(true);
        }
    };

    return (
        <div className="fetch-template-container">
            <h1 className="mt-3 italic">{templateHeading}</h1>
            <LoginModal
                show={showLoginModal}
                onClose={() => setShowLoginModal(false)}
                onLogin={() => {
                    // Handle login action here
                    // For example, navigate to the login page
                    setShowLoginModal(false);
                }}
            />
            <ProjectDetailsModalEdit
                show={showProjectDetailsModal}
                onClose={() => setShowProjectDetailsModal(false)}
            />
            {isZoomed ? (
                <ImageZoom
                    image={selectedImage}
                    userName={userName}
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
                    {Array.isArray(images) ? (
                        <ul className="image-list">
                            {images.map((image, index) => (
                                <li
                                    key={index}
                                    className="image-item"
                                    onDoubleClick={() => handleImageDoubleClick(image)}
                                >
                                    <div className="inner">
                                        <img
                                            src={`data:image/png;base64,${image.htmlImg}`}
                                            alt={image.name}
                                        />
                                        <div className="info">
                                            <div className='mt-1 '/>
                                            <div className='flex items-center ml-2'>
                                                <h6 className="name">{image.name}</h6>
                                                <button className="like-button ml-auto mr-5">
                                                    <FontAwesomeIcon icon={faHeart} />
                                                    <span className="ml-2">{image.likes}</span>
                                                </button>
                                            </div>
                                            <div className='flex items-center mb-3'>
                                                <h5 className="ml-2">{image.username}</h5>
                                            </div>
                                            <div className="flex flex-col justify-between h-full items-center">
                                                <button className="mr-2 mb-2 bg-gray-600 rounded h-10 w-20 text-white"
                                                        onClick={() => handleEditClick(image.id)}>
                                                    Edit
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No templates found.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default FetchTemplate;
