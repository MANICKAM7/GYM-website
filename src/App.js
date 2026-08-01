import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChevronUp, Dumbbell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Scroll Helpers & Layout Components
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Trainers from './pages/Trainers';
import Membership from './pages/Membership';
import BMICalculatorPage from './pages/BMICalculatorPage';
import DietNutrition from './pages/DietNutrition';
import Schedule from './pages/Schedule';
import TestimonialsPage from './pages/TestimonialsPage';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import LoginRegister from './pages/LoginRegister';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    // Mimic premium brand cinematic intro load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    const handleScrollButton = () => {
      if (window.scrollY > 400) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };

    window.addEventListener('scroll', handleScrollButton);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScrollButton);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <ScrollToTop />
      
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div 
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="preloader-overlay flex-center"
          >
            <div className="preloader-content text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="preloader-spinner-wrapper"
              >
                <Dumbbell className="preloader-icon" size={60} />
              </motion.div>
              <motion.h1 
                initial={{ letterSpacing: "8px", opacity: 0 }}
                animate={{ letterSpacing: "3px", opacity: 1 }}
                transition={{ duration: 1 }}
                className="preloader-logo-text"
              >
                IRON<span className="text-red">PULSE</span>
              </motion.h1>
              <div className="loading-bar-track">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="loading-bar-fill"
                ></motion.div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="app-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="app-main-layout"
          >
            <Navbar />
            
            <main className="main-content-area">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/trainers" element={<Trainers />} />
                <Route path="/membership" element={<Membership />} />
                <Route path="/bmi" element={<BMICalculatorPage />} />
                <Route path="/nutrition" element={<DietNutrition />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/testimonials" element={<TestimonialsPage />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<LoginRegister />} />
              </Routes>
            </main>

            <Footer />

            {/* Float Scroll-to-Top Button */}
            <AnimatePresence>
              {showScrollBtn && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 20 }}
                  onClick={scrollToTop}
                  className="scroll-to-top-btn flex-center"
                  aria-label="Scroll to top"
                >
                  <ChevronUp size={24} />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </Router>
  );
}
