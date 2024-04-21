import React, {useRef} from 'react';
import './FetchTemplate.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import Heart from "react-heart"
const FetchTemplate = ({templateHeading}) => { // Correct prop name and default value
    const sliderRef = useRef(null);
    const isDown = useRef(false);
    const startX = useRef(null);
    const scrollLeft = useRef(null);
    const images = [
        {
            id: 1,
            name: "smkit",
            like:2,
            downloads:0,
            html: '<!DOCTYPE html>\n' +
                '<html lang="en">\n' +
                '<head>\n' +
                '    <meta charset="UTF-8">\n' +
                '    <title>Login Page</title>\n' +
                '    <link rel="stylesheet" type="text/css" href="style.css"> <!-- Link to external CSS file -->\n' +
                '</head>\n' +
                '<body>\n' +
                '    <div class="login-container">\n' +
                '        <h2>Login</h2>\n' +
                '        <form>\n' +
                '            <div class="form-group">\n' +
                '                <label for="username">Username:</label>\n' +
                '                <input type="text" id="username" name="username" placeholder="Enter your username" required>\n' +
                '            </div>\n' +
                '            <div class="form-group">\n' +
                '                <label for="password">Password:</label>\n' +
                '                <input type="password" id="password" name="password" placeholder="Enter your password" required>\n' +
                '            </div>\n' +
                '            <button type="submit">Login</button>\n' +
                '        </form>\n' +
                '    </div>\n' +
                '</body>\n' +
                '</html>\n',
            click: 'https://example.com/template1',
        },
        {
            id: 2,
            name: "smkit",
            like:2,
            downloads:0,
            html: '<p>This is a sample template 2.</p>',
            click: 'https://example.com/template2',
        },
        {
            id: 3,
            name: "smkit",
            like:2,
            downloads:0,
            html: '<p>This is a sample template 3.</p>',
            click: 'https://example.com/template3',
        },
        {
            id: 1, name: "smkit",
            like:2,
            downloads:0,            html: '<!DOCTYPE html>\n' +
                '<html lang="en">\n' +
                '<head>\n' +
                '    <meta charset="UTF-8">\n' +
                '    <title>Login Page</title>\n' +
                '    <link rel="stylesheet" type="text/css" href="style.css"> <!-- Link to external CSS file -->\n' +
                '</head>\n' +
                '<body>\n' +
                '    <div class="login-container">\n' +
                '        <h2>Login</h2>\n' +
                '        <form>\n' +
                '            <div class="form-group">\n' +
                '                <label for="username">Username:</label>\n' +
                '                <input type="text" id="username" name="username" placeholder="Enter your username" required>\n' +
                '            </div>\n' +
                '            <div class="form-group">\n' +
                '                <label for="password">Password:</label>\n' +
                '                <input type="password" id="password" name="password" placeholder="Enter your password" required>\n' +
                '            </div>\n' +
                '            <button type="submit">Login</button>\n' +
                '        </form>\n' +
                '    </div>\n' +
                '</body>\n' +
                '</html>\n',
            click: 'https://example.com/template1',
        },
        {
            id: 2,
            name: "smkit",
            like:2,
            downloads:0,
            html: '<p>This is a sample template 2.</p>',
            click: 'https://example.com/template2',
        },
        {
            id: 3,
            name: "smkit",
            like:2,
            downloads:0,
            html: '<p>This is a sample template 3.</p>',
            click: 'https://example.com/template3',
        },
        {
            id: 1,
            name: "smkit",
            like:2,
            downloads:0,
            html: '<!DOCTYPE html>\n' +
                '<html lang="en">\n' +
                '<head>\n' +
                '    <meta charset="UTF-8">\n' +
                '    <title>Login Page</title>\n' +
                '    <link rel="stylesheet" type="text/css" href="style.css"> <!-- Link to external CSS file -->\n' +
                '</head>\n' +
                '<body>\n' +
                '    <div class="login-container">\n' +
                '        <h2>Login</h2>\n' +
                '        <form>\n' +
                '            <div class="form-group">\n' +
                '                <label for="username">Username:</label>\n' +
                '                <input type="text" id="username" name="username" placeholder="Enter your username" required>\n' +
                '            </div>\n' +
                '            <div class="form-group">\n' +
                '                <label for="password">Password:</label>\n' +
                '                <input type="password" id="password" name="password" placeholder="Enter your password" required>\n' +
                '            </div>\n' +
                '            <button type="submit">Login</button>\n' +
                '        </form>\n' +
                '    </div>\n' +
                '</body>\n' +
                '</html>\n',
            click: 'https://example.com/template1',
        },
        {
            id: 2,
            name: "smkit",
            like:2,
            downloads:0,
            html: '<p>This is a sample template 2.</p>',
            click: 'https://example.com/template2',
        },
        {
            id: 3,
            name: "smkit",
            like:2,
            downloads:0,
            html: '<p>This is a sample template 3.</p>',
            click: 'https://example.com/template3',
        },
        {
            id: 1,
            name: "smkit",
            like:2,
            downloads:0,
            html: '<!DOCTYPE html>\n' +
                '<html lang="en">\n' +
                '<head>\n' +
                '    <meta charset="UTF-8">\n' +
                '    <title>Login Page</title>\n' +
                '    <link rel="stylesheet" type="text/css" href="style.css"> <!-- Link to external CSS file -->\n' +
                '</head>\n' +
                '<body>\n' +
                '    <div class="login-container">\n' +
                '        <h2>Login</h2>\n' +
                '        <form>\n' +
                '            <div class="form-group">\n' +
                '                <label for="username">Username:</label>\n' +
                '                <input type="text" id="username" name="username" placeholder="Enter your username" required>\n' +
                '            </div>\n' +
                '            <div class="form-group">\n' +
                '                <label for="password">Password:</label>\n' +
                '                <input type="password" id="password" name="password" placeholder="Enter your password" required>\n' +
                '            </div>\n' +
                '            <button type="submit">Login</button>\n' +
                '        </form>\n' +
                '    </div>\n' +
                '</body>\n' +
                '</html>\n',
            click: 'https://example.com/template1',
        },

    ]
    const handleButtonClick = (url) => {
        window.open(url, '_blank'); // Open link in a new tab
    };

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
        const walk = (x - startX.current) * 2; // Control scrolling speed
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
                            <li key={index}>
                                <div className="inner">
                                    <div className='m-4 h-60 border-2 shadow-black hover:m-2 rounded-2xl'>
                                    <div className="htmltag" dangerouslySetInnerHTML={{__html: image.html}}/>
                                    </div>
                                    <div className='ml-10 -mt-3 inline'>
                                        <h6>{image.name}</h6>
                                       <button>likes</button>
                                        <p>{image.like}</p>
                                    </div>
                                    <div className="button-container">
                                    <button onClick={() => handleButtonClick(image.click)}>Click me</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No templates found.</p> // Fallback message if no templates
                )}
            </div>
        </div>
    );
};

export default FetchTemplate;
