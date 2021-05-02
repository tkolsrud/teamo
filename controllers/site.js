const express = require('express');
const router = express.Router();
const db = require('../models')

// About route - Presentational X
// Help route - Presentational  X
// Home route - Presentational X


/* === About Route === */
router.get('/about', function (req, res) {
    res.render('site/about');
});

/* === Help Route === */
router.get('/help', function (req, res) {
    res.render('site/help');
});


/* === Index Route === */

router.get('/index', async (req, res) => {
    try {
        const query = req.query;
        console.log(query);
        if (req.query.year) {
            req.query.year = { $regex: req.query.year, $options: "i" }
        }

        const allCars = await db.Car.find(query);
        const context = { cars: allCars };

        return res.render('site/index', context);
    } catch (err) {
        console.log(err);
        return res.send(err);
    }
});

/* === Garage Route === */
router.get('/garage', function (req, res) {
    db.User.findById(req.session.currentUser.id)
        .populate('garage')
        .exec(function (err, foundUser) {
            if (err) return res.send(err);

            const context = { cars: foundUser.garage };
            console.log(context);
            return res.render("site/garage", context);
        })
});


/* === Show Route === */
router.get('/site/:id', function (req, res) {
    const id = req.params.id;
    db.Car.findById(id, function (err, foundCar) {
        if (err) {
            console.log(err);
            return res.send('Server Error');
        } else {
            const context = { car: foundCar };
            console.log(foundCar);
            return res.render('site/show', context);
        }
    })
});

/* === Add to Garage Route === */
router.put('/show/:id', function (req, res) {
    const carId = req.params.id;
    db.User.findById(req.session.currentUser.id, function (err, foundUser) {
        if (err) return res.send(err);

        foundUser.garage.push(carId);
        foundUser.save();
        return res.redirect('/garage');
    });
});


/* === Garage Show Route === */

router.get('/garage/:id', function (req, res) {
    const id = req.params.id;
    db.Car.findById(id, function (err, foundCar) {
        if (err) {
            console.log(err);
            return res.send('Server Error');
        } else {
            const context = { car: foundCar };
            console.log(foundCar);
            return res.render('site/garageshow', context);
        }
    })
});


/* === Remove Car From Garage Route === */
router.put('/garage/:id', (req, res) => {
    const carId = req.params.id;
    db.User.findById(req.session.currentUser.id, async (err, foundUser) => {
        try {
            const index = foundUser.garage.indexOf(carId);
            foundUser.garage.splice(index, 1);
            await foundUser.save();

            return res.redirect('/garage');
        }

        catch (err) {
            console.log(err);
            return res.send('Server Error');
        }
    });
});

/* === User Settings Route === */
router.get('/settings', (req, res) => {
    db.User.findById(req.session.currentUser.id, (err, foundUser) => {
        if (err) {
            console.log(err);
            return res.send("Server Error");
        } else {
            const context = { user: foundUser };
            return res.render('site/settings', context);
        }
    })
});

/* === Delete User Account Route === */


module.exports = router;