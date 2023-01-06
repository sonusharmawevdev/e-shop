import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import SingleProduct from './pages/singleproduct/SingleProduct';
import Error from './pages/error/Error';
import { ProductContext } from './context/ProductContext';

const App = () => {
  return (
    <div>
      <ProductContext>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/product-details/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </Router>
      </ProductContext>
    </div>
  );
};

export default App;
