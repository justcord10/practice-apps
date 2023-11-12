import React from 'react';

const Form1 = ({nextClickHandler}) => {

  return (
    <div>
      <div>Form1</div>
      <div>
        <input placeholder="name"></input>
        <input placeholder="email"></input>
        <input placeholder="password"></input>
      </div>
      <button onClick={() => nextClickHandler()}>Next</button>
    </div>
  );
};

export default Form1;