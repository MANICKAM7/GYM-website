import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Send, Award } from 'lucide-react';

export default function TrainerCard({ trainer, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card trainer-card"
    >
      <div className="trainer-image-container">
        <img src={trainer.image} alt={trainer.name} className="trainer-image" loading="lazy" />
        <div className="trainer-overlay">
          <div className="trainer-socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="trainer-social-link" aria-label="Instagram">
              <Camera size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="trainer-social-link" aria-label="Twitter">
              <Send size={20} />
            </a>
          </div>
        </div>
        <div className="trainer-badge">
          <Award size={16} />
          <span>{trainer.experience} Exp</span>
        </div>
      </div>

      <div className="trainer-info">
        <span className="trainer-specialty">{trainer.specialty}</span>
        <h3 className="trainer-name">{trainer.name}</h3>
        <p className="trainer-bio">{trainer.bio}</p>
      </div>
    </motion.div>
  );
}
