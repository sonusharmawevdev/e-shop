import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ProductContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './product.css';

const Product = (props) => {
  const { addToCart } = useContext(ShopContext);
  const { id, title, price, imageUrl, decription } = props.data;
  const notify = () => toast('Added Item', { autoClose: 1000 });

  return (
    <div>
      <div className="product">
        <Link to={`/product-details/${id}`}>
          <img src={imageUrl} alt="" />
        </Link>

        <div className="description">
          <h3>{title}</h3>
          <h2>${price}</h2>
          {decription.slice(0, 100)}
          <button
            onClick={() => {
              addToCart(id);
              notify();
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Product;
