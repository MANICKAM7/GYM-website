import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, ShieldCheck,  Cpu } from 'lucide-react';

export default function About() {
  const coreValues = [
    { icon: Target, title: "Precision Training", desc: "Every program we write is backed by sport science, biomechanics, and realistic metabolic pacing." },
    { icon: Zap, title: "Relentless Intensity", desc: "We foster an atmosphere that calls for your absolute best. No shortcuts, just hard efforts rewarded." },
    { icon: ShieldCheck, title: "Elite Community", desc: "A safe, supportive environment free from judgment, where athletes collaborate to push boundaries." },
    { icon: Cpu, title: "Futuristic Facility", desc: "Integrated smart sensors, biomechanic tracking, and biometric recovery tools at your fingertips." }
  ];

  const milestones = [
    { year: "2020", title: "IronPulse Founded", desc: "Started as a single futuristic boutique facility in the heart of the metroplex." },
    { year: "2022", title: "Expansion to 10 Locations", desc: "Successfully opened custom sites across major cities with full recovery saunas." },
    { year: "2024", title: "Smart-Gym Integration", desc: "Fitted all facilities with cloud-based AI equipment to track range of motion and velocity." },
    { year: "2026", title: "15,000+ Active Members", desc: "Crowned as the highest-rated premium fitness franchise for consecutive years." }
  ];

  return (
    <div className="page-container about-page">
      <div className="ambient-glow"></div>
      <div className="ambient-glow-left"></div>

      {/* About Header Section */}
      <section className="about-hero-section section-padding">
        <div className="about-hero-content text-center">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-subtitle"
          >
            WHO WE ARE
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-title text-neon"
          >
            ABOUT IRONPULSE
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="about-hero-description"
          >
            We are not just a fitness club. We are a high-performance sanctuary engineered to help you maximize your physical potential through expert coaching, premium design, and cutting-edge recovery technology.
          </motion.p>
        </div>
      </section>

      {/* Story & Philosophy Section */}
      <section className="section-padding story-section">
        <div className="story-grid">
          <div className="story-left">
            <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600" alt="Gym training" className="story-img" />
          </div>
          <div className="story-right">
            <span className="section-subtitle">Our Philosophy</span>
            <h2>ENGINEERED FOR PROGRESS</h2>
            <p>
              Founded by sports nutritionists and national strength athletes, IronPulse was born out of frustration with generic, crowded commercial gyms. We set out to build a clean space loaded with specialty bars, calibrated plates, and advanced cardio equipment.
            </p>
            <p>
              We believe that physical health is the foundational pillar for overall lifestyle excellence. By training your mind to push through heavy sets and cardiorespiratory fatigue, you build a state of mental resilience that translates into your daily career, relationships, and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="section-padding values-section">
        <div className="section-title-wrapper">
          <span className="section-subtitle">Our DNA</span>
          <h2 className="section-title">CORE PILLARS</h2>
        </div>
        <div className="cards-grid">
          {coreValues.map((value, idx) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card value-card"
              >
                <div className="value-icon-box">
                  <Icon size={28} className="value-icon" />
                </div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Interactive Timeline Section */}
      <section className="section-padding timeline-section">
        <div className="section-title-wrapper">
          <span className="section-subtitle">Our Evolution</span>
          <h2 className="section-title">THE ROAD TO PERFORMANCE</h2>
        </div>
        
        <div className="timeline-wrapper">
          {milestones.map((milestone, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-dot"></div>
              <div className="glass-card timeline-card-content">
                <span className="timeline-year">{milestone.year}</span>
                <h4>{milestone.title}</h4>
                <p>{milestone.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
