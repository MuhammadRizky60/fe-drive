const path = require("path");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.sendFile("Hello from App Angine");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}...`);
});
