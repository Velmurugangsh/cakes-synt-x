import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Checkout({ cart = [], placeOrder }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({ name: "", phone: "", address: "" });

  const total = cart.reduce((s,i)=> s + i.price * i.qty, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address) { alert("Fill all fields"); return; }
    const order = placeOrder ? placeOrder(form) : null;
    navigate("/confirmation", { state: { order } });
  };

  return (
    <section className="checkout page">
      <h2 className="page-title">Checkout</h2>

      <div className="checkout card">
        <form onSubmit={handleSubmit} className="checkout-form">
          <label>Name<input value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} required /></label>
          <label>Phone<input value={form.phone} onChange={(e)=>setForm({...form, phone:e.target.value})} required /></label>
          <label>Address<textarea value={form.address} onChange={(e)=>setForm({...form, address:e.target.value})} required rows={4} /></label>

          <div style={{marginTop:12}}><strong>Total: ₹{total}</strong></div>

          <button className="btn" type="submit" style={{marginTop:12}}>Place Order</button>
        </form>
      </div>
    </section>
  );
}
