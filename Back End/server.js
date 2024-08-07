const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cheerio = require('cheerio'); //for reading html file
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
    console.log("hhhh")
    try {
        // Check if the email exists in the database
        const existingUser = await sql`SELECT * FROM users WHERE email = ${email}`;
        if (existingUser.length === 0) {
            // If user does not exist, send a message that the user doesn't exist
            console.log("ddd")
            return res.status(404).json({ success: false, error: 'User not found' });
        }

        // Generate OTP (For simplicity, you can use a random 6-digit number)
        const generatedOTP = Math.floor(100000 + Math.random() * 900000);

        // Store the OTP in memory (for verification later)
        otpStorage[email] = generatedOTP;
        console.log("haaassss");
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
    codeData += req.body.code.toString().replaceAll('contenteditable="true"','').replaceAll('editableBorder','').replaceAll('class="editable active" ','').replaceAll("forCursorGrab","").replaceAll('activeElementClass','').replaceAll('draggable="true"','');
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
        if(req.body.templateId==undefined){
            const templat_name=(req.body.templateName=='') ? 'Mak-Z' : req.body.templateName;
            const templat_label=(req.body.templateLabel=='') ? 'none' : req.body.templateLabel;
            const templat_visibility=(req.body.templateType=='public') ? true : false;
            const timestamp = Date.now();
            let generatedTemplateId=templat_name.substring(0,2)
            generatedTemplateId+=templat_label.substring(0,2)
            generatedTemplateId+=(templat_visibility) ? 't' : 'f'
            generatedTemplateId+='_'+timestamp.toString().substring(2,8)
            await sql`INSERT INTO template (email, templatehtmlfile, templateimage, templateid, templatename, templatetype, templatevisibility) VALUES (${req.body.userEmail},${fileData},${req.body.imageOfTemplate},${generatedTemplateId},${templat_name},${templat_label},${templat_visibility})`;
            res.status(200).send('File Saved');
        }else{
            const templat_visibility=(req.body.templateType=='public') ? true : false
            await sql `UPDATE template SET templatehtmlfile = ${fileData}, templateimage = ${req.body.imageOfTemplate}, templatename=${req.body.templateName}, templatetype=${req.body.templateLabel}, templatevisibility=${templat_visibility} WHERE templateid = ${req.body.templateId}`;
            res.status(200).send('File Updated');
        }
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
    const { type, userEmail } = req.body; // Extract template type and user email from request body

    if (!type) {
        return res.status(400).json({ error: 'Missing template type in request body' });
    }

    try {
        // Fetching templates with JOIN and excluding those created by the current user
        const result = await sql`
            SELECT
              template.templateid,
              template.templatename,
              
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
            template.templatevisibility=true
            AND template.reported=false 
            AND template.templatetype = ${type}
            AND template.email != ${userEmail}
        `;

        if (result.length === 0) {
            return res.status(404).json({ error: 'No templates found for the specified type' });
        }

        const templates = result.map((row) => ({
            id: row.templateid,
            name: row.templatename,
            downloads: row.templatedownloads,
            visibility: row.templatevisibility,
            htmlImg: row.templateimage,
            profilePic: row.profile_pic,
            username: row.username,
        }));

        res.status(200).json(templates); // Send the templates back to the client
    } catch (error) {
        console.error('Error fetching templates:', error);
        res.status(500).json({ error: 'An error occurred while fetching templates' });
    }
});


app.post('/fetchThis/forhome', async (req, res) => {
    const { userEmail } = req.body;

    try {
        const result = await sql`
            SELECT
              template.templateid,
              template.templatename,
              template.templatedownloads,
              template.templatevisibility,
              template.templateimage,
              users.username
            FROM
              template
            JOIN
              users
            ON
              template.email = users.email
            WHERE
              template.templatevisibility = true
              AND template.reported = false
              ${userEmail ? sql`AND template.email != ${userEmail}` : sql``}
            ORDER BY RANDOM()
            LIMIT 10
        `;

        if (result.length === 0) {
            return res.status(404).json({ error: 'No templates found' });
        }

        const templates = result.map((row) => ({
            id: row.templateid,
            name: row.templatename,
            downloads: row.templatedownloads,
            visibility: row.templatevisibility,
            htmlImg: row.templateimage,
            username: row.username,
        }));

        res.status(200).json(templates);
    } catch (error) {
        console.error('Error fetching templates:', error);
        res.status(500).json({ error: 'An error occurred while fetching templates' });
    }
});

