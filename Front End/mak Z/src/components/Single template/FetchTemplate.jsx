import React from 'react';
import './FetchTemplate.css';

const FetchTemplate = (props) => {
    const { images, templateHeading } = props; // Destructuring props to get images array and templateHeading

    const handleButtonClick = (url) => {
        window.open(url, '_blank'); // Open the URL in a new tab
    };

    return (
        <div>
            {/* Render the template heading HTML received from props */}
            <h1 className='ml-14 mt-3'>{templateHeading}</h1>
            <div className='scrollable'>
                <ul className='image-list'>
                    {images.map(image => (
                        <li key={image.id}>
                            <div className='inner'>
                                <img src={image.url} alt={image.alt} className='img'/>
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
