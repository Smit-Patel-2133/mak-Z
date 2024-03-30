const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sql = require('./db');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
});

// Endpoint to handle user sign-up
app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await sql`SELECT * FROM users WHERE email = ${email}`;
        if (existingUser.length > 0) {
            return res.status(400).json({ error: 'User already registered', details: 'Email is already in use' });
        }

        await sql`INSERT INTO users (name, email, password) VALUES (${name}, ${email}, ${password})`;

        console.log('User added successfully');
        res.json({ message: 'User added successfully' });
    } catch (error) {
        console.error('Error adding user:', error);
        res.status(500).json({ error: 'Internal server error', details: error.message });
    }
});

// Endpoint to handle user login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await sql`SELECT * FROM users WHERE email = ${email} AND password = ${password}`;
        if (user.length === 0) {
            return res.status(401).json({ error: 'Unauthorized', message: 'Incorrect email or password' });
        }

        res.json({ message: 'Login successful' });
    } catch (error) {
        console.error('Error checking email and password:', error);
        res.status(500).json({ error: 'Internal server error', details: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
