const express = require ("express");
const app = express();
const port = 3000;
const https = require ("https");
const nodemailer = require("nodemailer");

app.use(express.static(__dirname + "/public"));
app.use(express.json())


const bodyParser = require ("body-parser");
const { getMaxListeners } = require("process");
app.use(bodyParser.urlencoded({extended:true}));


app.get("/", (req,res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post('/contact.html', (req,res) => {
    console.log(req.body);


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:'simfrigon@gmail.com',
        pass: 'jv3jp8va',
    }
})

const mailOptions = {
    from: req.body.email,
    to: 'simfrigon@gmail.com',
    text: req.body.subject
}

transporter.sendMail(mailOptions, (error, info)=>{
    if(error){
        console.log(error);
        res.send('error');
    }else{
        console.log('Email sent: ' + info.response);
        res.send('success');
    }
    })

})



app.get("/public/contact.html", (req,res) => {
    res.sendFile(__dirname + "/public/contact.html");
});





app.listen(port, () => {
    console.log ("Server is running on port 3000")
});




