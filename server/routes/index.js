/*
Routes
*/

var express = require('express');
var ejs = require('ejs');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('pages/index', { title: 'PRAJWAL B R' });
});

/* about me */
router.get('/about', function (req, res, next) {
    res.render('pages/about', { title: 'PRAJWAL B R - ABOUT ME' });
});

/* portfolio */
router.get('/portfolio', function (req, res, next) {
    res.render('pages/portfolio', { title: 'PRAJWAL B R - PORTFOLIO' });
});

/* services */
router.get('/services', function (req, res, next) {
    res.render('pages/services', { title: 'PRAJWAL B R - SERVICES' });
});

/* contact me */
router.get('/contact', function (req, res, next) {
    res.render('pages/contact', { title: 'PRAJWAL B R - CONTACT ME' });
});

router.post('/contact', function (req, res) {
    /* nodemailer setup */

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: "example@gmail.com",
          pass: "uqfg dggf aqdd dsfe"
        }
      });

      var mailOptions = {
        from:"example@gmail.com",
        to: "example@gmail.com",
        subject: 'Email from Portfolio Website',
        html: `<p>
                Name : ${req.body.name} <br/>
                Email : ${req.body.email} <br/>
                Company : ${req.body.company} <br/>
                Message : ${req.body.message}
             </p>`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.render('pages/error-contact', { title: 'PRAJWAL B R - CONTACT ME'});
        }
        else {
            res.render('pages/success-contact', { title: 'PRAJWAL B R - CONTACT ME', name: req.body.name});
        }
    });

      var mailOptions = {
        from: "example@gmail.com",
        to: req.body.email,
        subject: 'Thank you for contacting me',
        html: `<p>Hello, ${req.body.name} 
        <br/><br/>
        I just recieved your message. 
        <br/>
        I will get back to you shortly!
        <br/><br/><br/><br/>
        Regards,
        <br/>
        Prajwal BR
        </p>`
  
      };
  
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });


});

module.exports = router;
