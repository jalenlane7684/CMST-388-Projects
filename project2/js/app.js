const email_user = 'bub7684@gmail.com';
const email_pass = 'atew andf yhie wnnm';

const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;


app.use(express.urlencoded({extended:true}));

app.post('/submit-form', (req, res) => {
  const {
    fname,
    lname,
    address,
    city,
    state,
    zip_code,
    phone_num_first_three,
    phone_num_last_seven,
    form_email,
    form_email_conf,
    meal_pref,
    contact_method,
    comments
  }  = req.body;

  console.log(req.body);

  const emailBody = (`
  Name: ${fname} ${lname}\n
  Address: ${address}, ${city}, ${state} ${zip_code}\n
  Phone: (${phone_num_first_three}) ${phone_num_last_seven}\n
  Email: ${form_email_conf}\n
  Meal Preference: ${meal_pref}\n
  Contact Methods: ${contact_method.join(', ')}\n
  Additional Commments:\n${comments}
`);

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
    from: `${form_email}`,
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