const express = require('express');
const router = express.Router();
const db = require('../models')

/***** About Route *********/
router.get('/about', function (req, res) {
    res.render('site/about');
});
/***** Help Route *********/
router.get('/help', function (req, res) {
    res.render('site/help');
});

module.exports = router;