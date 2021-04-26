const express = require('express');
const router = express.Router();
const db = require('../models')

/***** About Route *********/
router.get('/about', function (req, res) {
    res.render('site/about');
});

module.exports = router;