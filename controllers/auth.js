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

router.post('/login', async function (req, res) {
    try {
        const foundUser = await db.User.findOne({ email: req.body.email });

        if (!foundUser) return res.redirect('/register'); // one line if statement that checks for a user and if none -> register

        const match = await bcrypt.compare(req.body.password, foundUser.password); // bcrypt.compare(string password from user vs. hashed password from db)

        //if not match send error:
        if (!match) return res.send('password invalid');

        // if there is a match create session(cookie) and redirect home
        req.session.currentUser = { //creates the cookie tied to the current user
            id: foundUser._id,
            username: foundUser.username,
        }

        return res.redirect('/index');

    } catch (err) {
        console.log(err);
        res.send(err);
    }
});

/***** About Route *********/
router.get('/about', function (req, res) {
    res.render('site/about');
});
/***** Help Route *********/

router.get('/help', function (req, res) {
    res.render('site/help');
});

/* === Logout Route === */
router.delete('/logout', async function (req, res) {
    await req.session.destroy();
    return res.redirect('/');
});

module.exports = router;