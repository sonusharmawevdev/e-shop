import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './shop.css';
import Product from '../../components/product/Product';
import { PRODUCT } from '../../PRODUCT.js';
import banner from '../../assets/banner.png';
import banner2 from '../../assets/banner2.png';
import banner3 from '../../assets/banner3.png';
const Shop = () => {
  return (
    <div>
      <div>
        <Carousel className="hero-banner" infiniteLoop={true} autoPlay={true}>
          <div className="banner-img">
            <img src={banner} alt="banner1" />
          </div>
          <div className="banner-img">
            <img src={banner2} alt="banner2" />
          </div>
          <div className="banner-img">
            <img src={banner3} alt="banner3" />
          </div>
        </Carousel>
      </div>
      <div className="shop">
        {PRODUCT.map((items, id) => (
          <Product key={id} data={items} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
