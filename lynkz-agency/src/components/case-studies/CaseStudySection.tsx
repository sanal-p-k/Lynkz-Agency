import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import styles from '../../pages/Home.module.css';

// Import case studies from CaseStudies.tsx
import { caseStudies as allCaseStudies } from '../../pages/CaseStudies';

// Only show the first 3 case studies on the home page
const caseStudies = allCaseStudies.slice(0, 3);

const CaseStudySection = () => {
  const navigate = useNavigate();
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleCardClick = (id: string) => {
    navigate(`/case-studies/${id}`);
  };

  return (
    <section className={styles.caseStudies} id="case-studies">
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionSubtitle}>Our Work</span>
          <h2 className={styles.sectionTitle}>Case Studies</h2>
          <p className={styles.sectionDescription}>
            Explore our successful projects and see how we've helped businesses transform their digital presence.
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
              onClick={() => handleCardClick(study.id)}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.imageContainer}>
                <motion.img 
                  src={study.imageUrl} 
                  alt={study.title} 
                  className={styles.caseStudyImage}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                <span className={styles.categoryTag}>{study.category}</span>
              </div>
              <div className={styles.caseStudyContent}>
                <h3 className={styles.cardTitle}>{study.title}</h3>
                <p className={styles.clientName}>{study.client}</p>
                <p className={styles.description}>{study.description}</p>
                <div className={styles.results}>
                  <h4 className={styles.resultsTitle}>Key Results</h4>
                  <ul className={styles.resultsList}>
                    {study.results.map((result, i) => (
                      <li key={i} className={styles.resultItem}>
                        <span className={styles.resultBullet}>•</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button 
                  className={styles.readMoreBtn}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(study.id);
                  }}
                  aria-label={`Read more about ${study.title}`}
                >
                  Read Full Case Study <FiArrowRight className={styles.arrowIcon} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className={styles.caseStudyCta}>
          <a href="/case-studies" className={styles.secondaryButton}>
            View All Case Studies <FiArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
