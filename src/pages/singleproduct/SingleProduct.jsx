import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import './singleproduct.css';
import { ShopContext } from '../../context/ProductContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PRODUCT } from '../../PRODUCT.js';

const SingleProduct = () => {
  const { addToCart } = useContext(ShopContext);
  const params = useParams();
  const { id } = params;
  //find the single product by id
  const singleProduct = PRODUCT.find((item) => {
    return item.id === Number(id);
  });
  const { title, price, imageUrl, decription } = singleProduct;
  const notify = () => toast('Added Item', { autoClose: 1000 });
  return (
    <div className="single-product-wraper">
      <div className="single-product">
        <div className="product-details-image">
          <img src={imageUrl} alt={`Product-${title}`} />
        </div>
        <div className="product-details-des">
          <div className="product-description">
            <p>Product Name</p>
            <h3>{title}</h3>
            <h2>${price}</h2>
            <p>{decription}</p>
          </div>
          <ToastContainer />
          <div className="product-details-btn">
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
      </div>
    </div>
  );
};

export default SingleProduct;
