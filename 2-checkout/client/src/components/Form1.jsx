import React from 'react';

const Form1 = ({nextClickHandler}) => {
  const[nameText, setNameText] = React.useState('');
  const[emailText, setEmailText] = React.useState('');
  const[passwordText, setPasswordText] = React.useState('');

  const nameTextChangeHandler = (e) => {
    console.log(`Form1 name:     ${e.target.value}`);
    setNameText(e.target.value);
  };

  const emailTextChangeHandler = (e) => {
    console.log(`Form1 email:    ${e.target.value}`);
    setEmailText(e.target.value);
  };

  const passwordTextChangeHandler = (e) => {
    console.log(`Form1 pass:     ${e.target.value}`);
    setPasswordText(e.target.value);
  };


  return (
    <div>
      <h2>Account Details</h2>
      <div>
        <input placeholder="name" onChange={(e) => nameTextChangeHandler(e)}></input>
        <input placeholder="email" onChange={(e) => emailTextChangeHandler(e)}></input>
        <input placeholder="password" onChange={(e) => passwordTextChangeHandler(e)}></input>
      </div>
      <button onClick={() => nextClickHandler(nameText, emailText, passwordText)}>Next</button>
    </div>
  );
};

export default Form1;