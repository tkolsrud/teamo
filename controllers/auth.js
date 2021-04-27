const express = require('express');
const router = express.Router();
const db = require('../models')

/** Register Route ***/

router.get('/register', function (req, res) {
    res.render('auth/register');
});


/** Login Route ***/

router.get('/login', function (req, res) {
    res.render('auth/login');
});

module.exports = router;