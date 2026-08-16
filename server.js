const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "Hello from my UPDATED Docker API!"
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