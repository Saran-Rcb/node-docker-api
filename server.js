const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "Hello from version 2!"
    });
});

app.get("/about", (req, res) => {
    res.json({
        project: "Node.js + Docker",
        status: "Running"
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});