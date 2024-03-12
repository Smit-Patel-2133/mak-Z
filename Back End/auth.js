// auth.js
const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./db");

const router = express.Router();
router.use(bodyParser.json());

// Register user
router.post("/signup", (req, res) => {
    const { name, email, password } = req.body;

    // Check if the user already exists
    connection.query(
        "SELECT * FROM users WHERE email = ?",
        [email],
        (err, results) => {
            if (err) {
                console.error("Database query error: ", err);
                return res.status(500).json({ error: "Internal Server Error" });
            }

            if (results.length > 0) {
                return res.status(400).json({ error: "User already exists" });
            }

            // Insert the new user
            connection.query(
                "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
                [name, email, password],
                (err) => {
                    if (err) {
                        console.error("Database query error: ", err);
                        return res.status(500).json({ error: "Internal Server Error" });
                    }

                    res.status(201).json({ message: "User registered successfully" });
                }
            );
        }
    );
});

// Login user
router.post("/login", (req, res) => {
    const { email, password } = req.body;

    // Check if the user exists
    connection.query(
        "SELECT * FROM users WHERE email = ? AND password = ?",
        [email, password],
        (err, results) => {
            if (err) {
                console.error("Database query error: ", err);
                return res.status(500).json({ error: "Internal Server Error" });
            }

            if (results.length === 0) {
                return res.status(401).json({ error: "Invalid email or password" });
            }

            // Successful login
            res.json({ message: "Login successful" });
        }
    );
});

module.exports = router;
