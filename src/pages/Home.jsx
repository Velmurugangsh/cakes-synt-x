import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
  return (
    <section className="home page">
      <div className="home-hero card">
        <div className="hero-left">
          <h1 className="hero-title">Syntx Cakes — Premium Bakery</h1>
          <p className="hero-sub">Delicious, bakery-style cakes — handcrafted daily. Premium ingredients, delicate finishes.</p>
          <div className="hero-actions">
            <Link to="/shop" className="btn">Explore Cakes</Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>

        <div className="hero-right">
          <div className="featured card">
            <img src="/images/cake14.jpeg" alt="featured" className="square-img" />
            <div className="featured-info">
              <h3>Chocolate Truffle</h3>
              <div className="muted">Rich layers with silky truffle cream</div>
            </div>
          </div>
        </div>
      </div>

      <section className="about card">
        <h2>About Our Cakes</h2>
        <p className="muted">We hand-bake each cake using fresh butter, real chocolate and seasonal fruits. Our cakes make celebrations memorable.</p>
      </section>
    </section>
  );
}
