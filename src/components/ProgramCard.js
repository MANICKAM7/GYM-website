import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Dumbbell, Activity, Heart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  dumbbell: Dumbbell,
  flame: Flame,
  activity: Activity,
  heart: Heart
};

export default function ProgramCard({ program, index }) {
  const IconComponent = iconMap[program.icon] || Dumbbell;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card program-card"
    >
      <div className="program-image-wrapper">
        <img src={program.image} alt={program.title} className="program-image" loading="lazy" />
        <div className="program-overlay"></div>
        <div className="program-icon-badge">
          <IconComponent size={24} />
        </div>
      </div>
      
      <div className="program-content">
        <div className="program-meta">
          <span className="program-intensity" data-intensity={program.intensity.toLowerCase()}>
            {program.intensity}
          </span>
          <span className="program-duration">{program.duration}</span>
        </div>
        <h3 className="program-title">{program.title}</h3>
        <p className="program-desc">{program.description}</p>
        
        <Link to="/contact" className="btn-program-cta">
          <span>Book Class</span>
          <Eye size={16} />
        </Link>
      </div>
    </motion.div>
  );
}
