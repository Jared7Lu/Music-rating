// server /index.js
const path = require("path"); // ***
const express = require("express");
const PORT = process.env.PORT || 3001;

const app = express();

// API Endpoint
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
    console.log(`Server listing on ${PORT}`);
});