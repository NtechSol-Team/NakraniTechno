import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { initializeGA, trackPageView } from './utils/analytics';

// Initialize GA4 with Measurement ID (Replace with your actual Measurement ID)
initializeGA('G-9V211YE697');

import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import AIInnovation from './pages/AIInnovation';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Admin from './pages/Admin'; // New Admin Dashboard
import ChatWidget from './components/ChatWidget';

import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';

// Tracking Component
const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Track Page View with GA4
    trackPageView(location.pathname + location.search, document.title);
  }, [location]);

  useEffect(() => {
    // Record visit to local database (once on mount)
    fetch('/api/visit', { method: 'POST' })
      .catch(err => console.error('Error tracking visit:', err));
  }, []);

  return null;
};

function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <Analytics />
        <AnimatePresence>
          {loading && <Preloader />}
        </AnimatePresence>

        {/* Scroll Progress Bar */}
        <motion.div
          style={{
            scaleX,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: '#38bdf8',
            transformOrigin: '0%',
            zIndex: 10001,
            pointerEvents: 'none'
          }}
        />

        <ScrollToTop />
        <CustomCursor />
        <ChatWidget />
        {!loading && (
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/ai-innovation" element={<AIInnovation />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </Layout>
        )}
      </Router>
    </HelmetProvider>
  );
}

export default App;
