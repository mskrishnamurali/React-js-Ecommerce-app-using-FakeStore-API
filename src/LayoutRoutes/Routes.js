import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Logout from '../Logout/Logout';
import ProductDetail from '../ProductDetails/ProductDetail';

function RoutesLayout() {
  return (
    <div>
      <>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logout" element={<Logout/>} />
            <Route path="/product/:id" element={<ProductDetail/>} />
          </Routes>
          <Footer />
        </Router>
      </>
    </div>
  );
}

export default RoutesLayout;
