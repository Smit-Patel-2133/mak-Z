import React, { useRef, useState } from 'react';
import ImageZoom from './ImageZoom.jsx';
import { useSelector } from "react-redux";
import LoginModal from '../login/LoginModal';
import ProjectDetailsModalEdit from './ProjectDetailsModalEdit';
import ReportTemplateModal from './ReportTemplateModal';
import axios from "axios";
const FetchTemplate = ({ templateHeading, images }) => {
    const user = useSelector(state => state.auth);
    const sliderRef = useRef(null);
    const isDown = useRef(false);
    const startX = useRef(null);
    const scrollLeft = useRef(null);
    const [isZoomed, setIsZoomed] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showProjectDetailsModal, setShowProjectDetailsModal] = useState(false);
    const [templateDetails, setTemplateDetails] = useState(null);
    const [showReportModal, setShowReportModal] = useState(false);
    const [reportedTemplateName, setReportedTemplateName] = useState('');
    const [reportedTemplateId, setReportedTemplateId] = useState('');
    const [reportDescription, setReportDescription] = useState('');
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
    const handleEditClick = (image) => {
        if (user.isLogedin) {
            const { id, name, visibility, type } = image;
            axios.post('http://localhost:5000/downloadCount', { templateId: image.id })
                .then(response => {
                    if (response.status === 200) {
                        setShowProjectDetailsModal(true);
                        setTemplateDetails({ id, name, visibility, type });
                    } else {
                        console.error('Error incrementing download count:', response.data.error);
                    }
                })
                .catch(error => {
                    // Handle error
                    console.error('Error incrementing download count:', error);
                    // Optionally, you can show an error message to the user
                });
        } else {
            setShowLoginModal(true);
        }
    };
    const handleReportClick = (template) => {
        if (user.isLogedin) {
            setReportedTemplateName(template.name);
            setReportedTemplateId(template.id);
            setShowReportModal(true);
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
                    setShowLoginModal(false);
                }}
            />
            <ProjectDetailsModalEdit
                show={showProjectDetailsModal}
                onClose={() => setShowProjectDetailsModal(false)}
                templateDetails={templateDetails}
            />
            <ReportTemplateModal
                show={showReportModal}
                onClose={() => setShowReportModal(false)}
                templateName={reportedTemplateName}
                templateId={reportedTemplateId}
                userEmail={user.email}
                reportDescription={reportDescription}
                setReportDescription={setReportDescription}
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
                                            <div className='flex items-center'>
                                                <h5 className="ml-2">Name:  {image.username}</h5>
                                            </div>
                                            <div className='flex items-center'>
                                                <h5 className="ml-2">{image.name}</h5>
                                            </div>

                                            <div className="flex flex-row justify-between items-center mt-10">
                                                <button
                                                    className="mr-2 mb-2 ml-10 bg-emerald-400 rounded h-10 w-20 text-white"
                                                    onClick={() => handleEditClick(image)}>
                                                    Edit
                                                </button>
                                                <button
                                                    className="mr-10 mb-2 bg-emerald-400 rounded h-10 w-20 text-white"
                                                    onClick={() => handleReportClick(image)}>
                                                    Report
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
