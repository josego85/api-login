let express = require('express');
let app = express();
let rest = require('./app/routes/index.js');

const PORT = process.env.PORT||3000;
const HOSTNAME = 'localhost';

// Register the routes.
app.use('/api/v1', rest);

// Listening port.
app.listen(PORT, () =>
{
    console.log(`The server running at: ` + 
      ` http://${HOSTNAME}:${PORT}/api/v1`);
});