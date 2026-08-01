import React from 'react';
import TrainerCard from '../components/TrainerCard';

const trainersData = [
  { name: "Marcus Vane", specialty: "Pro Powerlifting Coach", experience: "8 Yrs", bio: "Former national lifter specializing in deadlifts, raw strength building, and posture correction.", image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=400" },
  { name: "Sarah Connor", specialty: "HIIT & Transformation", experience: "6 Yrs", bio: "Passionate about athletic performance, weight-loss routines, and high-intensity metabolic conditioning.", image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=400" },
  { name: "David Vance", specialty: "Strength & Conditioning", experience: "10 Yrs", bio: "Holds degrees in Sports Science. Expert in athletic speed development, agility, and performance tuning.", image: "https://images.unsplash.com/photo-1605296867304-46d5465a25f1?q=80&w=400" },
  { name: "Elena Rostova", specialty: "Yoga & Pilates Therapist", experience: "5 Yrs", bio: "Focuses on deep alignment, posture restoration, breathing patterns, and mental conditioning.", image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=400" }
];

export default function Trainers() {
  return (
    <div className="page-container trainers-page">
      <div className="ambient-glow"></div>
      <div className="ambient-glow-left"></div>

      <section className="trainers-header-section section-padding">
        <div className="text-center">
          <span className="section-subtitle">PROFESSIONAL TEAM</span>
          <h1 className="section-title text-neon">EXPERT COACHING STAFF</h1>
          <p className="trainers-header-desc">
            Our trainers hold internationally recognized certifications in sports biomechanics, strength planning, and nutrition science.
          </p>
        </div>

        <div className="cards-grid">
          {trainersData.map((trainer, idx) => (
            <TrainerCard key={trainer.name} trainer={trainer} index={idx} />
          ))}
        </div>
      </section>
    </div>
  );
}
