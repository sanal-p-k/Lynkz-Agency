import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FiFilter, FiX, FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi';
import styles from './Portfolio.module.css';

// Portfolio data
const projects = [
  {
    id: 1,
    title: 'Nova Financial',
    category: 'web',
    tags: ['Web Development', 'UI/UX Design'],
    image: 'project1.jpg',
    description: 'A modern banking platform with a focus on user experience and security.',
    challenge: 'Create a digital banking experience that simplifies complex financial management for users of all tech levels while maintaining enterprise-grade security.',
    solution: 'We developed a clean, intuitive interface with robust security features, including biometric authentication and real-time transaction monitoring.',
    results: [
      { label: 'Increase in User Engagement', value: '75%', description: 'Higher engagement with financial tools' },
      { label: 'Faster Transactions', value: '3.2x', description: 'Reduced transaction processing time' },
      { label: 'Customer Satisfaction', value: '4.9/5', description: 'Based on user reviews' }
    ],
    link: '#',
    github: '#',
    featured: true
  },
  {
    id: 2,
    title: 'Pulse Fitness',
    category: 'branding',
    tags: ['Branding', 'Print Design'],
    image: 'project2.jpg',
    description: 'Complete brand identity for a modern fitness center chain.',
    challenge: 'Develop a brand identity that stands out in the competitive fitness industry while appealing to a broad demographic.',
    solution: 'We created a dynamic visual language with bold typography and energetic colors that reflect movement and transformation.',
    results: [
      { label: 'Brand Recognition', value: '3x', description: 'Increase in brand recall' },
      { label: 'Membership Growth', value: '120%', description: 'In first 6 months' },
      { label: 'Social Media', value: '45k+', description: 'New followers' }
    ],
    link: '#'
  },
  {
    id: 3,
    title: 'EcoHarvest',
    category: 'web',
    tags: ['E-commerce', 'Web Development'],
    image: 'project3.jpg',
    description: 'Sustainable e-commerce platform for organic produce.',
    challenge: 'Build an online marketplace connecting local farmers with consumers while ensuring a seamless shopping experience.',
    solution: 'We developed a responsive platform with inventory management, real-time ordering, and sustainable packaging options.',
    results: [
      { label: 'Sales Increase', value: '210%', description: 'In first year' },
      { label: 'Vendor Growth', value: '85+', description: 'Local farmers onboarded' },
      { label: 'Customer Base', value: '12k+', description: 'Active users' }
    ],
    link: '#',
    github: '#',
    featured: true
  },
  {
    id: 4,
    title: 'Wanderlust Travel',
    category: 'branding',
    tags: ['Branding', 'Marketing'],
    image: 'project4.jpg',
    description: 'Rebranding for a luxury travel agency.',
    challenge: 'Reposition a traditional travel agency as a premium, experiential travel curator for discerning clients.',
    solution: 'We crafted a sophisticated visual identity and content strategy that emphasizes unique, personalized travel experiences.',
    results: [
      { label: 'Client Acquisition', value: '65%', description: 'Increase in premium clients' },
      { label: 'Average Booking', value: '$12k', description: 'Per booking' },
      { label: 'ROI', value: '5.8x', description: 'On marketing investment' }
    ],
    link: '#',
    featured: true
  },
  {
    id: 5,
    title: 'TechPulse',
    category: 'web',
    tags: ['Web App', 'Dashboard'],
    image: 'project5.jpg',
    description: 'Analytics dashboard for tech startups.',
    challenge: 'Create a data visualization platform that makes complex metrics accessible and actionable for non-technical users.',
    solution: 'We designed an intuitive dashboard with customizable widgets and clear data visualizations.',
    results: [
      { label: 'Time Saved', value: '15h', description: 'Per week per user' },
      { label: 'Adoption Rate', value: '92%', description: 'Among target users' },
      { label: 'Data Accuracy', value: '99.9%', description: 'Reliable metrics' }
    ],
    link: '#',
    github: '#'
  },
  {
    id: 6,
    title: 'Bloom & Grow',
    category: 'branding',
    tags: ['Packaging', 'Brand Identity'],
    image: 'project6.jpg',
    description: 'Sustainable packaging for a plant subscription service.',
    challenge: 'Design eco-friendly packaging that protects plants during shipping while reflecting the brand\'s commitment to sustainability.',
    solution: 'We developed biodegradable, plantable packaging that customers can grow into wildflowers.',
    results: [
      { label: 'Waste Reduction', value: '100%', description: 'Biodegradable materials' },
      { label: 'Customer Delight', value: '4.8/5', description: 'Packaging rating' },
      { label: 'Social Shares', value: '25k+', description: 'On social media' }
    ],
    link: '#',
    featured: true
  }
];

