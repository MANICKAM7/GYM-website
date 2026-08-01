import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'general', message: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid.";
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message cannot be empty.";
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSuccess(true);
      setFormData({ name: '', email: '', subject: 'general', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <div className="page-container contact-page">
      <div className="ambient-glow"></div>
      <div className="ambient-glow-left"></div>

      <section className="contact-header-section section-padding">
        <div className="text-center">
          <span className="section-subtitle">CONNECT WITH US</span>
          <h1 className="section-title text-neon">GET IN TOUCH</h1>
          <p className="contact-desc">
            Have questions about memberships, coaching, or corporate packages? Send us a message below.
          </p>
        </div>

        <div className="contact-grid-layout">
          {/* Left Side: Contact Channels & Location */}
          <div className="contact-info-column">
            <h2>DIRECT CONTACT</h2>
            <p>We typically respond within 12 business hours. Walk-ins are always welcome during operating schedule.</p>

            <div className="contact-cards-stack">
              <div className="glass-card contact-channel-card">
                <MapPin className="text-red" size={24} />
                <div>
                  <h4>HQ Location</h4>
                  <p>128 Cyberpunk Blvd, Neo-Tokyo, NT</p>
                </div>
              </div>

              <div className="glass-card contact-channel-card">
                <Phone className="text-red" size={24} />
                <div>
                  <h4>Phone Support</h4>
                  <p>+1 (800) 555-0199</p>
                </div>
              </div>

              <div className="glass-card contact-channel-card">
                <Mail className="text-red" size={24} />
                <div>
                  <h4>Email Channels</h4>
                  <p>support@ironpulse.com</p>
                </div>
              </div>

              <div className="glass-card contact-channel-card">
                <Clock className="text-red" size={24} />
                <div>
                  <h4>Working Hours</h4>
                  <p>Mon - Fri: 5 AM - 11 PM | Sat - Sun: 7 AM - 9 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form validation */}
          <div className="contact-form-column">
            <div className="glass-card contact-form-card">
              <h3>SEND US A SECURE MESSAGE</h3>
              <form onSubmit={handleSubmit} className="contact-actual-form">
                <div className="input-group">
                  <label>Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Enter your name" 
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>

                <div className="input-group">
                  <label>Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Enter your email" 
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div className="input-group">
                  <label>Subject</label>
                  <select name="subject" value={formData.subject} onChange={handleChange}>
                    <option value="general">General Membership Inquiries</option>
                    <option value="trainer">1-on-1 Personal Trainer Session</option>
                    <option value="corporate">Corporate Franchise Packages</option>
                    <option value="nutrition">Diet & Nutrition Consultation</option>
                  </select>
                </div>

                <div className="input-group">
                  <label>Message Details</label>
                  <textarea 
                    name="message"
                    rows="5" 
                    placeholder="Write details of your fitness inquiries..." 
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                  ></textarea>
                  {errors.message && <span className="error-text">{errors.message}</span>}
                </div>

                <button type="submit" className="btn-neon btn-full">
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>

              {success && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="contact-success-toast flex-center"
                >
                  <CheckCircle2 size={20} className="text-red" />
                  <span>Message Sent Successfully! We'll reply shortly. 🔥</span>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
