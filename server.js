const express = require('express');
const app = express();
const rest = require('./app/routes/index.js');
require('dotenv').config();

const PORT = process.env.APP_PORT;
const HOSTNAME = process.env.APP_HOSTNAME;

// Register the routes.
app.use('/api/v1', rest);

// Listening port.
app.listen(PORT, () =>
{
    console.log(`The server running at` + 
      ` http://${HOSTNAME}:${PORT}/api/v1`);
});