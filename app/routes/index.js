'use strict';

const express = require('express');
const router = express.Router();

// All the routes.
router.get('/',function(req, res){
    res.status(200).send(`Welcome to API LOGIN`);
});

// Login user.
router.post('/api/login', function(req, res){
    res.status(200).json(
    {
        result: true,
        token: "iuyofiuyrewiouyrioewuyrei*&^*^**", 
        userMainId: 1,
        hrMainId: 1,
    });
});

module.exports = router;