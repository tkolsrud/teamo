const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../models');

/** Register Route ***/

router.get('/register', function (req, res) {
    res.render('auth/register');
});


router.post('/register', async function (req, res) {
    try {
        const foundUser = await db.User.findOne({ email: req.body.email });

        if (foundUser) {
            return res.redirect('/login'); // if the user exists redirect to login
        }

        const salt = await bcrypt.genSalt(10); // how many iterations of salt we're going through (encryption)
        const hash = await bcrypt.hash(req.body.password, salt); // pulling the password from the req.body and salting (encrypting it)
        req.body.password = hash; // replacing the value of req.body.password with the hashed password

        const newUser = await db.User.create(req.body);
        return res.redirect('/login');

    } catch (err) {
        console.log(err);
        return res.send(err);
    }
});




/** Login Route ***/

router.get('/login', function (req, res) {
    res.render('auth/login');
});

module.exports = router;