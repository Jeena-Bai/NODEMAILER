const express = require('express')
const app = express()
require('dotenv').config()
const path=require("path");

var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service:"gmail",
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "jeenabai2015@gmail.com",
    pass: process.env.App_Password,
  },
});
 const mailOptions={
    from:"jeenabai2015@gmail.com",
    to:"jijujeena2821@gmail.com",
    subject: "GREETINGS", 
    text: "EID MUBARAK", 
    html: "<b>EID MUBARAK</b>", 
    attachments:[
      {
        filename:'eid.jpg',
        path:path.join(__dirname,'eid.jpg'),
        contentType:'image/jpg'
      },
    ]
  }
 transporter.sendMail(mailOptions,(err)=>{
   if(err)
    {
      console.log("It has an error",err)
    }
    else{
      console.log("email has sent")
    } 
 })
  