app.post('/fetchThis/userProjects', async (req, res) => {
    const { email } = req.body; // Get the email from the request body
    try {
        const result = await sql`
            SELECT templateid,templatename,templatedownloads,templatevisibility,templateimage FROM template WHERE email = ${email}`;
        if (result.length === 0) {
            return res.status(404).json({ error: 'No projects found for the specified email' });
        }
        const templates = result.map(row => {
            return {
                id: row.templateid,
                name: row.templatename,
                downloads: row.templatedownloads,
                visibility: row.templatevisibility,
                htmlImg: row.templateimage // Ensure correct MIME type
            };
        });
        res.status(200).json(templates); // Return the fetched projects
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching user projects' });
    }
});

// Endpoint to get user details
app.get('/user/details', async (req, res) => {
    const {email} = req.query;
    let emailid = email
    try {
        const user = await sql`SELECT * FROM users WHERE email=${emailid}`;
        if (user.length === 0) {
            return res.status(404).json({error: 'Not found', message: 'User not found'});
        }
        const {username, email, profile_pic} = user[0];
        res.json({username, email, profile_pic});
    } catch (error) {
        res.status(500).json({error: 'Internal server error', details: error.message});
    }
});

app.post('/fetchCodeFromId', async(req,res)=>{
    const id=req.body.templateId;
    let htmlFile = await sql`SELECT templatehtmlfile FROM template WHERE templateid = ${id}`;
    if(htmlFile.length===0 || htmlFile[0].templatehtmlfile==null){
        console.log('Html file not found...');
        res.status(404).send('Html file not found...');
    }else{
        try {
            const bytes = htmlFile[0].templatehtmlfile; // Fetch bytes from the database
            const filePath = path.join(__dirname, '../../mak-Z.html'); // File path where the HTML file will be written
            await bytesToFile(bytes, filePath);
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            const $ = cheerio.load(fileContent);
            const pageBodyContent = $('.pageBody').html();
            const minHeightBody=$('.pageBody').css('min-height');
            res.send({pageBodyContent,minHeightBody});
        } catch (error) {
            console.error('Error:', error);
        }
    }
});
function bytesToFile(bytes, filePath) {
    return new Promise((resolve, reject) => {
        // Create a buffer from the bytes
        const buffer = Buffer.from(bytes, 'binary');
        // Write the buffer to a file
        fs.writeFile(filePath, buffer, 'binary', (error) => {
            if (error) {
                reject(error);
            } else {
                resolve();
            }
        });
    });
}


app.post('/createNewProject', async (req, res) => {
    try {
        const { email, templateName, templateType, templateVisibility } = req.body;

        // Generate template ID
        const timestamp = Date.now();
        const generatedTemplateId = `${templateName.substring(0, 2)}${templateType.substring(0, 2)}${templateVisibility ? 't' : 'f'}_${timestamp.toString().substring(2, 8)}`;

        // Insert data into the database with placeholder values for templatehtmlfile and templateimage
        await sql`
            INSERT INTO template (email, templatehtmlfile, templateimage, templateid, templatename, templatetype, templatevisibility)
            VALUES (${email}, ${null}, ${null}, ${generatedTemplateId}, ${templateName}, ${templateType}, ${templateVisibility})
        `;

        res.status(200).json({ message: 'File Saved', projectId: generatedTemplateId });
    } catch (error) {
        console.error('Error creating project:', error);
        res.status(500).json({ error: 'Problem in File Saved' });
    }
});

app.post('/copyProject', async (req, res) => {
    try {
        const { id, templateName, templateType, templateVisibility, email } = req.body;
        console.log("templateName:", templateName);
        console.log("templateType:", templateType);
        console.log("templateVisibility:", templateVisibility);
        // Assuming you're using some library like 'sql-template-strings'
        const result = await sql`SELECT templatehtmlfile, templateimage FROM template WHERE templateid = ${id}`;
        console.log("1 is exe")
        // Extracting templatehtmlfile and templateimage from the result
        const { templatehtmlfile, templateimage } = result[0];

        // Generating template ID
        const timestamp = Date.now();
        let generatedTemplateId = templateName.substring(0, 2) +
            templateType.substring(0, 2) +
            (templateVisibility ? 't' : 'f') +
            '_' + timestamp.toString().substring(2, 8);


        // Inserting data into the database
        await sql`
            INSERT INTO template (templatename, templatetype, templatevisibility, email, templatehtmlfile, templateimage, templateid)
            VALUES (${templateName}, ${templateType}, ${templateVisibility}, ${email}, ${templatehtmlfile}, ${templateimage}, ${generatedTemplateId})
        `;
        console.log("2 is exe")


        res.json({ generatedTemplateId });
    } catch (e) {
        // Handle any errors
        console.error('Error copying project:', e);
        // Sending an error response if something goes wrong
        res.status(500).json({ error: 'Internal server error' });
    }
});





app.post('/getInfoForTemplate', async (req,res)=>{
    const info = await sql`SELECT templateid,templatename,templatetype,templatevisibility FROM template WHERE email = ${req.body.userEmail}`;
    res.send(info)
});

