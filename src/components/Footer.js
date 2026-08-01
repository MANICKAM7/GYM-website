import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Mail, Phone, MapPin, Camera, Video, Share2, Send } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="footer-container">
      <div className="footer-glow"></div>
      <div className="footer-wrapper">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <Dumbbell className="logo-icon" />
            <span className="logo-text">IRON<span className="text-red">PULSE</span></span>
          </Link>
          <p className="footer-desc">
            Push your limits, redefine your strength, and achieve your peak fitness goals with our futuristic facilities and expert coaching.
          </p>
          <div className="footer-socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
              <Camera size={20} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="YouTube">
              <Video size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Facebook">
              <Share2 size={20} />
            </a>
          </div>
        </div>

        <div className="footer-links-col">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/programs">Our Programs</Link></li>
            <li><Link to="/trainers">Expert Trainers</Link></li>
            <li><Link to="/schedule">Class Schedule</Link></li>
            <li><Link to="/membership">Pricing Plans</Link></li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h3>Contact Info</h3>
          <ul className="footer-contact">
            <li>
              <MapPin size={18} className="contact-icon" />
              <span>128 Cyberpunk Blvd, Neo-Tokyo, NT</span>
            </li>
            <li>
              <Phone size={18} className="contact-icon" />
              <span>+1 (800) 555-0199</span>
            </li>
            <li>
              <Mail size={18} className="contact-icon" />
              <span>support@ironpulse.com</span>
            </li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h3>Subscribe to Newsletter</h3>
          <p>Get the latest workout tips, nutrition guides, and membership deals.</p>
          <form onSubmit={handleSubscribe} className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn-send">
              <Send size={18} />
            </button>
          </form>
          {subscribed && <span className="newsletter-success">Subscribed successfully! 🔥</span>}
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} IronPulse. All Rights Reserved. Built for high-performance fitness.</p>
      </div>
    </footer>
  );
}
