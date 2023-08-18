const express = require('express');
const app = express();
const postmark = require('postmark');
const bodyParser = require('body-parser');

const axios = require('axios');

app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/subscribe', (req, res) => {
    const { email } = req.body;
  
    // Create a Postmark client
    const client = new postmark.ServerClient('924f0f9e-a1ab-4964-9cd9-5638ad722a22');
  
    const message = {
      From: 'owner@somil.au',
      To: email,
      Subject: 'Welcome to Our Newsletter',
      HtmlBody: '<p>Thank you for subscribing to our newsletter!</p>'
    };

    // Send the email
  client.sendEmail(message)
  .then(() => {
    console.log('Email sent successfully');
    res.send('Email sent successfully');
  })
  .catch(error => {
    console.log('Error sending email:', error);
    res.status(500).send('Error sending email');
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));