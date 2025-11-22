import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function Confirmation() {
  const loc = useLocation();
  const order = loc.state && loc.state.order;

  if (!order) {
    return (
      <section className="page">
        <h2 className="page-title">No Order Found</h2>
        <div className="card" style={{padding:20, textAlign:'center'}}>
          <p>No recent order. <Link to="/shop">Go to Shop</Link></p>
        </div>
      </section>
    );
  }

  return (
    <section className="page">
      <h2 className="page-title">Order Confirmed</h2>

      <div className="card" style={{padding:20}}>
        <p><strong>Order ID:</strong> {order.id}</p>
        <p><strong>Name:</strong> {order.customer.name}</p>
        <p><strong>Total:</strong> ₹{order.total}</p>
        <p><strong>Date:</strong> {order.date}</p>
      </div>
    </section>
  );
}

