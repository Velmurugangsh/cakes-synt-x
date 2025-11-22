import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ cartCount = 0 }) {
  return (
    <header className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">
          <div className="logo-bubble">SC</div>
          <div className="brand">
            <div className="brand-name">Syntx Cakes</div>
            <div className="brand-tag">Baking Happiness</div>
          </div>
        </Link>
      </div>

      <nav className="nav-right">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart" className="cart-pill">Cart ({cartCount})</Link>
      </nav>
    </header>
  );
}
