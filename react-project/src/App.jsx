import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import './App.css';

const Home = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <p>Breathe life into your home with our stunning collection of houseplants.</p>
        <Link to="/products" className="get-started-btn">Get Started</Link>
        <div style={{ marginTop: '50px' }}>
          <AboutUs />
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </div>
  );
}

export default App;
