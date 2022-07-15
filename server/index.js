"use strict";
const express =require('express')
const app =express()
const bodyPaser = require('body-parser')
const cors= require('cors')
const nodemailer=require('nodemailer')

app.use(bodyPaser.urlencoded({extended:true}))
app.use(bodyPaser.json())
app.use(cors())

app.post("/send_mail",cors(),async(req,res)=>{
    let {text}=req.body;
    var details=`${text}`;
    console.log(`${details}`);
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'rt.rohit.test@gmail.com', // generated ethereal user
          pass: 'hnhrxblqveqkzxvn', // generated ethereal password
        },
      });
    
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: 'rt.rohit.test@gmail.com', // sender address
        to: "info@redpositive.in", // list of receivers
        subject: "Details ✔", // Subject line
        text: details, // plain text body
      },
      function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Message sent ✔');
            transport.close();
        }
    }
      );

})

app.listen(4000,()=>{
    console.log("Port 4000")
})