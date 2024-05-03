import React, { useRef } from 'react';
import './FetchTemplate.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const FetchTemplate = ({ templateHeading, images }) => {
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

    return (
        <div className="fetch-template-container">
            <h1 className="mt-3 italic">{templateHeading}</h1>
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
                            <li key={index} className="image-item">
                                <div className="inner">
                                    <img
                                        src={`data:image/png;base64,${image.htmlImg}`}
                                        alt={image.name}
                                    />
                                    <div className="info">
                                        <h6 className="name">{image.name}</h6>
                                        <button className="like-button">
                                            <FontAwesomeIcon icon={faHeart} />
                                            <span className="likes">{image.like}</span>
                                        </button>

                                    </div>
                                    <div>
                                        <button className='bg-blue-700  rounded'>
                                            click me
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No templates found.</p>
                )}
            </div>
        </div>
    );
};

export default FetchTemplate;