app.post('/getInfoForUserImage', async (req,res)=>{
    const info = await sql`SELECT profile_pic FROM users WHERE email = ${req.body.userEmail}`;
    res.send(info)
});

app.post('/deleteTemplateFromProfile', async (req,res)=>{
    try{
        await sql`DELETE FROM template WHERE templateid = ${req.body.deleteId}`;
        res.status(200).send('deleted');
    }catch(error){
        console.error(error);
    }
});

app.post('/createNewTemplate', async (req,res)=>{
    try{
        const templat_name=(req.body.projectName=='') ? 'Mak-Z' : req.body.projectName;
        const templat_label=(req.body.projectType=='') ? 'none' : req.body.projectType;
        const templat_visibility=(req.body.visibility=='public') ? true : false
        const timestamp = Date.now();
        let generatedTemplateId=templat_name.substring(0,2)
        generatedTemplateId+=templat_label.substring(0,2)
        generatedTemplateId+=(templat_visibility) ? 't' : 'f'
        generatedTemplateId+='_'+timestamp.toString().substring(2,8)
        await sql`INSERT INTO template (email, templateid, templatename, templatetype, templatevisibility) VALUES (${req.body.userEmail},${generatedTemplateId},${templat_name},${templat_label},${templat_visibility})`;
        res.status(200).send(generatedTemplateId);
    }catch(error){
        console.error(error);
    }
});

app.post('/getTemplateInfoForEditPage', async (req,res)=>{
    try{
        const info = await sql`SELECT templatename,templatetype,templatevisibility FROM template WHERE templateid = ${req.body.projectId}`;
        res.send(info)
    }catch(error){
        console.error('Error in getTemplateInfoForEditPage '+error);
    }
});


app.post('/changeUserProfile', async (req,res)=>{
    try{
        await sql `UPDATE users SET profile_pic = ${req.body.userProfileOption}, username = ${req.body.newName} WHERE email = ${req.body.userEmail}`;
        res.status(200).send('update');
    }catch(error){
        console.error('Error in changeUserProfile '+error);
    }
});
app.post("/api/report", async (req, res) => {
    const { templateId, userEmail, reportDescription } = req.body;

    try {
        // First, retrieve the creator's email from the template table
        const creator = await sql`
            SELECT email
            FROM template
            WHERE templateid = ${templateId}
        `;

        if (creator.count === 0) {
            return res.status(404).send('Template not found');
        }

        const creatorEmail = creator[0].email; // Assuming the query returns at least one result

        // Update the template's reported status
        await sql`UPDATE template SET reported = true WHERE templateid = ${templateId}`;

        // Insert the report details into the reportedtemplate table
        await sql`
            INSERT INTO reportedtemplate (description, email, reported_to, templateid)
            VALUES (${reportDescription}, ${userEmail}, ${creatorEmail}, ${templateId})
        `;

        res.status(200).send('Report submitted successfully');
    } catch (error) {
        console.error('Error handling report submission:', error);
        res.status(500).send('Failed to submit report');
    }
});


app.post('/addFeedbacks', async (req,res)=>{
    try{
        await sql`INSERT INTO feedback (email, name, feedback, profilePic) VALUES (${req.body.email}, ${req.body.name}, ${req.body.feedback}, ${req.body.profilePic})`;
        res.status(200).send('Feedback Added');
        console.log('feedback added...')
    }catch(error){
        console.error('Error in addFeedbacks '+error);
    }
});

