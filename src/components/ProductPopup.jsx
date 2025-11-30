import React from "react";

export default function ProductPopup({ cake, onClose, onAdd }) {
  if (!cake) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal card" onClick={(e) => e.stopPropagation()}>
        <img src={cake.img} alt={cake.name} className="popup-img" />
        <h2>{cake.name}</h2>
        <p className="muted">{cake.desc}</p>
        <p className="cake-price">1kg — ₹{cake.price}</p>

        <div style={{marginTop:12, display:'flex', gap:10}}>
          <button className="btn" onClick={() => { onAdd(cake); onClose(); }}>
            Add to Cart
          </button>
          <button className="btn btn-outline" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
