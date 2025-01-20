import React from "react";
// import "./CartDrawer.css";

const CartDrawer = ({ onClose }) => {
  // Mock cart data
  const cartItems = [
    { id: 1, title: "Product 1", price: 20 },
    { id: 2, title: "Product 2", price: 15 },
  ];

  return (
    <div className="cart-drawer">
      <div className="cart-header">
        <h2>My Cart</h2>
        <button onClick={onClose} className="close-btn">
          X
        </button>
      </div>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <span>{item.title}</span>
            <span>${item.price}</span>
          </div>
        ))}
      </div>
      <div className="cart-footer">
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};

export default CartDrawer;
