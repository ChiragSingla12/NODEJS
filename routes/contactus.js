const path = require('path');

const express = require('express');

const router = express.Router();

const rootDir = require('../util/path');


router.get('/contact-us', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contactus.html'));
});

router.post('/success', (req, res, next) => {
    res.send('<h1>"Form successfuly filled"</h1>');
    // res.redirect('/');
});



module.exports = router;