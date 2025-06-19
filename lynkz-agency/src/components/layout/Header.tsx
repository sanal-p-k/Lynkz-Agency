import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
// Theme context is no longer needed as we're using dark theme only
import styles from './Header.module.css';

interface NavLink {
  to: string;
  label: string;
  children?: { to: string; label: string }[];
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  // Navigation links - imported from constants
  const navLinks: NavLink[] = [
    { to: '/', label: 'Lynkz Hub' },
    { to: '/about', label: 'Behind Lynkz' },
    { to: '/services', label: 'Solutions we Lynk' },
    {
      to: '#',
      label: 'Lynkz in Action',
      children: [
        { to: '/portfolio', label: 'Portfolio' },
        { to: '/case-studies', label: 'Case Studies' },
      ],
    },
    { to: '/contact', label: 'Lynk Up' },
  ];;

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

  const toggleDropdown = (label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
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
          <Link to="/" className={styles.logo} onClick={closeMenu} style={{ width: '40%' }}>
            <img src="/logo.png" className={styles.logoimg} alt="" />
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            <ul className={styles.navList}>
              {navLinks.map((link) => (
                <li key={link.to} className={styles.navItem}>
                  <Link
                    to={link.to}
                    className={`${styles.navLink} ${location.pathname === link.to ? styles.navLinkActive : ''}`}
                  >
                    {link.label}
                  </Link>

                  {/* Dropdown if there are children */}
                  {link.children && (
                    <ul className={`${isScrolled ? styles.dropdownScrolled : styles.dropdown}`}>
                      {link.children.map((child) => (
                        <li key={child.to} className={styles.dropitem}>
                          <Link to={child.to} className={styles.dropdownLink}>
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
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
                const hasDropdown = !!link.children;

                return (
                  <div key={link.to} className={styles.mobileNavItem}>
                    {hasDropdown ? (
                      <button
                        type="button"
                        onClick={() => toggleDropdown(link.label)}
                        className={`${styles.mobileNavLink} ${activeDropdown === link.label ? styles.mobileNavLinkActive : ''}`}
                        aria-expanded={activeDropdown === link.label}
                        aria-controls={`dropdown-${link.label}`}
                      >
                        {link.label}
                      </button>
                    ) : (
                      <Link
                        to={link.to}
                        className={`${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ''}`}
                        onClick={closeMenu}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {link.label}
                      </Link>
                    )}


                    {hasDropdown && activeDropdown === link.label && (
                      <div className={styles.mobileDropdown}>
                        {link.children!.map((child) => (
                          <Link
                            key={child.to}
                            to={child.to}
                            className={styles.mobileNavLink}
                            onClick={closeMenu}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
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
