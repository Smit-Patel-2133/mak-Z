const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const sql = require('./db');

const app = express();
app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

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

app.post('/download', async (req, res) => {
    const codeData = req.body.code;
    const filePath = path.join(__dirname, '../../mak-Z.html');

    fs.appendFile(filePath, codeData, { encoding: 'utf8', flag: 'a+' }, (err) => {
        if (err) {
            console.error('Error appending data to file:', err);
            return res.status(500).send('Internal Server Error');
        }

        console.log('Data appended to file successfully.');

        const options = {
            headers: {
                'Content-Type': 'text/html'
            }
        };

        res.set('Content-Type', 'text/html');

        res.sendFile(filePath, options, (err) => {
            if (err) {
                console.error('Error downloading file:', err);
                return res.status(500).send('Internal Server Error');
            }
        });
    });
});

app.delete('/delete/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, '../../mak-Z.html');
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error('Error deleting file:', err);
            res.status(500).send('Error deleting file');
        } else {
            console.log('File deleted successfully:', filename);
            res.status(200).send('File deleted successfully');
        }
    });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
