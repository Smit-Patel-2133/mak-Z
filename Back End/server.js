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

app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));

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
app.post('/api/signup', async (req, res) => {
    const { name, email, password } = req.body;
    const defaultProfilePicture = 1; // Default profile picture ID or reference

    try {
        // Check if the email is already registered
        const existingUser = await sql`SELECT * FROM users WHERE email = ${email}`;
        if (existingUser.length > 0) {
            return res.status(400).json({ error: 'User already registered', details: 'Email is already in use' });
        }

        // Insert the new user with the default profile picture
        await sql`INSERT INTO users (username, email, password, profile_pic) VALUES (${name}, ${email}, ${password}, ${defaultProfilePicture})`;

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
    codeData += req.body.code.toString().replaceAll('contenteditable="true"','').replaceAll('editableBorder','').replaceAll('class="editable active" ','');
    codeData += `   </body>
                </html>`;
    codeData = beautify(codeData, { indent_size: 4 });
    const filePath = path.join(__dirname, '../../mak-Z.html');

    fs.appendFile(filePath, codeData, { encoding: 'utf8', flag: 'a+' }, async (err) => {
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

app.post('/save', async (req, res) => {
    try {
        const filePath = path.join(__dirname, '../../mak-Z.html');
        const fileData = fs.readFileSync(filePath);
        const templat_name=(req.body.templateName=='') ? 'Mak-Z' : req.body.templateName;
        const templat_label=(req.body.templateLabel=='') ? 'none' : req.body.templateLabel;
        const templat_visibility=(req.body.templateType=='public') ? true : false
        const timestamp = Date.now();
        let templateId=templat_name.substring(0,2)
        templateId+=templat_label.substring(0,2)
        templateId+=(templat_visibility) ? 't' : 'f'
        templateId+='_'+timestamp.toString().substring(2,8)
        await sql`INSERT INTO template (email, templatehtmlfile, templateimage, templateid, templatename, templatetype, templatevisibility) VALUES (${req.body.userEmail},${fileData},${req.body.imageOfTemplate},${templateId},${templat_name},${templat_label},${templat_visibility})`;
        res.status(200).send('File Saved');
    }catch(error){
        console.log('Error at catch block: '+error);
        res.status(500).send('Problem in File Saved');
    }
});

app.delete('/delete/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, '../../mak-Z.html');
    fs.unlink(filePath, async (err) => {
        if (err) {
            console.error('Error deleting file:', err);
            res.status(500).send('Error deleting file');
        } else {
            console.log('File deleted successfully:', filename);
            res.status(200).send('File deleted successfully');
        }
    });
});

// Placing logs to track the request flow
app.post('/fetchThis', async (req, res) => {
    const templateType = req.body.type; // Extract template type from request body
    if (!templateType) {
        return res.status(400).json({ error: 'Missing template type in request body' });
    }

    try {
        // Fetching templates and user information with a JOIN operation
        const result = await sql`
            SELECT
              template.templateid,
              template.templatename,
              template.templatelikes,
              template.templatedownloads,
              template.templatevisibility,
              template.templateimage,
              users.profile_pic,
              users.username
            FROM
              template
            JOIN
              users
            ON
              template.email = users.email
            WHERE
              template.templatetype = ${templateType}
        `;

        if (result.length === 0) {
            return res.status(404).json({ error: 'No templates found for the specified type' });
        }

        // Extracting and structuring the response data
        const templates = result.map(row => ({
            id: row.templateid,
            name: row.templatename,
            likes: row.templatelikes,
            downloads: row.templatedownloads,
            visibility: row.templatevisibility,
            htmlImg: row.templateimage,
            profilePic: row.profile_Pic, // User's profile picture
            username: row.username       // User's username
        }));
        console.log("templates:-",templates);
        res.status(200).json(templates); // Send the response back to the client
    } catch (error) {
        console.error('Error fetching templates:', error);
        res.status(500).json({ error: 'An error occurred while fetching templates' });
    }
});

app.post('/fetchThis/forhome', async (req, res) => {
    try {
        // Fetching templates and associated user information from the database with a JOIN operation
        const result = await sql`
            SELECT
              template.templateid,
              template.templatename,
              template.templatelikes,
              template.templatedownloads,
              template.templatevisibility,
              template.templateimage,
              users.profile_pic,
              users.username
            FROM
              template
            JOIN
              users
            ON
              template.email = users.email
        `;

        if (result.length === 0) {
            return res.status(404).json({ error: 'No templates found' });
        }

        // Map the fetched data to a structured format
        const templates = result.map(row => ({
            id: row.templateid,
            name: row.templatename,
            likes: row.templatelikes,
            downloads: row.templatedownloads,
            visibility: row.templatevisibility,
            htmlImg: row.templateimage, // Ensure correct MIME type
            profilePic: row.profile_pic, // User's profile picture
            username: row.username       // User's username
        }));

        res.status(200).json(templates); // Send the response with the structured templates data
    } catch (error) {
        console.error('Error fetching templates:', error);
        res.status(500).json({ error: 'An error occurred while fetching templates' });
    }
});

app.post('/fetchThis/userProjects', async (req, res) => {
    const { email } = req.body; // Get the email from the request body

    try {
        const result = await sql`SELECT * FROM template WHERE email = ${email}`; // Filter by email
        if (result.length === 0) {
            return res.status(404).json({ error: 'No projects found for the specified email' });
        }

        const templates = result.map(row => {

            return {
                id: row.templateid,
                name: row.templatename,
                likes: row.templatelikes,
                downloads: row.templatedownloads,
                visibility: row.templatevisibility,
                htmlImg: row.templateimage // Ensure correct MIME type
            };
        });
        console.log("templates",templates)
        res.status(200).json(templates); // Return the fetched projects
    } catch (error) {
        console.error('Error fetching user projects:', error);
        res.status(500).json({ error: 'An error occurred while fetching user projects' });
    }
});
// Endpoint to get user details
app.get('/user/details', async (req, res) => {
    const {email} = req.query;
    let emailid = email
    console.log("comming email:", emailid)
    try {
        const user = await sql`SELECT * FROM users WHERE email=${emailid}`;
        if (user.length === 0) {
            return res.status(404).json({error: 'Not found', message: 'User not found'});
        }
        const {username, email, profile_pic} = user[0];
        console.log("username:-", username, "email:-", email, "pro pic:", profile_pic)
        res.json({username, email, profile_pic});
    } catch (error) {
        console.error('Error fetching user details:', error);
        res.status(500).json({error: 'Internal server error', details: error.message});
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
