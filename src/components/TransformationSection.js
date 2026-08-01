import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftRight } from 'lucide-react';

const transformations = [
  {
    name: "Alex Rivera",
    achievement: "Lost 22kg & Built Lean Muscle",
    duration: "6 Months Plan",
    beforeImg: "https://images.unsplash.com/photo-1505230836430-736c936ee2e4?q=80&w=600",
    afterImg: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600"
  },
  {
    name: "Elena Rostova",
    achievement: "Gained Strength & Core Tone",
    duration: "4 Months Plan",
    beforeImg: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=600",
    afterImg: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600"
  }
];

export default function TransformationSection() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeIdx, setActiveIdx] = useState(0);
  const isDragging = useRef(false);
  const containerRef = useRef(null);

  const activeClient = transformations[activeIdx];

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e) => {
    if (e.buttons === 1 || isDragging.current) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="transformation-slider-section">
      <div className="transformation-switcher">
        {transformations.map((item, idx) => (
          <button 
            key={idx}
            className={`switch-btn ${activeIdx === idx ? 'active' : ''}`}
            onClick={() => { setActiveIdx(idx); setSliderPosition(50); }}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className="transformation-slider-wrapper">
        <div className="client-text-info">
          <h3>{activeClient.achievement}</h3>
          <span>Program Duration: {activeClient.duration}</span>
        </div>

        <div 
          ref={containerRef}
          className="slider-container"
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onMouseDown={() => { isDragging.current = true; }}
          onMouseUp={() => { isDragging.current = false; }}
          onTouchStart={() => { isDragging.current = true; }}
          onTouchEnd={() => { isDragging.current = false; }}
        >
          {/* After image - Background */}
          <img 
            src={activeClient.afterImg} 
            alt="After Transformation" 
            className="slider-image after-img" 
            draggable="false"
          />
          <div className="label-badge label-after">AFTER</div>

          {/* Before image - Overlayed with dynamic width */}
          <div 
            className="before-image-wrapper"
            style={{ width: `${sliderPosition}%` }}
          >
            <img 
              src={activeClient.beforeImg} 
              alt="Before Transformation" 
              className="slider-image before-img" 
              draggable="false"
              style={{ width: containerRef.current ? containerRef.current.offsetWidth : '100%' }}
            />
            <div className="label-badge label-before">BEFORE</div>
          </div>

          {/* Drag Handle Bar */}
          <div 
            className="slider-handle" 
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="handle-button">
              <ArrowLeftRight size={20} className="handle-icon" />
            </div>
          </div>
        </div>

        <p className="slider-instruction-text">
          Drag the center handle left and right to inspect the transformation details.
        </p>
      </div>
    </div>
  );
}
