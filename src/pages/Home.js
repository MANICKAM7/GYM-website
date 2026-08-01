import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Dumbbell, Shield, Award, Users, ArrowRight, Play, Star } from 'lucide-react';
import ProgramCard from '../components/ProgramCard';
import TrainerCard from '../components/TrainerCard';
import PricingCard from '../components/PricingCard';
import TestimonialCard from '../components/TestimonialCard';

// Animated Counter component
function Counter({ endValue, duration = 1.5, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(endValue);
    if (start === end) return;

    let totalMiliseconds = duration * 1000;
    let incrementTime = Math.max(Math.floor(totalMiliseconds / end), 10);
    
    let timer = setInterval(() => {
      start += Math.ceil(end / 100);
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [endValue, duration]);

  return <span>{count}{suffix}</span>;
}

export default function Home() {
  const featuredPrograms = [
    { title: "Strength Power", icon: "dumbbell", intensity: "High", duration: "60 mins", image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=500", description: "Incorporate progressive strength lifts to build density, raw power, and solid muscle base." },
    { title: "Cardio Shred", icon: "flame", intensity: "Max", duration: "45 mins", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=500", description: "Elevate your heart rate through metabolic conditioning and HIIT to incinerate body fat." },
    { title: "Box & Combat", icon: "activity", intensity: "Medium", duration: "50 mins", image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=500", description: "Learn professional bag work, kickboxing drills, and core movements to sculpt full agility." }
  ];

  const trainers = [
    { name: "Marcus Vane", specialty: "Pro Powerlifting Coach", experience: "8 Yrs", bio: "Former national lifter specializing in deadlifts, raw strength building, and posture correction.", image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=400" },
    { name: "Sarah Connor", specialty: "HIIT & Transformation", experience: "6 Yrs", bio: "Passionate about athletic performance, weight-loss routines, and high-intensity metabolic conditioning.", image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=400" }
  ];

  const plans = [
    { name: "Iron Basic", monthlyPrice: 29, yearlyPrice: 240, popular: false, features: [{ text: "Access to Gym Floor", available: true }, { text: "Basic Locker Access", available: true }, { text: "1 Group Class/wk", available: true }, { text: "Personal Trainer Guidance", available: false }, { text: "Dietary Assessment", available: false }] },
    { name: "Pulse Elite", monthlyPrice: 59, yearlyPrice: 480, popular: true, features: [{ text: "24/7 Gym Floor Access", available: true }, { text: "Premium Locker & Sauna", available: true }, { text: "Unlimited Group Classes", available: true }, { text: "Monthly PT Session", available: true }, { text: "Standard Nutrition Guides", available: true }] }
  ];

  const testimonial = {
    name: "John Miller",
    role: "Member for 1 Year",
    rating: 5,
    text: "Joining IronPulse completely altered my perception of fitness. The trainers are top-notch, the glassmorphism vibe makes workouts feel elite, and I've gained 8kg of muscle!",
    avatar: "https://images.unsplash.com/photo-1605296867304-46d5465a25f1?q=80&w=150"
  };

  return (
    <div className="page-container home-page">
      <div className="ambient-glow"></div>
      <div className="ambient-glow-left"></div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-overlay">
          <img 
            src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1600" 
            alt="Futuristic Gym Background" 
            className="hero-fallback-image"
          />
        </div>
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-badge"
          >
            <Dumbbell size={16} className="text-red" />
            <span>ESTABLISHED FOR ELITE PERFORMANCE</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-title"
          >
            REDEFINE YOUR <br />
            <span className="text-neon">LIMITS.</span> BUILD YOUR <span className="text-gradient">LEGACY.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hero-subtitle"
          >
            Access state-of-the-art facilities, cinematic workouts, customized plans, and world-class trainers that guide you step-by-step.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-ctas"
          >
            <Link to="/membership" className="btn-neon">
              <span>Start Your Journey</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/programs" className="btn-outline">
              <Play size={16} fill="white" />
              <span>Explore Programs</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="stats-section section-padding">
        <div className="stats-grid">
          <div className="stat-card">
            <h3><Counter endValue={12} suffix="k+" /></h3>
            <p>Active Members</p>
          </div>
          <div className="stat-card">
            <h3><Counter endValue={45} suffix="+" /></h3>
            <p>Certified Coaches</p>
          </div>
          <div className="stat-card">
            <h3><Counter endValue={98} suffix="%" /></h3>
            <p>Success Rate</p>
          </div>
          <div className="stat-card">
            <h3><Counter endValue={150} suffix="+" /></h3>
            <p>Weekly Schedules</p>
          </div>
        </div>
      </section>

      {/* Featured Programs Section */}
      <section className="section-padding featured-programs-section">
        <div className="section-title-wrapper">
          <span className="section-subtitle">Our Specialization</span>
          <h2 className="section-title">FEATURED WORKOUTS</h2>
        </div>
        <div className="cards-grid">
          {featuredPrograms.map((program, index) => (
            <ProgramCard key={program.title} program={program} index={index} />
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding why-choose-section">
        <div className="why-choose-grid">
          <div className="why-choose-left">
            <span className="section-subtitle">Why Choose Us</span>
            <h2 className="section-title">WE PROVIDE NEXT-GEN HEALTH FACILITIES</h2>
            <p className="why-text">
              We focus on premium lifestyle integrations. We do not just provide weights; we construct full bio-metric monitoring systems, custom meal splits, and a highly competitive, supportive community of athletes.
            </p>
            <div className="why-bullets">
              <div className="why-bullet">
                <div className="bullet-icon"><Shield size={20} /></div>
                <div>
                  <h4>Secure & Bio-Safe Facilities</h4>
                  <p>Equipped with advanced sanitization, air filtration, and biometrics access keys.</p>
                </div>
              </div>
              <div className="why-bullet">
                <div className="bullet-icon"><Award size={20} /></div>
                <div>
                  <h4>Award-Winning Coaching Split</h4>
                  <p>Each trainer possesses national certifications and extensive bio-mechanic education.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="why-choose-right">
            <div className="why-image-collage">
              <img src="https://images.unsplash.com/photo-1605296867304-46d5465a25f1?q=80&w=600" alt="Athlete training" className="collage-img main-img" />
              <div className="collage-accent-box">
                <Users size={32} className="text-red" />
                <h4>4.9/5 Rating</h4>
                <span>Over 2,000 Verified Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trainers Preview Section */}
      <section className="section-padding trainers-preview-section">
        <div className="section-title-wrapper">
          <span className="section-subtitle">Elite Mentorship</span>
          <h2 className="section-title">EXPERT COACHES</h2>
        </div>
        <div className="cards-grid">
          {trainers.map((trainer, index) => (
            <TrainerCard key={trainer.name} trainer={trainer} index={index} />
          ))}
        </div>
        <div className="view-more-container flex-center">
          <Link to="/trainers" className="btn-outline view-more-btn">
            <span>Meet All Coaches</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Membership Pricing Preview Section */}
      <section className="section-padding membership-preview-section">
        <div className="section-title-wrapper">
          <span className="section-subtitle">No Hidden Contracts</span>
          <h2 className="section-title">FLEXIBLE PLANS</h2>
        </div>
        <div className="pricing-grid-preview flex-center">
          <div className="cards-grid" style={{ maxWidth: '900px' }}>
            {plans.map((plan, index) => (
              <PricingCard key={plan.name} plan={plan} billingCycle="monthly" index={index} />
            ))}
          </div>
        </div>
        <div className="view-more-container flex-center">
          <Link to="/membership" className="btn-neon view-plans-btn">
            <span>Compare All Tiers</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Testimonials Slider Section */}
      <section className="section-padding testimonials-preview-section">
        <div className="section-title-wrapper">
          <span className="section-subtitle">Success Stories</span>
          <h2 className="section-title">WHAT MEMBERS SAY</h2>
        </div>
        <div className="testimonial-single-wrapper flex-center">
          <div style={{ maxWidth: '600px', width: '100%' }}>
            <TestimonialCard testimonial={testimonial} index={0} />
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="contact-cta-section section-padding">
        <div className="cta-glass-banner">
          <h2>READY TO SHATTER YOUR GOALS?</h2>
          <p>Get a free 1-day pass, take a guided tour of the facilities, and consult with a specialist.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-neon">
              <span>Claim Free Pass</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/about" className="btn-outline">
              <span>Learn About Us</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
