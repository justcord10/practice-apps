import React from 'react';

const Form3 = ({nextClickHandler}) => {

  return (
    <div>
      <div>Form3</div>
      <div>
        <input placeholder="credit card number"></input>
        <input placeholder="expiry date"></input>
        <input placeholder="CVV"></input>
        <input placeholder="billing zip code"></input>
      </div>
      <button onClick={() => nextClickHandler()}>Next</button>
    </div>
  );
};

export default Form3;