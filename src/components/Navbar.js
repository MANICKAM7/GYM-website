import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Dumbbell, Menu, X, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Trainers', path: '/trainers' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Membership', path: '/membership' },
    { name: 'BMI Calculator', path: '/bmi' },
    { name: 'Nutrition', path: '/nutrition' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-wrapper">
          <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
            <Dumbbell className="logo-icon animate-pulse" />
            <span className="logo-text">IRON<span className="text-red">PULSE</span></span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="nav-links-desktop">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path} 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="nav-actions-desktop">
            <Link to="/login" className="btn-login">
              <User size={18} />
              <span>Login</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mobile-nav-drawer"
          >
            <div className="mobile-links-container">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.name} 
                  to={link.path} 
                  className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
              <Link to="/login" className="mobile-nav-link mobile-btn-login" onClick={() => setIsOpen(false)}>
                <User size={18} />
                <span>Login / Register</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
