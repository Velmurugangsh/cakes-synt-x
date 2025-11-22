import React, { useState } from "react";

export default function Contact(){
  const [form, setForm] = useState({ name:'', email:'', msg:'' });

  const submit = (e) => {
    e.preventDefault();
    alert("Thanks — we'll contact you soon!");
    setForm({ name:'', email:'', msg:'' });
  };

  return (
    <section className="page">
      <h2 className="page-title">Contact Us</h2>

      <div className="card contact-card">
        <form className="contact-form" onSubmit={submit}>
          <input placeholder="Name" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} required />
          <input placeholder="Email" type="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} required />
          <textarea placeholder="Message" value={form.msg} onChange={(e)=>setForm({...form, msg:e.target.value})} rows={5} required />
          <button className="btn" type="submit">Send Message</button>
        </form>

        <div style={{marginTop:16}} className="muted">
          <p><strong>Visit:</strong> Chennai, Tamil Nadu</p>
          <p><strong>Phone:</strong> +91 95516 62672</p>
          <p><strong>Website Address:</strong>synt_x.com</p>
        </div>
      </div>
    </section>
  );
}
