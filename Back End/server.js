// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const connection = require('./db');

app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
});

// Endpoint to add user
app.post('/SignUp', (req, res) => {
    const { name, email, password } = req.body;

    // Check if the email already exists in the database
    connection.query('SELECT * FROM users WHERE email = ?', [email], (error, results) => {
        if (error) {
            console.error('Error checking email:', error);
            res.status(500).json({ error: 'Internal server error', details: error.message });
            return;
        }

        // If the email already exists, send a response indicating the user is already registered
        if (results.length > 0) {
            res.status(400).json({ error: 'User already registered', details: 'Email is already in use' });
            return;
        }

        // If the email doesn't exist, insert the new user into the database
        connection.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password], (error, results) => {
            if (error) {
                console.error('Error adding user:', error);
                res.status(500).json({ error: 'Internal server error', details: error.message });
                return;
            }
            console.log('User added successfully');
            // Send success response
            res.json({ message: 'User added successfully' });
        });
    });
});

app.post('/Login',(req,res)=>{

})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
