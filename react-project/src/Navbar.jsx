import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  // Calculate total items
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">Paradise Nursery</Link>
      <div className="navbar-links">
        <Link to="/products" className="nav-link">Plants</Link>
        <Link to="/cart" className="cart-icon">
          🛒
          {totalQuantity > 0 && <span className="cart-icon-badge">{totalQuantity}</span>}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