const categories = [
  { id: 'all', name: 'All Work' },
  { id: 'web', name: 'Web Development' },
  { id: 'branding', name: 'Branding' },
  { id: 'design', name: 'UI/UX Design' },
  { id: 'marketing', name: 'Marketing' }
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  // Refs for scroll animations
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const isProjectsInView = useInView(projectsRef, { once: true, amount: 0.1 });

  // Filter projects based on active filter
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);

  const openProjectModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  // Close modal when clicking outside content
  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeProjectModal();
    }
  };

  return (
    <div className={styles.portfolioPage}>
      {/* Hero Section */}
      <section className={styles.hero} ref={heroRef}>
        <div className="container">
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className={styles.heroTitle}>Our Portfolio</h1>
            <p className={styles.heroSubtitle}>A showcase of our best work and successful projects</p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Filters */}
      <section className="section">
        <div className="container">
          <div className={styles.filtersContainer}>
            {categories.map(category => (
              <button
                key={category.id}
                className={`${styles.filterButton} ${activeFilter === category.id ? styles.active : ''}`}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className={styles.projectsGrid} ref={projectsRef}>
            {filteredProjects.map((project, index) => (
              <motion.article 
                key={project.id} 
                className={styles.projectCard}
                onClick={() => openProjectModal(project)}
                initial={{ opacity: 0, y: 20 }}
                animate={isProjectsInView ? { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: 'easeOut'
                  }
                } : {}}
              >
                <img 
                  src={`/images/portfolio/${project.image}`} 
                  alt={project.title} 
                  className={styles.projectImage}
                  onError={(e) => {
                    // Fallback image in case the project image doesn't load
                    (e.target as HTMLImageElement).src = `https://placehold.co/600x400/1a1a1a/ffffff?text=${encodeURIComponent(project.title)}`;
                  }}
                />
                <div className={styles.projectContent}>
                  <span className={styles.projectCategory}>
                    {project.category === 'web' ? 'Web Development' : 'Branding'}
                  </span>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>
                    {project.description.length > 100 
                      ? `${project.description.substring(0, 100)}...` 
                      : project.description}
                  </p>
                  <span className={styles.projectLink}>
                    View Project <FiArrowRight />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Project Modal */}
          <AnimatePresence>
            {selectedProject && (
              <motion.div 
                className={styles.modalOverlay}
                onClick={handleModalClick}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div 
                  className={styles.modalContent}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button 
                    className={styles.closeButton} 
                    onClick={closeProjectModal}
                    aria-label="Close modal"
                  >
                    <FiX size={20} />
                  </button>
                  
                  <div className={styles.modalBody}>
                    <div>
                      <img 
                        src={`/images/portfolio/${selectedProject.image}`} 
                        alt={selectedProject.title}
                        className={styles.modalImage}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://placehold.co/800x600/1a1a1a/ffffff?text=${encodeURIComponent(selectedProject.title)}`;
                        }}
                      />
                    </div>
                    <div className={styles.modalDetails}>
                      <h2 className={styles.modalTitle}>{selectedProject.title}</h2>
                      <p className={styles.modalDescription}>
                        {selectedProject.description}
                      </p>
                      
                      <h3 className={styles.sectionTitle}>The Challenge</h3>
                      <p className={styles.modalDescription}>
                        {selectedProject.challenge}
                      </p>
                      
                      <h3 className={styles.sectionTitle}>Our Solution</h3>
                      <p className={styles.modalDescription}>
                        {selectedProject.solution}
                      </p>
                      
                      <h3 className={styles.sectionTitle}>Key Results</h3>
                      <div className={styles.resultsGrid}>
                        {selectedProject.results.map((result, index) => (
                          <div key={index} className={styles.resultItem}>
                            <div className={styles.resultValue}>{result.value}</div>
                            <div className={styles.resultLabel}>{result.label}</div>
                            <div className={styles.resultDescription}>
                              {result.description}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className={styles.modalLinks}>
                        {selectedProject.link && (
                          <a 
                            href={selectedProject.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`${styles.modalLink} ${styles.primaryLink}`}
                          >
                            <FiExternalLink /> View Live
                          </a>
                        )}
                        {selectedProject.github && (
                          <a 
                            href={selectedProject.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`${styles.modalLink} ${styles.secondaryLink}`}
                          >
                            <FiGithub /> View Code
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* CTA Section */}
          <section className="section cta bg-accent">
            <div className="container">
              <motion.div 
                className="cta-content text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="cta-title">Have a project in mind?</h2>
                <p className="cta-subtitle">Let's discuss how we can bring your ideas to life</p>
                <a href="/contact" className="btn btn--dark" data-cursor-hover>
                  Start a Project
                </a>
              </motion.div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
