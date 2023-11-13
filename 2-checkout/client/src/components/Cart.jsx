import React from 'react';

const Cart = ({checkoutClickHandler}) => {

  return (
    <div>
      <h2>Cart</h2>
      <button onClick={() => checkoutClickHandler()}>Checkout</button>
    </div>
  );
};

export default Cart;