// db.js
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "sql6.freesqldatabase.com",
    user: "sql6688118",
    password: "TMzE6q22ER",
    database: "sql6688118",
    port: 3306,
});

connection.connect((err) => {
    if (err) {
        console.error("Database connection failed: ", err);
    } else {
        console.log("Connected to the database");
    }
});

module.exports = connection;
