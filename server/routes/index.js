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
    res.render('pages/about', { title: 'ABOUT ME' });
});

/* portfolio */
router.get('/portfolio', function (req, res, next) {
    res.render('pages/portfolio', { title: 'PORTFOLIO' });
});

/* services */
router.get('/services', function (req, res, next) {
    res.render('pages/services', { title: 'SERVICES' });
});

/* contact me */
router.get('/contact', function (req, res, next) {
    res.render('pages/contact', { title: 'CONTACT ME' });
});

router.post('/contact', function (req, res) {
    /* nodemailer setup */
    var mailOpts, smtpTrans;
    smtpTrans = nodemailer.createTransport({
        service: "Gmail",
        type: "SMTP",
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "prajwalbr.1231@gmail.com",
            //pass: "wmjp jcju salc vvcx"
        }
    });

    mailOpts = {
        from: req.body.name + ' &lt;' + req.body.email + '&gt;',
        to: 'prajwalbr.1231@gmail.com',
        subject: 'Email from Portfolio Website',
        text: req.body.message
    };
    smtpTrans.sendMail(mailOpts, function (error, info) {
        if (error) {
            console.log(error);
            res.render('pages/error-contact', { title: 'CONTACT ME'});
        }
        else {
            res.render('pages/success-contact', { title: 'CONTACT ME', name: req.body.name});
        }
    });
});

module.exports = router;
