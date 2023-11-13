import React from 'react';

const Confirmation = ({checkoutData, confirmClickHandler}) => {
  //only displaying the password here to confirm proper data assignment, in real world would be *****, or i guess not even displayed at all
  return (
    <div>
      <h2>Confirmation</h2>
    <div>
      <h3>Account Details</h3>
      <div>{`Name: ${checkoutData[0].user_name}, Email: ${checkoutData[0].email}, Password ${checkoutData[0].user_password}`}</div>
    </div>
    <div>
      <h3>Shipping Details</h3>
      <div>{`Address Line 1: ${checkoutData[0].shipping_address_line1}, Address Line 2: ${checkoutData[0].shipping_address_line2}, City: ${checkoutData[0].city}, State: ${checkoutData[0].us_state}, Zip Code: ${checkoutData[0].zip_code}, Phone Number: ${checkoutData[0].phone_number}`}</div>
    </div>
    <div>
      <h3>Payment Details</h3>
      <div>{`Credit Card Number: ${checkoutData[0].credit_card_number}, Expiry: ${checkoutData[0].expiry}, CVV: ${checkoutData[0].cvv}, Billing Zip Code ${checkoutData[0].billing_zip_code}`}</div>
    </div>
    <button onClick={() => confirmClickHandler()}>Confirm</button>
    </div>
  );
};

export default Confirmation;