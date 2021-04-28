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

router.get('/site', function (req, res) {
    res.render('site/help');
});

router.get('/help', function (req, res) {
    res.render('site/help');
});

/***** Index Route *********/

router.get('/index', async (req, res) => {
    try {
        const query = req.query;
        console.log(query);

        const allCars = await db.Car.find(query);
        const context = { cars: allCars };

        return res.render('site/index', context);
    } catch (err) {
        console.log(err);
        return res.send(err);
    }
});

/***** Collection Route *********/
router.get('/collection', function (req, res) {
    res.render('site/collection');
});

/***** Show Route *********/
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

router.put('/site/:id', function (req, res) {
    const id = req.params.id;
    // db.Car.findById(id, function (err, foundCar) {
    //     if (err) return res.send(err);

    //     const context = {car: foundCar}
    // req.session.currentUser.garage.push(id);
    console.log(id);
    // req.body.user.garage.push(foundCar.id);

    return res.redirect('/index');
});
// });

router.put

/***** New Car Route *********/
router.get('/newcar', function (req, res) {
    res.render('site/newcar');
});
module.exports = router;