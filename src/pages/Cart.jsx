import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Cart({ cart = [], increaseQty, decreaseQty, removeItem, clearCart }) {
  const navigate = useNavigate();
  const [payment, setPayment] = useState("");

  const total = cart.reduce((s,i) => s + i.price * i.qty, 0);

  const proceed = () => {
    if (cart.length === 0) { alert("Cart is empty"); return; }
    if (!payment) { alert("Select a payment method"); return; }
    // proceed to checkout
    navigate("/checkout", { state: { payment } });
  };

  return (
    <section className="cart page">
      <h2 className="page-title">Your Cart</h2>

      <div className="cart-container card">
        {cart.length === 0 ? (
          <div className="empty">
            <p>Your cart is empty.</p>
            <Link to="/shop" className="btn">Shop Cakes</Link>
          </div>
        ) : (
          <div className="cart-grid">
            <div className="cart-list">
              {cart.map(item => (
                <div className="cart-item" key={item.id}>
                  <img src={item.img} alt={item.name} />
                  <div className="cart-details">
                    <h4>{item.name}</h4>
                    <div className="muted">₹{item.price} each</div>

                    <div className="cart-controls">
                      <div className="cart-qty-buttons">
                        <button className="qty-btn" onClick={() => decreaseQty(item.id)}>-</button>
                        <span style={{margin: "0 8px"}}>{item.qty}</span>
                        <button className="qty-btn" onClick={() => increaseQty(item.id)}>+</button>
                      </div>
                      <button className="btn btn-sm" onClick={() => removeItem(item.id)} style={{marginLeft:12}}>Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <aside className="cart-summary">
              <h3>Order Summary</h3>
              <p>Items: {cart.reduce((s,i)=>s+i.qty,0)}</p>
              <div className="cart-total"><strong>Total: ₹{total}</strong></div>

              <div className="payment-box">
                <label className="payment-option">
                  <input type="radio" name="pay" value="gpay" onChange={(e)=>setPayment(e.target.value)} /> Google Pay (GPay)
                </label>
                <label className="payment-option">
                  <input type="radio" name="pay" value="cod" onChange={(e)=>setPayment(e.target.value)} /> Cash on Delivery
                </label>
              </div>

              <div style={{marginTop:12}}>
                <button className="btn" onClick={proceed}>Proceed to Checkout</button>
                <button className="btn btn-sm" onClick={clearCart} style={{marginLeft:8}}>Clear Cart</button>
              </div>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}
