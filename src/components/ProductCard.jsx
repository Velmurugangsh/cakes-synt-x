import React from "react";

export default function ProductCard({ cake, onDetails, onAdd }) {
  return (
    <article className="shop-card card">
      <div className="img-wrap" onClick={() => onDetails(cake)}>
        <img src={cake.img} alt={cake.name} className="square-img" />
      </div>

      <div className="card-body">
        <h3 className="cake-name">{cake.name}</h3>
        <div className="cake-desc muted">{cake.desc}</div>
        <div className="card-row">
          <div className="cake-price">₹{cake.price}</div>
          <button className="btn btn-sm" onClick={() => onAdd(cake)}>Add</button>
        </div>
      </div>
    </article>
  );
}
