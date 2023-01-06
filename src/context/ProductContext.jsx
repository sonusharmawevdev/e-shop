import React, { createContext, useState } from 'react';
import { PRODUCT } from '../PRODUCT.js';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};

  for (let i = 1; i < PRODUCT.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ProductContext = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  function cartCount(cartItems) {
    var count = 0;
    for (var element in cartItems) {
      if (cartItems.hasOwnProperty(element)) {
        count += parseFloat(cartItems[element]);
      }
    }
    return count;
  }
  var cartTotleItems = cartCount(cartItems);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const getTotleCartAmount = () => {
    let totleAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCT.find((product) => product.id === Number(item));
        totleAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totleAmount;
  };

  const ContextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    cartTotleItems,
    getTotleCartAmount,
  };

  console.log(cartItems);

  return (
    <ShopContext.Provider value={ContextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
