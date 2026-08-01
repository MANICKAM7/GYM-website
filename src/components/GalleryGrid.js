import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const galleryData = [
  { id: 1, category: 'strength', title: 'Powerlifting Area', image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800' },
  { id: 2, category: 'cardio', title: 'Treadmill Zone', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800' },
  { id: 3, category: 'classes', title: 'Boxing Ring Workout', image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800' },
  { id: 4, category: 'strength', title: 'Dumbbell Racks', image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800' },
  { id: 5, category: 'classes', title: 'Group Spin Class', image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800' },
  { id: 6, category: 'interior', title: 'Premium Lockers', image: 'https://images.unsplash.com/photo-1605296867304-46d5465a25f1?q=80&w=800' }
];

export default function GalleryGrid() {
  const [filter, setFilter] = useState('all');
  const [selectedImg, setSelectedImg] = useState(null);

  const filteredData = filter === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === filter);

  return (
    <div className="gallery-grid-wrapper">
      <div className="gallery-filters">
        {['all', 'strength', 'cardio', 'classes', 'interior'].map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="gallery-masonry">
        <AnimatePresence mode="popLayout">
          {filteredData.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={item.id}
              className="gallery-item-card"
              onClick={() => setSelectedImg(item)}
            >
              <img src={item.image} alt={item.title} className="gallery-img" loading="lazy" />
              <div className="gallery-hover-overlay">
                <ZoomIn size={32} className="zoom-icon" />
                <h4>{item.title}</h4>
                <span>{item.category}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={() => setSelectedImg(null)}
          >
            <button className="close-lightbox" onClick={() => setSelectedImg(null)}>
              <X size={30} />
            </button>
            <motion.div 
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImg.image} alt={selectedImg.title} className="lightbox-img" />
              <div className="lightbox-caption">
                <h3>{selectedImg.title}</h3>
                <span>Category: {selectedImg.category}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
