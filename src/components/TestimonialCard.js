import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card testimonial-card"
    >
      <div className="quote-icon-wrapper">
        <Quote size={28} className="quote-icon" />
      </div>
      
      <div className="stars-row">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            fill={i < testimonial.rating ? '#ff2a2a' : 'none'} 
            stroke={i < testimonial.rating ? '#ff2a2a' : '#555'} 
          />
        ))}
      </div>

      <p className="testimonial-text">"{testimonial.text}"</p>

      <div className="testimonial-user">
        <img src={testimonial.avatar} alt={testimonial.name} className="user-avatar" loading="lazy" />
        <div className="user-info">
          <h4 className="user-name">{testimonial.name}</h4>
          <span className="user-role">{testimonial.role}</span>
        </div>
      </div>
    </motion.div>
  );
}
