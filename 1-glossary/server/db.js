// 0. Import Required Dependencies (dotenv and mongoose)
require('dotenv').config();
const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`, {useNewUrlParser: true, useUnifiedTopology: true});

//test connectivity
const db = mongoose.connection;
db.on('error',console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to mongo database');
});

// 2. Set up any schema and models needed by the app
const glossaryEntrySchema = new mongoose.Schema({
  keyword: String,
  definition: String
});

const GlossaryEntry = mongoose.model('GlossaryEntry', glossaryEntrySchema);
// 3. Export the models
module.exports = GlossaryEntry;
// 4. Import the models into any modules that need them
