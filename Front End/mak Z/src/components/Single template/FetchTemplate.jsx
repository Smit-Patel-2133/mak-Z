import React, { useRef } from 'react';
import './FetchTemplate.css';

const FetchTemplate = (props) => {
    const { images, templateHeading } = props;
    const sliderRef = useRef(null);

    const handleButtonClick = (url) => {
        window.open(url, '_blank');
    };

    const handleMouseDown = (e) => {
        e.preventDefault();
        isDown.current = true;
        sliderRef.current.classList.add('active');
        startX.current = e.pageX - sliderRef.current.offsetLeft;
        scrollLeft.current = sliderRef.current.scrollLeft;
    };

    const handleMouseLeave = () => {
        isDown.current = false;
        sliderRef.current.classList.remove('active');
    };

    const handleMouseUp = () => {
        isDown.current = false;
        sliderRef.current.classList.remove('active');
    };

    const handleMouseMove = (e) => {
        e.preventDefault();
        if (!isDown.current) return;
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX.current) * 2; // Adjust the multiplier to control scrolling speed
        sliderRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const handleMouseUpScroll = () => {
        if (isDown.current) {
            handleMouseMove(event);
            requestAnimationFrame(handleMouseUpScroll);
        }
    };

    const isDown = useRef(false);
    const startX = useRef(null);
    const scrollLeft = useRef(null);

    return (
        <div className="fetch-template-container">
            <h1 className='mt-3 italic'>{templateHeading}</h1>
            <div
                className='scrollable'
                ref={sliderRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                <ul className='image-list'>
                    {images.map(image => (
                        <li key={image.id}>
                            <div className='inner'>
                                <div className='hand'><div className='htmltag' dangerouslySetInnerHTML={{__html: image.html}}></div></div>
                                <div className='text-gray-500 ml-3'><label>
                                    {image.text}
                                </label></div>
                                <div className='button-container'>
                                    <br/>
                                    <button onClick={() => handleButtonClick(image.click)}>Click me</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FetchTemplate;
