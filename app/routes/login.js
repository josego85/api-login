"use strict";

const express = require("express");
const loginController = require('../controllers/login.controller');

const loginRouter = express.Router();

// Login user.
loginRouter.post('/login', loginController);

module.exports = loginRouter;