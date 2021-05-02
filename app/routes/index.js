'use strict';

const express = require('express');
const router = express.Router();
const mainRouter = require('./main');
const loginRouter = require('./login');

// All the routes.
router.use(mainRouter);

// Login user.
router.use(loginRouter);

module.exports = router;