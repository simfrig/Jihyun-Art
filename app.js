const express = require ("express");
const app = express();
const port = 3000;
const https = require ("https");
const nodemailer = require("nodemailer");

app.use(express.static("public"));

const bodyParser = require ("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/contact.html", (req,res) => {
    res.sendFile(__dirname + "/contact.html");
});


















app.listen(port, () => {
    console.log ("Server is running on port 3000")
});




