import React from 'react';

const Form2 = ({nextClickHandler}) => {
  const[addressLine1Text, setAddressLine1Text] = React.useState('');
  const[addressLine2Text, setAddressLine2Text] = React.useState('');
  const[cityText, setCityText] = React.useState('');
  const[stateText, setStateText] = React.useState('');
  const[zipCodeText, setZipCodeText] = React.useState('');
  const[phoneNumberText, setPhoneNumberText] = React.useState('');

  const addressLine1TextChangeHandler = (e) => {
    console.log(`${e.target.value}`);
    setAddressLine1Text(e.target.value);
  };

  const addressLine2TextChangeHandler = (e) => {
    console.log(`${e.target.value}`);
    setAddressLine2Text(e.target.value);
  };

  const cityTextChangeHandler = (e) => {
    console.log(`${e.target.value}`);
    setCityText(e.target.value);
  };

  const stateTextChangeHandler = (e) => {
    console.log(`${e.target.value}`);
    setStateText(e.target.value);
  };

  const zipCodeTextChangeHandler = (e) => {
    console.log(`${e.target.value}`);
    setZipCodeText(e.target.value);
  };

  const phoneNumberTextChangeHandler = (e) => {
    console.log(`${e.target.value}`);
    setPhoneNumberText(e.target.value);
  };


  return (
    <div>
      <div>Form2</div>
      <div>
        <input placeholder="address line 1" onChange={(e) => addressLine1TextChangeHandler(e)}></input>
        <input placeholder="address line 2" onChange={(e) => addressLine2TextChangeHandler(e)}></input>
        <input placeholder="city" onChange={(e) => cityTextChangeHandler(e)}></input>
        <input placeholder="state" onChange={(e) => stateTextChangeHandler(e)}></input>
        <input placeholder="zip code" onChange={(e) => zipCodeTextChangeHandler(e)}></input>
        <input placeholder="phone number" onChange={(e) => phoneNumberTextChangeHandler(e)}></input>
      </div>
      <button onClick={() => nextClickHandler()}>Next</button>
    </div>
  );
};

export default Form2;