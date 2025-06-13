import React from 'react';
import {  FiLinkedin,  FiMail, FiPhone, FiMapPin, FiClock, FiInstagram,  FiFacebook } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

// Social media links with updated icons and professional URLs
const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/lynkz.agency',
    icon: <FiInstagram className="social-icon" size={20} aria-hidden="true" />,
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/lynkz_agency',
    icon: <FaXTwitter className="social-icon" size={20} aria-hidden="true" />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/lynkz-agency',
    icon: <FiLinkedin className="social-icon" size={20} aria-hidden="true" />,
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/lynkz.agency',
    icon: <FiFacebook className="social-icon" size={20} aria-hidden="true" />,
  },

];

// Navigation links
const navLinks = [
  { to: '/', label: 'Lynkz Hub' },
  { to: '/about', label: 'Behind Lynkz' },
  { to: '/services', label: 'Solutions we Lynk' },
  { to: '/portfolio', label: 'Lynkz in Action' },
  { to: '/contact', label: 'Lynk Up' },
];

// Service links
const serviceLinks = [
  { to: '/services#branding', label: 'Branding' },
  { to: '/services#web', label: 'Web Development' },
  { to: '/services#seo', label: 'SEO' },
  { to: '/services#ads', label: 'Paid Ads' },
  { to: '/services#social', label: 'Social Media' },
];

// Contact info
const contactInfo = [
  { 
    icon: <FiMail aria-hidden="true" />, 
    text: 'hello@lynkz.agency',
    url: 'mailto:hello@lynkz.agency'
  },
  { 
    icon: <FiPhone aria-hidden="true" />, 
    text: '+1 (555) 123-4567',
    url: 'tel:+15551234567'
  },
  { 
    icon: <FiMapPin aria-hidden="true" />, 
    text: '123 Creative St, Tech City',
    url: 'https://maps.google.com?q=123+Creative+St+Tech+City+CA+94103+USA'
  },
  { 
    icon: <FiClock aria-hidden="true" />, 
    text: 'Mon - Fri: 9:00 - 18:00',
    text2: 'Sat - Sun: Closed'
  },
];

// Legal links
const legalLinks = [
  { to: '/privacy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms of Service' },
  { to: '/cookies', label: 'Cookie Policy' },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Brand Section */}
          <motion.div 
            className={`${styles.brand} ${styles.animateIn}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <Link to={'/'} className={styles.logo}>
              <img src="/logo.png" className={styles.logoimg} alt="" />
            </Link>
            <p className={styles.tagline}>
              Where Creative Meets Conversion
            </p>
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={social.name}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Section */}
          <div className={styles.links}>
            {/* Navigation Links */}
            <motion.div 
              className={`${styles.linksColumn} ${styles.animateIn}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className={styles.linksTitle}>Footer</h4>
              <ul className={styles.linksList}>
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className={styles.link}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services Links */}
            <motion.div 
              className={`${styles.linksColumn} ${styles.animateIn}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className={styles.linksTitle}>Services</h4>
              <ul className={styles.linksList}>
                {serviceLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.to} className={styles.link}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className={`${styles.linksColumn} ${styles.animateIn}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className={styles.linksTitle}>Contact</h4>
              <ul className={styles.linksList}>
                {contactInfo.map((item, index) => (
                  <li key={index} className={styles.contactItem}>
                    <div className={styles.contactIcon}>{item.icon}</div>
                    <div>
                      {item.url ? (
                        <a 
                          href={item.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={styles.contactLink}
                        >
                          {item.text}
                        </a>
                      ) : (
                        <span>{item.text}</span>
                      )}
                      {item.text2 && <div className={styles.contactText2}>{item.text2}</div>}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className={`${styles.bottomBar} ${styles.animateIn}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className={styles.copyright}>
            &copy; {currentYear} Lynkz. All rights reserved.
          </p>
          
          <div className={styles.legal}>
            {legalLinks.map((link, index) => (
              <React.Fragment key={link.to}>
                <Link to={link.to} className={styles.legalLink}>
                  {link.label}
                </Link>
                {index < legalLinks.length - 1 && (
                  <span className={styles.divider} aria-hidden="true">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
