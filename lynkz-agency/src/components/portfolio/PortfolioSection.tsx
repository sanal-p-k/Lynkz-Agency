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
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Web Design'
  },
  {
    id: 2,
    title: 'Mobile App UI',
    category: 'app',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'App Development'
  },
  {
    id: 3,
    title: 'Brand Identity',
    category: 'branding',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Branding'
  },
  {
    id: 4,
    title: 'Dashboard UI',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Web Design'
  },
  {
    id: 5,
    title: 'Fitness App',
    category: 'app',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'App Development'
  },
  {
    id: 6,
    title: 'Product Packaging',
    category: 'branding',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Branding'
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
                    <Link to={`/portfolio/project-${project.id}`} className={styles.portfolioLink}>
                      <FiArrowRight />
                    </Link>
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
