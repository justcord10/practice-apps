import React from 'react';

const Confirmation = ({checkoutData, confirmClickHandler}) => {

  return (
    <div>
      <h2>Confirmation</h2>
    <div>
      <h3>Account Details</h3>
      <div>Form Data</div>
    </div>
    <div>
      <h3>Shipping Details</h3>
      <div>Form Data</div>
    </div>
    <div>
      <h3>Payment Details</h3>
      <div>Form Data</div>
    </div>
    <button onClick={confirmClickHandler()}>Confirm</button>
    </div>
  );
};

export default Confirmation;