app.post('/getFeedbacks', async (req,res)=>{
    try{
        let feedback=await sql`SELECT name, profilePic, feedback 
        FROM feedback 
        WHERE email != 'Mak-Z@gmail.com';`;
        res.status(200).send(feedback);
    }catch(error){
        console.error('Error in getFeedbacks '+error);
    }
});
// Endpoint to fetch user count
app.post('/api/getUserCount', async (req, res) => {
    try {
        const userCount = await sql`SELECT COUNT(*) AS count FROM users`;
        res.status(200).json({ userCount: userCount[0].count });
    } catch (error) {
        console.error('Error in /api/getUserCount:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.post('/api/getTemplateCount', async (req, res) => {
    try {
        // Correcting the SQL query to count rows in the 'template' table
        const templateCount = await sql`SELECT COUNT(*) AS count FROM template`;
        console.log(templateCount[0].count);  // Logging the correct property

        res.status(200).json({ TemplateCount: templateCount[0].count });
    } catch (error) {
        console.error('Error in /api/getTemplateCount:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// Endpoint to fetch template downloads count
app.post('/api/getTemplateDownloadsCount', async (req, res) => {
    try {

        const templateDownloadsCount = await sql`SELECT SUM(templatedownload) AS totalDownloads FROM template`;

        // Accessing the total downloads count
        const totalDownloads = templateDownloadsCount[0].totaldownloads;
        console.log("Total Downloads:", totalDownloads);

        res.status(200).json({ templateDownloadsCount: totalDownloads });
    } catch (error) {
        console.error('Error in /api/getTemplateDownloadsCount:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Endpoint to fetch reported templates
app.post('/api/getReportedTemplates', async (req, res) => {
    try {
        const reportedTemplates = await sql`
            SELECT templateid, email, reported_to, description
            FROM reportedtemplate
        `;
        res.status(200).json({ reportedTemplates: reportedTemplates });
    } catch (error) {
        console.error('Error in /api/getReportedTemplates:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



// Add this route to your backend
app.post('/api/templateHtml', async (req, res) => {
    const { templateId } = req.body;

    try {
        const templateImageResult = await sql`
            SELECT templateimage
            FROM template
            WHERE templateid = ${templateId}
        `;

        const base64Image = templateImageResult[0].templateimage.toString('base64');
        console.log("Image Base64:", base64Image);
        // Send the base64 string in the response
        res.status(200).json({ templateImage: base64Image });
    } catch (error) {
        console.error('Error in /api/templateHtml:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});




app.post('/downloadCount', async (req, res) => {
    const { templateId } = req.body;
    try {
        await sql`UPDATE template SET templatedownload = templatedownload + 1 WHERE templateid = ${templateId}`;
        res.status(200).json({ message: 'Download count incremented successfully.' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/addHomeSlider', async (req, res) => {
    try {
        let result=await sql`
            SELECT templateid AS id, templatename AS name, templatevisibility AS visibility, templatetype AS name, templateimage
            FROM template
            ORDER BY templatedownload DESC
            LIMIT 5;
            `;
        res.status(200).send(result);
    } catch (error) {
        console.log('end')
        console.error('Error in addHomeSlider:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.post('/api/updateValidityStatus', async (req, res) => {
    const { valid, id } = req.body;
    console.log("hshhssh")
    console.log(valid);
    try {
        if (!valid) { // Use `valid` instead of `isValid`
            let result = await sql`DELETE FROM reportedtemplate WHERE templateid = ${id}`;
            console.log("mid");
            let result2 = await sql`UPDATE templates SET report = false WHERE templateid = ${id}`;
            res.status(200).send({ result, result2 });
        } else {
            let result = await sql`DELETE FROM reportedtemplate WHERE templateid = ${id}`; // Use `id` instead of `templateId`
            res.status(200).send(result);
        }
    } catch (error) {
        console.error('Error updating validity status:', error);
        res.status(500).send('Internal Server Error');
    }
});



app.post('/addContacts', async (req, res) => {
    const { name,email,message } = req.body;
    try {
        await sql`
        INSERT INTO contact (email, name, message) 
        VALUES (${email}, ${name}, ${message})`;
        res.status(200).json({ message: 'contect add successfully' });
    } catch (error) {
        console.error('Error in addContacts:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.post('/api/feedback', async (req, res) => {
    try {
        const result = await sql`SELECT email, name, feedback FROM feedback`;
        res.status(200).json({ feedback: result });
    } catch (e) {
        console.error('Error fetching feedback:', e);
        res.status(500).send('Server error');
    }
});
// Fetch contact data
app.post('/api/getContactUs', async (req, res) => {
    try {
        const result = await sql`SELECT id, email, name, message FROM contact`;
        res.status(200).json({ contact: result });
    } catch (e) {
        res.status(500).json({ error: 'Failed to fetch contact data' });
    }
});
app.post('/api/sendEmailAndDelete', async (req, res) => {
    const { id, email, message } = req.body;

    try {
        // Check if the contact entry exists in the database
        const existingContact = await sql`SELECT * FROM contact WHERE id = ${id}`;
        if (existingContact.length === 0) {
            return res.status(404).json({ success: false, error: 'Contact entry not found' });
        }

        // Send email using existing transporter
        let mailOptions = {
            from: 'mak.z.official07@gmail.com',
            to: email,
            subject: 'Response to your message',
            text: message
        };
        await transporter.sendMail(mailOptions);

        // Delete entry from database
        await sql`DELETE FROM contact WHERE id = ${id}`;

        res.status(200).json({ success: true, message: 'Email sent and contact entry deleted' });
    } catch (error) {
        console.error('Error sending email and deleting entry:', error);
        res.status(500).json({ success: false, error: 'Failed to send email and delete entry. Please try again later.' });
    }
});
app.post('/api/DeleteContectRequest',async (req,res)=>{
    const {id}=req.body;
    try{
    await  sql`DELETE FROM contact WHERE id = ${id}`
    }
    catch (e) {
        console.error('Error deleting entry:', error);
        res.status(500).json({ success: false, error: 'Failed delete entry. Please try again later.' });

    }
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
