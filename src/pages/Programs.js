import React, { useState } from 'react';
import { Search } from 'lucide-react';
import ProgramCard from '../components/ProgramCard';

const programsData = [
  { title: "Strength Power", icon: "dumbbell", category: "strength", intensity: "High", duration: "60 mins", image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=500", description: "Incorporate progressive strength lifts to build density, raw power, and solid muscle base." },
  { title: "Cardio Shred", icon: "flame", category: "cardio", intensity: "Max", duration: "45 mins", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=500", description: "Elevate your heart rate through metabolic conditioning and HIIT to incinerate body fat." },
  { title: "Box & Combat", icon: "activity", category: "classes", intensity: "High", duration: "50 mins", image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=500", description: "Learn professional bag work, kickboxing drills, and core movements to sculpt full agility." },
  { title: "Core & Mobility Flow", icon: "heart", category: "mobility", intensity: "Low", duration: "50 mins", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=500", description: "Improve flexibility, joint health, and core stability through dynamic stretching and pilates." },
  { title: "Crossfit Circuit", icon: "flame", category: "strength", intensity: "Max", duration: "60 mins", image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=500", description: "High-intensity functional movements designed to build conditioning, strength, and stamina." },
  { title: "Pilates Reformer", icon: "heart", category: "mobility", intensity: "Low", duration: "45 mins", image: "https://images.unsplash.com/photo-1505230836430-736c936ee2e4?q=80&w=500", description: "Low-impact muscular strengthening focusing on deep alignment, posture, and balance." }
];

export default function Programs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPrograms = programsData.filter((program) => {
    const matchesSearch = program.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          program.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || program.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="page-container programs-page">
      <div className="ambient-glow"></div>
      <div className="ambient-glow-left"></div>

      <section className="programs-header-section section-padding">
        <div className="text-center">
          <span className="section-subtitle">FITNESS STYLES</span>
          <h1 className="section-title text-neon">TRAINING PROGRAMS</h1>
          <p className="programs-header-desc">
            Explore our curated athletic programs designed for all performance tiers. Filter by style or search directly.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="programs-filter-toolbar">
          <div className="search-bar-wrapper">
            <Search className="search-icon" size={18} />
            <input 
              type="text" 
              placeholder="Search programs..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="category-tabs">
            {['all', 'strength', 'cardio', 'classes', 'mobility'].map((cat) => (
              <button
                key={cat}
                className={`filter-tab-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        {filteredPrograms.length > 0 ? (
          <div className="cards-grid">
            {filteredPrograms.map((program, idx) => (
              <ProgramCard key={program.title} program={program} index={idx} />
            ))}
          </div>
        ) : (
          <div className="no-results flex-center">
            <h3>No workouts match your criteria. Try adjusting filters or search.</h3>
          </div>
        )}
      </section>
    </div>
  );
}
