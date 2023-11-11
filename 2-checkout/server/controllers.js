const db = require('./db.js');

//remember to set exports.controllerName = () =>

//need to add in some logic that checks if the current req.cookie already exists in the table, if it doesnt then save as a new value in the table, if it does return all row data where that cookie is stored, STATUS CODE will be different depending on what is returned
exports.getAll = (req, res) => {
  console.log('in da getAll!');
  res.sendStatus(200);
};

//a note on this one, will need to check which form is being submitted based on the bool table variables that are stored locally when the page loads/is refreshed
exports.postForm = (req, res) => {
  console.log('in da postForm');
  console.log(req.body);
  res.sendStatus(200);
}