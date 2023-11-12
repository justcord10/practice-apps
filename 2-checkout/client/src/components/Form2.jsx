import React from 'react';

const Form2 = ({nextClickHandler}) => {

  return (
    <div>
      <div>Form2</div>
      <div>
        <input placeholder="address line 1"></input>
        <input placeholder="address line 2"></input>
        <input placeholder="city"></input>
        <input placeholder="state"></input>
        <input placeholder="zip code"></input>
        <input placeholder="phone number"></input>
      </div>
      <button onClick={() => nextClickHandler()}>Next</button>
    </div>
  );
};

export default Form2;