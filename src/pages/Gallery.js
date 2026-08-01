import React from 'react';
import GalleryGrid from '../components/GalleryGrid';
import TransformationSection from '../components/TransformationSection';
import { BookOpen, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogArticles = [
  {
    title: "The Science of Progressive Overload",
    category: "Strength Training",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=500",
    excerpt: "Learn how to systematically scale weight, volume, and sets to break through fatiguing lifting plateaus."
  },
  {
    title: "Optimizing Your Post-Workout Recovery Window",
    category: "Sports Nutrition",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=500",
    excerpt: "Discover the ideal ratio of fast-acting carbs and isolate whey protein to replenish glycogen levels."
  },
  {
    title: "HIIT vs LISS: What Shreds Fat Quicker?",
    category: "Conditioning",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=500",
    excerpt: "An in-depth debate comparing high-intensity circuits with low-intensity sustained steady-state cardio."
  }
];

export default function Gallery() {
  return (
    <div className="page-container gallery-page">
      <div className="ambient-glow"></div>
      <div className="ambient-glow-left"></div>

      {/* Hero Header */}
      <section className="gallery-header-section section-padding">
        <div className="text-center">
          <span className="section-subtitle">VISUAL STORIES</span>
          <h1 className="section-title text-neon">GALLERY & ATHLETE PORTFOLIOS</h1>
          <p className="gallery-desc">
            Explore our state-of-the-art facilities, verify real before/after client results, and read expert blog insights.
          </p>
        </div>
      </section>

      {/* Before/After Transformation Slider */}
      <section className="section-padding transformation-slider-block">
        <div className="section-title-wrapper">
          <span className="section-subtitle">Real Results</span>
          <h2 className="section-title">TRANSFORMATION COMPARISON</h2>
        </div>
        <TransformationSection />
      </section>

      {/* Gallery Grid Masonry */}
      <section className="section-padding gallery-grid-block">
        <div className="section-title-wrapper">
          <span className="section-subtitle">IronPulse Inside</span>
          <h2 className="section-title">FACILITY GALLERY</h2>
        </div>
        <GalleryGrid />
      </section>

      {/* Blog/Articles Section */}
      <section className="section-padding blog-section-block">
        <div className="section-title-wrapper">
          <span className="section-subtitle">Read & Learn</span>
          <h2 className="section-title">FITNESS BLOG</h2>
        </div>

        <div className="cards-grid blog-grid">
          {blogArticles.map((article, idx) => (
            <div key={idx} className="glass-card blog-card">
              <div className="blog-img-wrapper">
                <img src={article.image} alt={article.title} className="blog-img" loading="lazy" />
                <div className="blog-cat-badge">{article.category}</div>
              </div>
              
              <div className="blog-content">
                <div className="blog-meta-row">
                  <Clock size={14} className="text-gray" />
                  <span>{article.readTime}</span>
                </div>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <Link to="/contact" className="btn-read-more">
                  <span>Read Article</span>
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
