import React from "react";

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} Syntx Cakes</div>
        <div className="muted">Chennai • +91 9551662672 • info@synt-x.com</div>
      </div>
    </footer>
  );
}
