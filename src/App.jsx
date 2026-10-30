import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import AboutUs from './AboutUs.jsx';
import ProductList from './ProductList.js';
import CartItem from './CartItem.jsx';

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleGetStartedClick = () => {
    setShowProductList(true);
    setShowCart(false);
    setShowAbout(false);
  };

  const handleCartClick = () => {
    setShowCart(true);
    setShowProductList(false);
    setShowAbout(false);
  };

  const handlePlantsClick = () => {
    setShowProductList(true);
    setShowCart(false);
    setShowAbout(false);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
    setShowCart(false);
    setShowAbout(false);
  };

  const handleContinueShopping = () => {
    setShowCart(false);
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      {!showProductList && !showCart && !showAbout ? (
        <div className="landing-page">
          <div className="background-image"></div>
          <div className="landing-content">
            <h1>Welcome to Paradise Nursery</h1>
            <p>Where Green Meets Serenity</p>
            <button className="get-started-button" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="navbar">
            <div className="nav-brand">
              <span>Paradise Nursery</span>
            </div>
            <div className="nav-links">
              <a href="#" onClick={(e) => { e.preventDefault(); handleHomeClick(); }}>Home</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handlePlantsClick(); }}>Plants</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handleCartClick(); }} className="cart-icon">
                Cart <span className="cart-count">{totalQuantity}</span>
              </a>
            </div>
          </div>
          {showProductList && <ProductList />}
          {showCart && <CartItem onContinueShopping={handleContinueShopping} />}
          {showAbout && <AboutUs />}
        </>
      )}
    </div>
  );
}

export default App;
