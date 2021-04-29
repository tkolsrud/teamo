const express = require('express');
const router = express.Router();
const db = require('../models');


/* === Admin Home Route === */
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

/* === AddNew Route ==== */
router.get('/addnew', (req, res) => {
    return res.render('admin/addnew');
})

router.post('/addnew', (req, res) => {
    db.Car.create(req.body, function (err, createdCar) {
        if (err) {
            console.log(err);
            return res.send("Server error");
        } else {
            console.log("created car", createdCar);
            return res.redirect('/adminhome');
        }
    })
});

/* === Admin Show Route === */
router.get('/admin/:id', function (req, res) {
    const id = req.params.id;
    db.Car.findById(id, function (err, foundCar) {
        if (err) {
            console.log(err);
            return res.send('Server Error');
        } else {
            const context = { car: foundCar };

            console.log(foundCar);
            return res.render('admin/adminshow', context);
        }
    })
});


/* === Edit Car Route === */
router.get('/admin/:id/edit', (req, res) => {
    db.Car.findById(req.params.id, function (err, foundCar) {
        if (err) return res.send(err);

        const context = { car: foundCar };

        console.log(foundCar);
        return res.render('admin/edit', context);
    });
});


/* === Update Car Route === */
router.put('/admin/:id', (req, res) => {
    db.Car.findByIdAndUpdate(
        req.params.id,
        {
            $set: {
                ...req.body,
            },
        },
        { new: true },
        (err, updatedCar) => {
            if (err) return res.send(err);
            return res.redirect(`/admin/${updatedCar._id}`);
        }

    );
});




/* === Delete Car Route === */
router.delete('/admin/:id', (req, res) => {
    db.Car.findByIdAndDelete(req.params.id, function (err, deletedCar) {
        if (err) return res.send(err);

        return res.redirect('/adminhome');
    });
});


module.exports = router;