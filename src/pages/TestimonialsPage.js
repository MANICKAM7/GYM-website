import React, { useState } from 'react';
import TestimonialCard from '../components/TestimonialCard';
import { Star, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const initialTestimonials = [
  { name: "John Miller", role: "Powerlifter", rating: 5, text: "Joining IronPulse completely altered my perception of fitness. The trainers are top-notch, the glassmorphism vibe makes workouts feel elite, and I've gained 8kg of muscle!", avatar: "https://images.unsplash.com/photo-1605296867304-46d5465a25f1?q=80&w=150" },
  { name: "Jessica Taylor", role: "Marathon Runner", rating: 5, text: "The cardio selection and interval programming here helped me shave 12 minutes off my marathon time! Highly recommend the coaches.", avatar: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=150" },
  { name: "Liam Sterling", role: "Executive Member", rating: 4, text: "An excellent workspace. I love the sauna recovery options and standard biometric tracking app. It makes it very simple to stay consistent.", avatar: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=150" }
];

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [rating, setRating] = useState(5);
  const [text, setText] = useState('');
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !text) return;

    const newTestimonial = {
      name,
      role: role || "Gym Enthusiast",
      rating,
      text,
      avatar: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=150" // default placeholder
    };

    setTestimonials([newTestimonial, ...testimonials]);
    setName('');
    setRole('');
    setRating(5);
    setText('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="page-container testimonials-page">
      <div className="ambient-glow"></div>
      <div className="ambient-glow-left"></div>

      <section className="testimonials-header-section section-padding">
        <div className="text-center">
          <span className="section-subtitle">COMMUNITY REVIEWS</span>
          <h1 className="section-title text-neon">MEMBER TESTIMONIALS</h1>
          <p className="testimonials-desc">
            Read stories of transformation, consistency, and strength. Submit your own experience to inspire others.
          </p>
        </div>

        <div className="testimonials-layout-grid">
          {/* Left Column: Testimonial Cards List */}
          <div className="testimonials-cards-list">
            {testimonials.map((item, idx) => (
              <TestimonialCard key={idx} testimonial={item} index={idx} />
            ))}
          </div>

          {/* Right Column: Submission Form */}
          <div className="testimonial-form-column">
            <div className="glass-card review-submit-card">
              <div className="form-header-icon flex-center">
                <MessageSquare className="text-red animate-pulse" size={24} />
              </div>
              <h3>SHARE YOUR EXPERIENCE</h3>
              <p>Your feedback fuels our performance engineering. Let us know how we've helped you.</p>

              <form onSubmit={handleSubmit} className="review-actual-form">
                <div className="input-group">
                  <label>Your Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Liam Parker" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="input-group">
                  <label>Role / Specialty (Optional)</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Bodybuilder, Yoga Student" 
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  />
                </div>

                <div className="input-group">
                  <label>Star Rating</label>
                  <div className="interactive-stars-row">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={24}
                        className="star-element"
                        fill={star <= (hoverRating || rating) ? '#ff2a2a' : 'none'}
                        stroke={star <= (hoverRating || rating) ? '#ff2a2a' : '#555'}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        onClick={() => setRating(star)}
                      />
                    ))}
                  </div>
                </div>

                <div className="input-group">
                  <label>Your Review</label>
                  <textarea 
                    rows="4" 
                    placeholder="Describe your training results..." 
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-neon btn-full">
                  Submit Review
                </button>
              </form>

              {submitted && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="review-success-badge"
                >
                  Review submitted. Thank you for your support! 🔥
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
