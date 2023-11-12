import React from 'react';
import Axios from 'axios';
import Cart from './Cart.jsx';
import Form1 from './Form1.jsx';
import Form2 from './Form2.jsx';
import Form3 from './Form3.jsx';
import Confirmation from './Confirmation.jsx';


const App = ({cookie}) => {
  console.log(cookie);
  const[checkoutData, setCheckoutData] = React.useState([]);



  const checkoutClickHandler = () => {
    console.log(`clicked the checkout button`);
  };

  const nextClickHandler = (name, email, password) => {
    console.log(`clicked the next button with ${name} ${email} and ${password}`);
    if (name === ''|| email === '' || password === '') {
      prompt('Be sure to fill out all fields before continuing!');
    } else {
      console.log('all fields filled');
    }
  };

  const next2ClickHandler = (addressLine1, addressLine2, city, state, zipCode, phoneNumber) => {
    console.log(`clicked the next2 button with ${addressLine1} ${addressLine2} ${city} ${state} ${zipCode} ${phoneNumber}`);
    if (addressLine1 === '' || addressLine2 === '' || city === '' || state === '' || zipCode === '' || phoneNumber === '') {
      prompt('Be sure to fill out all fields before continuing!');
    } else {
      console.log('all fields filled');
    }
  };

  const next3ClickHandler = (creditCardNumber, expiryDate, cvv, billingZip) => {
    console.log(`clicked the next3 button with ${creditCardNumber} ${expiryDate} ${cvv} ${billingZip}`);
    if (creditCardNumber === '' || expiryDate === '' || cvv === '' || billingZip === '') {
      prompt('Be sure to fill out all fields before continuing!');
    } else {
      console.log('all fields filled');
    }
  };

  const confirmClickHandler = () => {
    console.log(`clicked the confirm button`);
  };

  return (
    <div>
      <div>App</div>
      <div><Cart checkoutClickHandler={checkoutClickHandler} /></div>
      <div><Form1 nextClickHandler={nextClickHandler} /></div>
      <div><Form2 nextClickHandler={next2ClickHandler} /></div>
      <div><Form3 nextClickHandler={next3ClickHandler} /></div>
      <div><Confirmation checkoutData={checkoutData} confirmClickHandler={confirmClickHandler} /></div>
    </div>
  );
};

export default App;