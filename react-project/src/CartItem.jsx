import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './App.css';

const CartItem = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // Calculate total amount for all items in the cart
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.cost * item.quantity, 0).toFixed(2);
  };

  const calculateTotalCost = (item) => {
    return (item.cost * item.quantity).toFixed(2);
  };

  // Calculate total number of items
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <Navbar />
      <div className="cart-container">
        <h2 className="cart-title">Total Cart Amount: ${calculateTotalAmount()}</h2>
        
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <Link to="/products" className="continue-shopping-btn" style={{marginTop: '20px', display: 'inline-block'}}>
              Browse Plants
            </Link>
          </div>
        ) : (
          <div>
            {cartItems.map(item => (
              <div key={item.name} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <div className="cart-item-price">${item.cost}</div>
                  <div className="cart-item-actions">
                    <button className="quantity-btn" onClick={() => handleDecrement(item)}>-</button>
                    <span className="quantity-display">{item.quantity}</span>
                    <button className="quantity-btn" onClick={() => handleIncrement(item)}>+</button>
                  </div>
                </div>
                <div className="cart-item-total">
                  Total: ${calculateTotalCost(item)}
                </div>
                <button className="delete-btn" onClick={() => handleRemove(item)}>Delete</button>
              </div>
            ))}
          </div>
        )}
        
        {cartItems.length > 0 && (
          <div className="cart-summary">
            <div className="cart-buttons">
              <Link to="/products" className="continue-shopping-btn">Continue Shopping</Link>
              <button className="checkout-btn" onClick={() => alert('Checkout functionality is coming soon!')}>Checkout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItem;
