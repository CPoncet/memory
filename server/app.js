// import all required dependencies
const express = require('express');
const app = express();
const scoreRoutes = require('./routes/scores.route');
const cors = require('cors');

// setting default values for Cross-Origin resource sharing
app.use(cors());

// enables JSON data parsing in incoming requests
app.use(express.json());

// calls routes from another file
app.use('/scores', scoreRoutes);

// starts the server on specified port
app.listen('3333', () => console.log('Listening on port 3333'));
