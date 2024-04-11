const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const beautify = require('js-beautify').html;
const sql = require('./db'); // Import the sql function from db.js
const multer = require('multer'); // Import multer for handling file uploads

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

// Nodemailer transporter setup with SMTP
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'mak.z.official07@gmail.com', // Replace with your Gmail email
        pass: 'kanfzuupxeepxsih' // Replace with your Gmail password
    }
});

// Temporary storage for OTPs (in a production environment, consider using a database)
let otpStorage = {};

// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/') // Destination folder for storing uploaded files
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname) // Use the original file name
    }
});

// Create multer instance with storage configuration
const upload = multer({ storage: storage });

// Endpoint to send OTP to the user's email
app.post('/api/send-otp', async (req, res) => {
    const { email } = req.body;

    try {
        // Check if the email exists in the database
        const existingUser = await sql`SELECT * FROM users WHERE email = ${email}`;
        if (existingUser.length === 0) {
            // If user does not exist, send a message that the user doesn't exist
            return res.status(404).json({ success: false, error: 'User not found' });
        }

        // Generate OTP (For simplicity, you can use a random 6-digit number)
        const generatedOTP = Math.floor(100000 + Math.random() * 900000);

        // Store the OTP in memory (for verification later)
        otpStorage[email] = generatedOTP;

        // Send OTP to the user's email
        await sendEmail(email, generatedOTP);

        res.json({ success: true });
    } catch (error) {
        console.error('Error sending OTP:', error);
        res.status(500).json({ success: false, error: 'Failed to send OTP. Please try again later.' });
    }
});

// Function to send email using SMTP
const sendEmail = async (email, otp) => {
    try {
        const mailOptions = {
            from: 'mak.z.official07@gmail.com', // Your Gmail address
            to: email,
            subject: 'OTP for Password Reset',
            text: `Your OTP for password reset is: ${otp}`
        };

        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        throw new Error('Error sending email: ' + error.message);
    }
};

// Endpoint to verify the entered OTP
app.post('/api/verify-otp', async (req, res) => {
    const { email, otp } = req.body;

    try {
        const storedOTP = otpStorage[email];

        if (!storedOTP || storedOTP !== otp) {
            return res.json({ success: false, message: 'Invalid OTP' });
        }

        // OTP verification successful, remove OTP from storage
        delete otpStorage[email];

        res.json({ success: true });
    } catch (error) {
        console.error('Error verifying OTP:', error);
        res.status(500).json({ success: false, error: 'Failed to verify OTP. Please try again later.' });
    }
});

// Endpoint to update the password
app.post('/api/update-password', async (req, res) => {
    const { email, newPassword } = req.body;

    try {
        // Update the password in the database for the user with the specified email
        await sql`UPDATE users SET password = ${newPassword} WHERE email = ${email}`;

        res.json({ success: true });
    } catch (error) {
        console.error('Error updating password:', error);
        res.status(500).json({ success: false, error: 'Failed to update password. Please try again later.' });
    }
});

// Endpoint to handle user sign-up with file upload
app.post('/api/signup', upload.single('profilePicture'), async (req, res) => {
    const { name, email, password } = req.body;
    const profilePicture = req.file ? req.file.buffer : null; // Get profile picture buffer

    try {
        // Check if the email is already registered
        const existingUser = await sql`SELECT * FROM users WHERE email = ${email}`;
        if (existingUser.length > 0) {
            return res.status(400).json({ error: 'User already registered', details: 'Email is already in use' });
        }

        // Insert the new user into the database along with profile picture
        await sql`INSERT INTO users (username, email, password, profile_picture) VALUES (${name}, ${email}, ${password}, ${profilePicture})`;

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
    let codeData =`<!DOCTYPE html>
                    <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Mak-Z</title>
                            <!-- Bootstrap CSS -->
                            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
                        </head>
                    <body>`;
    codeData += req.body.code.toString().replaceAll('contenteditable="true"','').replaceAll('class="editable" ','').replaceAll('class="editable active" ','');
    codeData += `   </body>
                </html>`;
    codeData = beautify(codeData, { indent_size: 4 });  
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
