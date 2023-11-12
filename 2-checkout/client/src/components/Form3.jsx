import React from 'react';

const Form3 = ({nextClickHandler}) => {
  const[creditCardNumberText, setCreditCardNumberText] = React.useState('');
  const[expiryDateText, setExpiryDateText] = React.useState('');
  const[cvvText, setCvvText] = React.useState('');
  const[billingZipText, setBillingZipText] = React.useState('');

  const creditCardNumberTextChangeHandler = (e) => {
    console.log(`Form3 credit:   ${e.target.value}`);
    setCreditCardNumberText(e.target.value);
  };

  const expiryDateTextChangeHandler = (e) => {
    console.log(`Form3 expiry:   ${e.target.value}`);
    setExpiryDateText(e.target.value);
  };

  const cvvTextChangeHandler = (e) => {
    console.log(`Form3 cvv:      ${e.target.value}`);
    setCvvText(e.target.value);
  };

  const billingZipTextChangeHandler = (e) => {
    console.log(`Form3 bZip:     ${e.target.value}`);
    setBillingZipText(e.target.value);
  };



  return (
    <div>
      <div>Form3</div>
      <div>
        <input placeholder="credit card number" onChange={(e) => creditCardNumberTextChangeHandler(e)}></input>
        <input placeholder="expiry date" onChange={(e) => expiryDateTextChangeHandler(e)}></input>
        <input placeholder="CVV" onChange={(e) => cvvTextChangeHandler(e)}></input>
        <input placeholder="billing zip code" onChange={(e) => billingZipTextChangeHandler(e)}></input>
      </div>
      <button onClick={() => nextClickHandler(creditCardNumberText, expiryDateText, cvvText, billingZipText)}>Next</button>
    </div>
  );
};

export default Form3;