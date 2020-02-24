const express = require('express');
const cors = require('cors');
const { webClient } = require('../config/enviroments');

const routes = require('./routes');

const app = express();

app.use(cors({ origin: webClient }));
app.use(express.json());
app.use(routes);

module.exports = app;
