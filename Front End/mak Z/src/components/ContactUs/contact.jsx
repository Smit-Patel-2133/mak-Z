import React from 'react';
import Header from '../Header/Header';

const Contact = () => {
  return (
    <div style={{ overflow: 'hidden', height: '100vh' }}>
      <Header />
      <div style={{ display: 'flex', width: '100vw', height: '100vh', background: '#FCFDFD', overflow: 'hidden' }}>
        <div style={{ width: '45vw', height: '100%', backgroundImage: 'url("../src/assets/picture/contactus.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} />
        <div style={{ background: '#FCFDFD', width: '50vw', height: '100vh', padding: '5rem 3.5rem', overflow: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', textAlign: 'center', width: '160px', position: 'absolute', top: '0.5rem', right: 0 }} />
          <h1 style={{ color: '#3F444C', textTransform: 'uppercase', fontSize: '2.5rem', letterSpacing: '0.5rem', fontWeight: 300 }}>Contact us</h1>
          <p style={{ color: '#818386', fontSize: '0.9rem', letterSpacing: '0.01rem', width: '40vw', margin: '0.25rem 0' }}>Code with Ease, Design with Style - MakZ: Your Drag-and-Drop Website Wizard!</p>
          <form id="contact-form" method="post" style={{ width: '31.25rem', position: 'relative', marginTop: '2rem', padding: '1rem 0' }}>
            <label htmlFor="name" style={{ color: '#818386', textTransform: 'uppercase', fontSize: '0.625rem' }}>Full name</label>
            <input type="text" id="name" name="name" placeholder="Your Full Name" required style={{ color: '#010712', fontWeight: 500, background: '#FCFDFD', border: 'none', borderBottom: '1px solid #818386', padding: '0.5rem 0', marginBottom: '1rem', outline: 'none', width: '40vw' }} />
            <label htmlFor="email" style={{ color: '#818386', textTransform: 'uppercase', fontSize: '0.625rem' }}>Email Address</label>
            <input type="email" id="email" name="email" placeholder="Your Email Address" required style={{ color: '#010712', fontWeight: 500, background: '#FCFDFD', border: 'none', borderBottom: '1px solid #818386', padding: '0.5rem 0', marginBottom: '1rem', outline: 'none', width: '40vw' }} />
            <label htmlFor="message" style={{ color: '#818386', textTransform: 'uppercase', fontSize: '0.625rem' }}>Message</label>
            <textarea rows="6" placeholder="Your Message" id="message" name="message" required style={{ color: '#010712', fontWeight: 500, background: '#FCFDFD', border: 'none', borderBottom: '1px solid #818386', padding: '0.5rem 0', marginBottom: '1rem', outline: 'none', width: '40vw', resize: 'none' }} />
            <button type="submit" id="submit" name="submit" style={{ textTransform: 'uppercase', fontWeight: 300, background: '#3B3636', color: '#FCFDFD', width: '10rem', height: '2.25rem', border: 'none', borderRadius: '2px', outline: 'none', cursor: 'pointer' }}>Send</button>
          </form>
          <div id="error" style={{ width: '40vw', margin: '0.125rem 0', fontSize: '0.75rem', textTransform: 'uppercase', fontFamily: 'Jost', color: '#818386' }} />
          <div id="success-msg" style={{ width: '40vw', margin: '0.125rem 0', fontSize: '0.75rem', textTransform: 'uppercase', fontFamily: 'Jost', color: '#818386', transitionDelay: '3s' }} />
        </div>
      </div>
    </div>
  );
};

export default Contact;