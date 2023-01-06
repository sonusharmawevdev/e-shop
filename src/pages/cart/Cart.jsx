import React, { useContext } from 'react';
import './cart.css';
import CartDetails from '../../components/cart/CartDetails';
import { PRODUCT } from '../../PRODUCT.js';
import { ShopContext } from '../../context/ProductContext';
import CartTotle from '../../components/cart/CartTotle';

const Cart = () => {
  const { cartItems, cartTotleItems } = useContext(ShopContext);

  return (
    <div className="cart-wraper">
      {PRODUCT.map((items, id) => {
        if (cartItems[items.id] !== 0) {
          return (
            <div>
              <CartDetails key={items.id} data={items} />
            </div>
          );
        }
      })}{' '}
      {cartTotleItems > 0 ? <CartTotle /> : 'No Items In Your Cart '}
    </div>
  );
};

export default Cart;
