import React from 'react';
import Axios from 'axios';
import Cart from './Cart.jsx';
import Form1 from './Form1.jsx';
import Form2 from './Form2.jsx';
import Form3 from './Form3.jsx';
import Confirmation from './Confirmation.jsx';


const App = ({cookie}) => {
  console.log(cookie);
  return (
    <div>
      <div>App</div>
      <div><Cart /></div>
      <div><Form1 /></div>
      <div><Form2 /></div>
      <div><Form3 /></div>
      <div><Confirmation /></div>
    </div>
  );
};

export default App;