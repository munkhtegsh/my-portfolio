require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../public`));

app.post('/contact', (req, res) => {
  console.log(req.body);
  console.log('hi')
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL, 
        pass: process.env.PASSWORD 
      }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: `${req.body.name} ${req.body.email}` , // sender address  - '"Susana Bayona" <coshka02@yahoo.com>'
      to: 'munkhtegsh.m@gmail.com', // list of receivers
      subject: 'Hello ✔', // Subject line
      text: `${req.body.text}`, // plain text body  - 'This is the text'
      html: `<b> ${req.body.email} || ${req.body.text}</b>` // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  });
})

const port = 4001;
app.listen(port, () => console.log(`Server is running up on: ${port}`))





