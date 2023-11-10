// Dependencies Here ////////////////////////////////////////////////////
require("dotenv").config();
const express = require("express");
const path = require("path");
const controllers = require('./controllers.js')
const morgan = require('morgan');
// Creste Express Server ////////////////////////////////////////////////
const app = express();

// Middleware Here //////////////////////////////////////////////////////

app.use(express.json());
// Serves up all static and generated assets in in a specified folder.
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(morgan('dev'));
// Routes Here //////////////////////////////////////////////////////////
app.get('/glossary', controllers.getGlossary);

app.post('/glossary', controllers.addEntry);

app.patch('/glossary/:id', controllers.updateEntry);

app.delete('/glossary/:id', controllers.deleteEntry);


// Port Def /////////////////////////////////////////////////////////////

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
