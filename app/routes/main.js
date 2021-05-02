"use strict";

const express = require("express");
const mainController = require('../controllers/main.controller');

const mainRouter = express.Router();

// Main router.
mainRouter.get('/', mainController);

module.exports = mainRouter;