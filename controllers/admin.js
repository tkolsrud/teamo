const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/adminhome', async (req, res) => {
    try {
        const query = req.query;
        console.log(query);
        if (req.query.year) {
            req.query.year = { $regex: req.query.year, $options: "i" }
        }

        const allCars = await db.Car.find(query);
        const context = { cars: allCars };

        return res.render('admin/adminhome', context);
    } catch (err) {
        console.log(err);
        return res.send(err);
    }
});

router.get('/addnew', (req, res) => {
    return res.render('admin/addnew');
})



module.exports = router;