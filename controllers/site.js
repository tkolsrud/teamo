const express = require('express');
const router = express.Router();
const db = require('../models')

// About route - Presentational X
// Help route - Presentational 
// Home route - Presentational

/***** About Route *********/
router.get('/about', function (req, res) {
    res.render('site/about');
});
/***** Help Route *********/
<<<<<<< HEAD
router.get('/site', function (req, res) {
    res.render('site/help');
});
=======
router.get('/help', function (req, res) {
    res.render('site/help');
});

/***** Home Route *********/
router.get('/home', (req, res) => {
    res.render('site/home');
});

// This is the code that lets you grab the field data
router.post('/home', async (req, res) => {
    try {
        const query = req.query;
        console.log(req.query);

        const allCars = await db.Car.find(query);
        const context = { cars: allCars };

        return console.log(context);
    } catch (err) {
        console.log(err);
        return res.send(err);
    }
});


/***** Index Route *********/
router.get('/index', function (req, res) {
    db.Car.find({}, function (err, foundCars) {
        if (err) return res.send(err);
        const context = { cars: foundCars };
        console.log(context);
        res.render('site/index', context);
    })
});

/***** Collection Route *********/
router.get('/collection', function (req, res) {
    res.render('site/collection');
});

/***** Show Route *********/
router.get('/show', function (req, res) {
    res.render('site/show');
});

/***** New Car Route *********/
router.get('/newcar', function (req, res) {
    res.render('site/newcar');
});
>>>>>>> submaster
module.exports = router;