import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Confirmation from "./pages/Confirmation";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  // cart: array of { id, name, price, img, desc, qty }
  const [cart, setCart] = useState([]);

  const addToCart = (cake) => {
    setCart((prev) => {
      const found = prev.find((p) => p.id === cake.id);
      if (found) {
        return prev.map((p) =>
          p.id === cake.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...cake, qty: 1 }];
    });
  };

  const increaseQty = (id) =>
    setCart((prev) => prev.map((p) => (p.id === id ? { ...p, qty: p.qty + 1 } : p)));

  const decreaseQty = (id) =>
    setCart((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, qty: Math.max(1, p.qty - 1) } : p))
        .filter((p) => p.qty > 0)
    );

  const removeItem = (id) => setCart((prev) => prev.filter((p) => p.id !== id));

  const clearCart = () => setCart([]);

  const placeOrder = (customer) => {
    const order = {
      id: "ORD" + Date.now(),
      items: cart,
      total: cart.reduce((s, i) => s + i.price * i.qty, 0),
      customer,
      date: new Date().toLocaleString(),
    };
    clearCart();
    return order;
  };

  return (
    <Router>
      <Navbar cartCount={cart.reduce((s,i)=>s+i.qty,0)} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop addToCart={addToCart} />} />
          <Route path="/cart" element={
            <Cart
              cart={cart}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
              removeItem={removeItem}
              clearCart={clearCart}
            />
          } />
          <Route path="/checkout" element={<Checkout cart={cart} placeOrder={placeOrder} />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
