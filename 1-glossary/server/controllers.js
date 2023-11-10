// require in the database ////////////////////////////////////////
const GlossaryEntry = require('./db.js')
//setup expected methods from routes and attach to exports object /
exports.getGlossary = (req, res) => {
  console.log('in da getGlossary');
  GlossaryEntry.find()
    .then((data) => res.send(data))
    .catch(() => res.sendStaus(404));

};

exports.addEntry = (req, res) => {
  console.log('in da addEntry');
  GlossaryEntry.create(req.body)
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(404));

};

exports.updateEntry = (req, res) => {
  console.log('in da updateEntry');
  console.log(req.body);
  //req.body should be an object with ONLY keyword and definition properties
  GlossaryEntry.findByIdAndUpdate(req.params.id, { $set: req.body})
    .then(() => res.sendStatus(200))
    .catch(() => sendStatus(404));
};

exports.deleteEntry = (req, res) => {
  console.log('in da deleteEntry');
  console.log(req.params.id);
GlossaryEntry.findByIdAndDelete(req.params.id)
  .then(() => res.sendStatus(200))
  .catch(() => res.sendStatus(404));
};