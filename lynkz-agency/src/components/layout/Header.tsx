import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
// Theme context is no longer needed as we're using dark theme only
import styles from './Header.module.css';

interface NavLink {
  to: string;
  label: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  // Navigation links - imported from constants
  const navLinks = [
    { to: '/', label: 'Lynkz Hub' },
    { to: '/about', label: 'Behind Lynkz' },
    { to: '/services', label: 'Solutions we Lynk' },
    { to: '/portfolio', label: 'Lynkz in Action' },
    { to: '/contact', label: 'Lynk Up' },
  ] as const;

  // Toggle mobile menu
  const toggleMenu = (): void => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    document.body.style.overflow = newState ? 'hidden' : '';
    
    // Add/remove no-scroll class to body
    if (newState) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  };

  // Close mobile menu
  const closeMenu = (): void => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
    document.body.classList.remove('no-scroll');
  };

  // Handle scroll events with Framer Motion's useMotionValueEvent
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 20);
  });

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location]);

  // Handle keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <motion.header 
      ref={headerRef}
      className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}

    >
      <div className={styles.container}>
        <div className={styles.navbar} >
          <Link to="/" className={styles.logo} onClick={closeMenu} style={{width:'40%'}}>
            <img src="/logo.png" width={'20%'} alt="" />
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            <ul style={{ display: 'flex', gap: '1rem', margin: 0, padding: 0, listStyle: 'none' }}>
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`${styles.navLink} ${
                      location.pathname === link.to ? styles.navLinkActive : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            type="button"
            className={styles.mobileMenuButton} 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            className={styles.mobileMenu}
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
          >
            <h2 id="mobile-menu-title" className={styles.srOnly}>Main Menu</h2>
            <nav className={styles.mobileNav} aria-label="Mobile navigation">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ''}`}
                    onClick={closeMenu}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
