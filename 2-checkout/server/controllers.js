const db = require('./db.js');

//remember to set exports.controllerName = () =>

//need to add in some logic that checks if the current req.body.session_id already exists in the table, if it doesnt then save as a new value in the table, if it does return all row data where that cookie is stored, STATUS CODE will be different depending on what is returned
exports.getAll = (req, res) => {
  console.log('in da getAll!');
  db.query("SELECT * FROM responses WHERE session_id=?", [req.params.id], (err, data) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(data);
    }
  })

};

//a note on this one, will need to check which form is being submitted based on the bool table variables that are stored locally when the page loads/is refreshed
exports.postForm = (req, res) => {
  console.log('in da postForm');
  console.log(req.body);
  if (req.body.session_id && req.body.final_form_is_submitted === undefined) {
    //we need to create a new entry in our table
    db.query('INSERT INTO responses (session_id) VALUES (?)', [req.body.session_id], (err, data) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.sendStatus(201);
      }
    })
  } else if (req.body.final_form_is_submitted === 0 && req.body.f3_is_filled === 0 && req.body.f2_is_filled === 0 && req.body.f1_is_filled === 0) {
    console.log('submit form 1 test');
    //submit a query to db to set name email password and form 1 filled
    db.query('UPDATE responses SET user_name=?, email=?, user_password =?, f1_is_filled=1 WHERE session_id=?', [req.body.user_name, req.body.email, req.body.user_password,req.body.session_id], (err, data) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.sendStatus(201);
      }
    })
  } else if (req.body.final_form_is_submitted === 0 && req.body.f3_is_filled === 0 && req.body.f2_is_filled === 0 && req.body.f1_is_filled === 1) {
    console.log('submit form 2 test');
    //submit a query to db to set add1 add2 city state zip phone# and form 2 filled
    db.query('UPDATE responses SET shipping_address_line1=?, shipping_address_line2=?, city=?, us_state=?, zip_code=?, phone_number=?, f2_is_filled=1 WHERE session_id=?', [req.body.shipping_address_line1, req.body.shipping_address_line2, req.body.city, req.body.us_state, req.body.zip_code, req.body.phone_number, req.body.session_id], (err, data) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.sendStatus(201);
      }
    })
  } else if (req.body.final_form_is_submitted === 0 && req.body.f3_is_filled === 0 && req.body.f2_is_filled === 1 && req.body.f1_is_filled === 1) {
    console.log('submit form 3 test');
    //submit a query to db to set credit expiry ccv billingzip and form 3 filled
    db.query('UPDATE responses SET credit_card_number=?, expiry=?, cvv=?, billing_zip_code=?, f3_is_filled=1 WHERE session_id=?', [req.body.credit_card_number, req.body.expiry, req.body.cvv, req.body.billing_zip_code, req.body.session_id], (err, data) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.sendStatus(201);
      }
    })
  } else if (req.body.final_form_is_submitted === 0 && req.body.f3_is_filled === 1 && req.body.f2_is_filled === 1 && req.body.f1_is_filled === 1) {
    console.log('confirmed order!');
    //submit a query to db to set final form submitted
    db.query('UPDATE responses SET final_form_is_submitted=1 WHERE session_id=?', [req.body.session_id], (err, data) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.sendStatus(201);
      }
    })
  } else if (req.body.final_form_is_submitted === 1 && req.body.f3_is_filled === 1 && req.body.f2_is_filled === 1 && req.body.f1_is_filled === 1) {
    console.log('the case when the checkout button is pressed again, should toggle final form flag off');
    //submit a query to db to set final form submitted to 0
    db.query('UPDATE responses SET final_form_is_submitted=0 WHERE session_id=?', [req.body.session_id], (err, data) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.sendStatus(201);
      }
    })
  } else {
    console.log('should only execute while testing');
    res.sendStatus(200);
  }

}