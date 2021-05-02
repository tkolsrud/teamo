

// Remove Car From Garage Route

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

