import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css'; // We will create this module for specific navbar styles

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'AI & Innovation', path: '/ai-innovation' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.navContent}>
          <Link to="/" className={styles.logo}>
            NAKRANI <span className={styles.logoHighlight}>TECHNO</span>
          </Link>

          {/* Desktop Nav */}
          <div className={styles.desktopNav}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={styles.navLink}
                  style={{ position: 'relative', padding: '0.5rem 1rem' }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(56, 189, 248, 0.1)',
                        borderRadius: '8px',
                        zIndex: -1
                      }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span style={{ position: 'relative', zIndex: 1, color: isActive ? '#0284c7' : 'inherit' }}>
                    {link.name}
                  </span>
                </Link>
              );
            })}
            <Link to="/contact" className="btn btn-primary" style={{ marginLeft: '1rem', whiteSpace: 'nowrap' }}>Talk to Experts</Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className={styles.mobileNav}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={styles.mobileNavLink}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className={styles.mobileNavLink} onClick={() => setIsOpen(false)} style={{ color: '#0ea5e9' }}>Talk to Experts</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
