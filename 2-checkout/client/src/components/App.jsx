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

  const nextClickHandler = (formData) => {
    console.log(`clicked the next button`);
  };

  const confirmClickHandler = () => {
    console.log(`clicked the confirm button`);
  };

  return (
    <div>
      <div>App</div>
      <div><Cart checkoutClickHandler={checkoutClickHandler} /></div>
      <div><Form1 nextClickHandler={nextClickHandler} /></div>
      <div><Form2 nextClickHandler={nextClickHandler} /></div>
      <div><Form3 nextClickHandler={nextClickHandler} /></div>
      <div><Confirmation checkoutData={checkoutData} confirmClickHandler={confirmClickHandler} /></div>
    </div>
  );
};

export default App;