import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
// import logo from '../../assets/logo.png';
import { FaShoppingCart } from 'react-icons/fa';
import { ShopContext } from '../../context/ProductContext';
import { SiHomebridge } from 'react-icons/si';

const Navbar = () => {
  const { cartTotleItems } = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="navbar-link">
        <Link to="/">
          <SiHomebridge />
        </Link>

        <Link to="/">
          <span>E-Shop</span>
          {/* <img className="brand" src={logo} alt="bandlogo" /> */}
        </Link>
        <Link to="cart">
          <div className="cart" data-count={cartTotleItems}>
            <FaShoppingCart />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
