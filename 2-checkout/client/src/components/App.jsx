import React from 'react';
import Axios from 'axios';
import Cart from './Cart.jsx';
import Form1 from './Form1.jsx';
import Form2 from './Form2.jsx';
import Form3 from './Form3.jsx';
import Confirmation from './Confirmation.jsx';


const App = ({cookie}) => {

  const[checkoutData, setCheckoutData] = React.useState([{session_id: cookie}]);

  React.useEffect(() => {
    Axios.get(`http://localhost:3001/checkout/${cookie}`)
    .then((data) => {
      setCheckoutData(data.data);
      console.log(data.data);
    })
  },[])


  const checkoutClickHandler = () => {
    console.log(`clicked the checkout button`);
    var sendData;
    checkoutData.length !== 0 ? sendData=checkoutData[0] : sendData = {session_id: cookie};
    Axios.post(`http://localhost:3001/checkout/${cookie}`, sendData)
      .then(() => {
        Axios.get(`http://localhost:3001/checkout/${cookie}`)
          .then((data) => {
            setCheckoutData(data.data);
            console.log(data.data);
          })
      })
  };

  const nextClickHandler = (name, email, password) => {
    console.log(`clicked the next button with ${name} ${email} and ${password}`);
    if (name === ''|| email === '' || password === '') {
      prompt('Be sure to fill out all fields before continuing!');
    } else {
      console.log('all fields filled');
      //need to make a post request and send in the passed in data AS WELL AS boolean data from the checkout data with the one flag that i want to swap!
      var copyData = JSON.parse(JSON.stringify(checkoutData[0]));
      copyData.user_name = name;
      copyData.user_password = password;
      copyData.email = email;
      Axios.post(`http://localhost:3001/checkout/${cookie}`, copyData)
      .then(() => {
        Axios.get(`http://localhost:3001/checkout/${checkoutData[0].session_id}`)
          .then((data) => {
            setCheckoutData(data.data);
            console.log(data.data);
          })
      })
    }
  };

  const next2ClickHandler = (addressLine1, addressLine2, city, state, zipCode, phoneNumber) => {
    console.log(`clicked the next2 button with ${addressLine1} ${addressLine2} ${city} ${state} ${zipCode} ${phoneNumber}`);
    if (addressLine1 === '' || addressLine2 === '' || city === '' || state === '' || zipCode === '' || phoneNumber === '') {
      prompt('Be sure to fill out all fields before continuing!');
    } else {
      console.log('all fields filled');
      //need to make a post request and send in the passed in data AS WELL AS boolean data from the checkout data with the one flag that i want to swap!
      var copyData = JSON.parse(JSON.stringify(checkoutData[0]));
      copyData.shipping_address_line1 = addressLine1;
      copyData.shipping_address_line2 = addressLine2;
      copyData.city = city;
      copyData.us_state = state;
      copyData.zip_code = zipCode;
      copyData.phone_number = phoneNumber;
      Axios.post(`http://localhost:3001/checkout/${cookie}`, copyData)
      .then(() => {
        Axios.get(`http://localhost:3001/checkout/${checkoutData[0].session_id}`)
          .then((data) => {
            setCheckoutData(data.data);
            console.log(data.data);
          })
      })
    }
  };

  const next3ClickHandler = (creditCardNumber, expiryDate, cvv, billingZip) => {
    console.log(`clicked the next3 button with ${creditCardNumber} ${expiryDate} ${cvv} ${billingZip}`);
    if (creditCardNumber === '' || expiryDate === '' || cvv === '' || billingZip === '') {
      prompt('Be sure to fill out all fields before continuing!');
    } else {
      console.log('all fields filled');
      //need to make a post request and send in the passed in data AS WELL AS boolean data from the checkout data with the one flag that i want to swap!
      var copyData = JSON.parse(JSON.stringify(checkoutData[0]));
      copyData.credit_card_number = creditCardNumber;
      copyData.expiry = expiryDate;
      copyData.cvv = cvv;
      copyData.billing_zip_code = billingZip;

      Axios.post(`http://localhost:3001/checkout/${cookie}`, copyData)
      .then(() => {
        Axios.get(`http://localhost:3001/checkout/${checkoutData[0].session_id}`)
          .then((data) => {
            setCheckoutData(data.data);
            console.log(data.data);
          })
      })
    }
  };

  const confirmClickHandler = () => {
    console.log(`clicked the confirm button`);
    //need to make a post request to swap the final boolean flag
    Axios.post(`http://localhost:3001/checkout/${cookie}`, checkoutData[0])
      .then(() => {
        Axios.get(`http://localhost:3001/checkout/${checkoutData[0].session_id}`)
          .then((data) => {
            setCheckoutData(data.data);
            console.log(data.data);
          })
      })
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