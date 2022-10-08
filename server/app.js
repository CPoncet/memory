const express = require('express');
const app = express();
const scoreRoutes = require('./routes/scores.route');

const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/scores', scoreRoutes);

app.listen('3333', () => console.log('Listening on port 3333'));
