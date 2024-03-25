// userInfo.jsx
const connection = require("../db");

const createUsersTable = () => {
    const sql = `CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
  )`;

    connection.query(sql, (err, result) => {
        if (err) {
            console.error('Error creating users table:', err); // Log the error
            console.error('Failed SQL Query:', sql); // Log the SQL query
            return;
        }
        console.log('Users table created successfully');

    });
}

// Call the function to create the table
createUsersTable();
