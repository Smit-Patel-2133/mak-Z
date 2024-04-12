import React from 'react';
import FetchTemplate from '../Single template/FetchTemplate';
import Header from "../Header/Header.jsx"; // Importing FetchTemplate component

const Templates = () => {
    // Array of image objects with HTML code
    const images = [
        {
            id: 1,
            html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive HTML with CSS</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: Arial, sans-serif;
        }

        header {
            background-color: #333;
            color: #fff;
            padding: 10px;
            text-align: center;
        }

        nav ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }

        nav ul li {
            display: inline;
            margin-right: 10px;
        }

        nav ul li a {
            color: #fff;
            text-decoration: none;
            padding: 5px 10px;
        }

        main {
            padding: 20px;
        }

        section {
            margin-bottom: 20px;
            padding: 20px;
            border: 1px solid #ccc;
        }

        footer {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 10px;
        }

        /* Responsive styles */
        @media screen and (max-width: 600px) {
            header, nav ul, nav ul li, nav ul li a, main, section, footer {
                padding: 5px;
                font-size: 14px;
            }
        }
    </style>
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section id="home">
            <h2>Home Section</h2>
            <p>This is the home section of the website.</p>
        </section>
        <section id="about">
            <h2>About Section</h2>
            <p>This is the about section of the website.</p>
        </section>
        <section id="services">
            <h2>Services Section</h2>
            <ul>
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
            </ul>
        </section>
        <section id="contact">
            <h2>Contact Section</h2>
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required><br>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required><br>
                <label for="message">Message:</label><br>
                <textarea id="message" name="message" rows="4" required></textarea><br>
                <button type="submit">Submit</button>
            </form>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 My Website. All rights reserved.</p>
    </footer>
</body>
</html>
`,
            alt: 'Image 1',
            click: "https://www.youtube.com",
            text: "this is image about lake"
        },

        // Add more image objects as needed with HTML code
    ];

    return (
        <div>
            <Header/>
            <FetchTemplate images={images} templateHeading={'example'} /> {/* Pass images array as prop */}
        </div>
    );
};

export default Templates;
