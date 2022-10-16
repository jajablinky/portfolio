const express = require('express');
const router = express.Router();
const data = require('../data.json')
const { projects } = data;

router.get('/', (req, res) => {
    res.render('index', { projects });
});

router.get('/about', (req, res) => {
    res.render('about', { name: 'Geoff Millar'});
});

module.exports = router;