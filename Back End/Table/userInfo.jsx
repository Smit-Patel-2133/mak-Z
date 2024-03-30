// userInfo.jsx
const sql = require("../db");

async function createUsersTable() {
    try {
        await sql`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                password VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL
            )
        `;
        console.log('Users table created successfully');
    } catch (err) {
        console.error('Error creating users table:', err);
    }
}

// Call the function to create the table
createUsersTable();
