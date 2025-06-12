import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import styles from '../../pages/Home.module.css';

const caseStudies = [
  {
    id: 1,
    title: 'E-commerce Platform Redesign',
    category: 'Web Design',
    description: 'How we increased conversion rates by 45% for a leading online retailer through a complete platform redesign.',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/case-studies/ecommerce-redesign',
    tags: ['UI/UX', 'E-commerce', 'Conversion']
  },
  {
    id: 2,
    title: 'Mobile App Development',
    category: 'App Development',
    description: 'Building a seamless mobile experience that increased user engagement by 300% for a fintech startup.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/case-studies/mobile-app',
    tags: ['Mobile', 'Fintech', 'React Native']
  },
  {
    id: 3,
    title: 'Brand Identity & Strategy',
    category: 'Branding',
    description: 'Transforming a traditional business into a modern brand with a 200% increase in brand recognition.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/case-studies/brand-identity',
    tags: ['Branding', 'Strategy', 'Identity']
  }
];

const CaseStudySection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className={styles.caseStudies} id="case-studies">
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionSubtitle}>Our Work</span>
          <h2 className={styles.sectionTitle}>Case Studies</h2>
          <p className={styles.sectionDescription}>
            Explore our successful projects and see how we've helped businesses achieve their goals.
          </p>
        </div>

        <div className={styles.caseStudiesGrid}>
          {caseStudies.map((study, index) => (
            <motion.div 
              key={study.id}
              className={`${styles.caseStudyCard} ${activeCard === study.id ? styles.active : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setActiveCard(study.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className={styles.caseStudyImage}>
                <img src={study.image} alt={study.title} loading="lazy" />
                <div className={styles.caseStudyOverlay}>
                  <Link to={study.link} className={styles.caseStudyLink}>
                    View Case Study <FiExternalLink />
                  </Link>
                </div>
              </div>
              <div className={styles.caseStudyContent}>
                <h3 className={styles.caseStudyTitle}>
                  <Link to={study.link}>{study.title}</Link>
                </h3>
                <p className={styles.caseStudyDescription}>{study.description}</p>
                <div className={styles.caseStudyTags}>
                  {study.tags.map((tag, i) => (
                    <span key={i} className={styles.caseStudyTag}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className={styles.caseStudyCta}>
          <Link to="/case-studies" className={styles.secondaryButton}>
            View All Case Studies <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
