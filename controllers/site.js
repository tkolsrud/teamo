const express = require('express');
const router = express.Router();
const db = require('../models')

/***** About Route *********/
router.get('/site', function (req, res) {
    res.render('site/about');
});
/***** Help Route *********/
router.get('/site', function (req, res) {
    res.render('site/help');
});
module.exports = router;