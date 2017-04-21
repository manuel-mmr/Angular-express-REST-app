const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const api = require('./routes/api');

/**
 * Setup server
 */
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Set our api routes
 */
app.use('/api', api);

/**
 * Point static path to dist
 */
app.use(express.static(path.join(__dirname, '../dist')));

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
