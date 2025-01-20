import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa"; 
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          Shopi
        </Link>
        <ul className={`category-list ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/">All</Link>
          </li>
          <li>
            <Link to="/clothes">Clothes</Link>
          </li>
          <li>
            <Link to="/electronics">Electronics</Link>
          </li>
          <li>
            <Link to="/furnitures">Furnitures</Link>
          </li>
          <li>
            <Link to="/toys">Toys</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <span className="user-email">userintheapp@test.com</span>
        <ul className="user-links">
          <li>
            <Link to="/orders">My Orders</Link>
          </li>
          <li>
            <Link to="/account">My Account</Link>
          </li>
        </ul>

        
        <div className="cart-icon" onClick={toggleCart}>
          <FaShoppingCart />
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

 
      {cartOpen && (
        <div className="cart-panel">
          <div className="cart-header">
            <h2>My Cart</h2>
            <button className="close-btn" onClick={toggleCart}>
              <FaTimes />
            </button>
          </div>
          <div className="cart-content">
            <p>Your cart is empty</p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
