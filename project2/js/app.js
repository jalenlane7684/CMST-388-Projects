const email_user = 'bub7584@gmail.com';
const email_pass = 'fkst ghuq uywv txct';

const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(express.urlencoded({extended:true}));

app.post('/submit-form', (req, res) => {
  const { fname, lname, address, city, state, zip_code, phone_num, email, meal_pref/*, contact_methods*/ } = req.body;

  const emailBody = `
  Name: ${fname} ${lname}
  Address: ${address}, ${city}, ${state} ${zip_code}
  Phone: ${phone_num}
  Email: ${email}
  Meal Preference: ${meal_pref}
  
`;

// Contact Methods: ${contact_methods.join(', ')}

  // Create the transporter (configure for Outlook as shown earlier)
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: email_user,
        pass: email_pass
    }
  });

  const mailOptions = {
    from: `${email}`,
    to: email_user,
    subject: 'Form Submission',
    text: emailBody
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Form submitted successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});