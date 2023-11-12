import React from 'react';

const Cart = ({checkoutClickHandler}) => {

  return (
    <div>
      <div>Cart</div>
      <button onClick={() => checkoutClickHandler()}>Checkout</button>
    </div>
  );
};

export default Cart;