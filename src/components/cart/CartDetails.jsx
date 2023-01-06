import React, { useContext } from 'react';
import './cartdetails.css';
import { ShopContext } from '../../context/ProductContext';

const CartDetails = (props) => {
  const { addToCart, removeFromCart, cartItems } = useContext(ShopContext);
  const { id, title, price, imageUrl } = props.data;

  return (
    <div className="product-cart">
      <div className="cart-thumb">
        <img src={imageUrl} alt={`product${id}`} />
      </div>
      <div className="cart-details">
        <p>Product Details</p>
        <h4>{title}</h4>
        <h5>${price}</h5>
        <div className="cart-counter">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input
            type="text"
            placeholder={cartItems[id] > 0 ? cartItems[id] : 'null'}
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
      <div className="cart-totle-amount">
        X <b>{price * cartItems[id]}</b>
      </div>
    </div>
  );
};

export default CartDetails;
