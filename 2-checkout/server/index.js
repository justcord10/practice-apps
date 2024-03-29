require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");
const controllers = require('./controllers');
const morgan = require('morgan');

// Establishes connection to the database on server start
const db = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in a specified folder.
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());
app.use(morgan('dev'));

// routes /////////////////////////////////////////////////////////
app.get('/checkout/:id', controllers.getAll);
//need to make sure to send in the cookie value in the request body object!!
app.post('/checkout/:id', controllers.postForm);

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
