import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import styles from '../../pages/Home.module.css';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'web',
    image: '/port3.png',
    description: 'Web Design'
  },
  {
    id: 2,
    title: 'Mobile App UI',
    category: 'app',
    image: '/port2.png',
    description: 'App Development'
  },
  {
    id: 3,
    title: 'Landing page',
    category: 'web',
    image: '/port1.png',
    description: 'Web Design'
  },
  {
    id: 4,
    title: 'Jwellery poster',
    category: 'branding',
    image: '/port8.jpg',
    description: 'branding'
  },
  {
    id: 5,
    title: 'Travel App',
    category: 'app',
    image: '/port13.png',
    description: 'App Development'
  },
  {
    id: 6,
    title: 'Product Packaging',
    category: 'branding',
    image: '/port10.png',
    description: 'branding'
  },
];

const PortfolioSection = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const handleFilter = (category: string) => {
    setFilter(category);
  };

  return (
    <section className={styles.latestWorks} id="portfolio">
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionSubtitle}>Our Portfolio</span>
          <h2 className={styles.sectionTitle}>Latest Works</h2>
          <div className={styles.sectionDivider}></div>
          <p className={styles.sectionDescription}>
            Explore our recent projects and see how we've helped businesses grow with our digital solutions.
          </p>
        </div>
        
        {/* Portfolio Filter */}
        <div className={styles.portfolioFilter}>
          <button 
            className={`${styles.filterBtn} ${filter === 'all' ? styles.active : ''}`} 
            onClick={() => handleFilter('all')}
          >
            All
          </button>
          <button 
            className={`${styles.filterBtn} ${filter === 'web' ? styles.active : ''}`} 
            onClick={() => handleFilter('web')}
          >
            Web Design
          </button>
          <button 
            className={`${styles.filterBtn} ${filter === 'app' ? styles.active : ''}`} 
            onClick={() => handleFilter('app')}
          >
            App Development
          </button>
          <button 
            className={`${styles.filterBtn} ${filter === 'branding' ? styles.active : ''}`} 
            onClick={() => handleFilter('branding')}
          >
            Branding
          </button>
        </div>
        
        {/* Portfolio Grid */}
        <div className={styles.portfolioGrid}>
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              className={`${styles.portfolioItem} ${styles[project.category]}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={styles.portfolioImg}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                />
                <div className={styles.portfolioOverlay}>
                  <div className={styles.portfolioContent}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    {/* <Link to={`/portfolio/project-${project.id}`} className={styles.portfolioLink}>
                      <FiArrowRight />
                    </Link> */}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className={styles.portfolioCta}>
          <Link to="/portfolio" className={styles.primaryButton}>
            View All Projects <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
