// server.js
const express = require("express");
const connection = require("./db");
const authRouter = require("./auth");

const app = express();

// Use auth router for signup and login routes
app.use("/auth", authRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
