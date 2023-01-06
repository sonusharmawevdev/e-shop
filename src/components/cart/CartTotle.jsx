import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../../context/ProductContext';
const CartTotle = () => {
  const { getTotleCartAmount } = useContext(ShopContext);
  const navigate = useNavigate();
  const totleAmount = getTotleCartAmount();

  return (
    <div>
      <div className="cart-grand-totle">
        <div className="cart-amount-totle">
          <h2>Totle Amount</h2>
          <h3>${totleAmount}</h3>
        </div>
      </div>
      <div className="cart-confirm-btn">
        <button onClick={() => navigate('/')}>Continune </button>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default CartTotle;
