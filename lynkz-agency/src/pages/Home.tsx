import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCode, FiLayers, FiSearch } from 'react-icons/fi';
import PortfolioSection from '../components/portfolio/PortfolioSection';
import styles from './Home.module.css';

// Mock data
const services = [
  {
    id: 1,
    title: 'Social Media Marketing',
    description: 'Connect, engage, and grow your brand on social platforms with tailored strategies.',
    icon: <FiLayers size={32} />,
  },
  {
    id: 2,
    title: 'Web Development',
    description: 'Crafting seamless digital experiences with high-performance websites.',
    icon: <FiCode size={32} />,
  },
  {
    id: 3,
    title: 'Digital Advertising (Meta & Google Ads)',
    description: 'Maximize reach and ROI with precisely targeted digital campaigns.',
    icon: <FiSearch size={32} />,
  },
  {
    id: 4,
    title: 'Branding & Identity',
    description: 'Build a powerful, memorable brand that stands the test of time.',
    icon: <FiLayers size={32} />,
  },
  {
    id: 5,
    title: 'Data Analytics',
    description: 'Turn your business data into actionable insights and decisions.',
    icon: <FiCode size={32} />,
  },
];

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO, TechCorp',
    content: 'Lynkz transformed our online presence completely. Their creative approach and technical expertise are unmatched.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Marketing Director, BrandCo',
    content: 'Working with Lynkz was a game-changer for our brand. They delivered beyond our expectations.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
];

const Home = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const servicesRef = useRef(null);
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.1 });
  const testimonialsRef = useRef(null);
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.1 });

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero} id="home" ref={heroRef}>
        <div className={styles.heroContent}>
          <motion.h1 
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Transform Your Digital Presence with <span className={styles.highlight}>Creative Solutions</span>
          </motion.h1>
          <motion.p 
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            We help businesses grow with innovative web solutions, stunning designs, and data-driven strategies that deliver real results.
          </motion.p>
          <motion.div 
            className={styles.heroButtons}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact" className={styles.primaryButton}>
                Get Started <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/services" className={styles.secondaryButton}>
                Our Services
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="/Lynkz_Brochure.pdf" target="_blank" rel="noopener noreferrer" className={styles.secondaryButton}>
                Download Brochure
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Animated background elements */}
        <motion.div 
          className={styles.floatingOrb1}
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className={styles.floatingOrb2}
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </section>

        

      {/* Services Section */}
      <section className={styles.services} ref={servicesRef}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionSubtitle}>You Are Not Marketing If You Are Not Online</span>
            <h2 className={styles.sectionTitle}>Your Growth, Our Expertise</h2>
            <div className={styles.sectionDivider}></div>
          </div>

          <motion.div 
            className={`${styles.servicesGrid} ${isServicesInView ? styles.staggerChildren : ''}`}
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
          >
            {services.map((service, index) => (
              <motion.div 
                key={service.id} 
                className={styles.serviceCard}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.6, 
                      ease: 'easeOut',
                      delay: index * 0.1
                    }
                  }
                }}
              >
                <div className={styles.serviceIcon}>
                  {service.icon}
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
                <Link to="/services" className={styles.secondaryButton} style={{ display: 'inline-flex' }}>
                  Learn more <FiArrowRight className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Marquee Service Slider */}
      <section className={styles.marqueeSlider}>
          <div className={styles.marqueeWrapper}>
            <div className={`${styles.marqueeTrack} ${styles.leftToRight} ${styles.strokeText}`}>
              {[...Array(3)].map((_, i) => (
                <React.Fragment key={`stroke-${i}`}>
                  <span>Social Media Marketing</span>
                  <span className={styles.divider}>•</span>
                  <span>Web Development</span>
                  <span className={styles.divider}>•</span>
                  <span>Branding</span>
                  <span className={styles.divider}>•</span>
                  <span>Data Analytics</span>
                  <span className={styles.divider}>•</span>
                  <span>Google Ads</span>
                  <span className={styles.divider}>•</span>
                  <span>Meta Ads</span>
                  <span className={styles.divider}>•</span>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className={styles.marqueeWrapper}>
            <div className={`${styles.marqueeTrack} ${styles.rightToLeft} ${styles.solidText}`}>
              {[...Array(3)].map((_, i) => (
                <React.Fragment key={`solid-${i}`}>
                  <span>Search Engine Optimization</span>
                  <span className={styles.divider}>•</span>
                  <span>Content Creation</span>
                  <span className={styles.divider}>•</span>
                  <span>Email Marketing</span>
                  <span className={styles.divider}>•</span>
                  <span>UI/UX Design</span>
                  <span className={styles.divider}>•</span>
                  <span>E-commerce Solutions</span>
                  <span className={styles.divider}>•</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>


      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Client Logo Swiper */}
      <section className={styles.clientsSwiper}>
        <div className="container">
          <h3 className={styles.sectionSubtitle}>Trusted by Industry Leaders</h3>
          <div className={styles.logoTrack}>
            {[
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg',
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazon/amazon-original.svg',
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg',
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spotify/spotify-original.svg',
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg',
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/airbnb/airbnb-original.svg',
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netflix/netflix-original.svg',
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/uber/uber-plain.svg',
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg',
              // Duplicate the logos to create a seamless loop
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg',
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazon/amazon-original.svg',
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg',
              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spotify/spotify-original.svg',
            ].map((logo, index) => (
              <div key={index} className={styles.logoSlide}>
                <img 
                  src={logo} 
                  alt={`Client Logo ${index + 1}`} 
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials} ref={testimonialsRef}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionSubtitle}>Testimonials</span>
            <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
            <div className={styles.sectionDivider}></div>
          </div>

          <motion.div 
            className={`${styles.testimonialsGrid} ${isTestimonialsInView ? styles.staggerChildren : ''}`}
            initial="hidden"
            animate={isTestimonialsInView ? "visible" : "hidden"}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id} 
                className={styles.testimonialCard}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.6, 
                      ease: 'easeOut',
                      delay: index * 0.1
                    }
                  }
                }}
              >
                <p className={styles.testimonialContent}>"{testimonial.content}"</p>
                <div className={styles.testimonialAuthor}>
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className={styles.authorAvatar}
                    loading="lazy"
                  />
                  <div className={styles.authorInfo}>
                    <span className={styles.authorName}>{testimonial.name}</span>
                    <span className={styles.authorRole}>{testimonial.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Study / Blog Section */}
      <section className={styles.blogNews}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionSubtitle}>Learn With Us</span>
            <h2 className={styles.sectionTitle}>Case Study & Tips</h2>
          </div>
          <div className={styles.blogCards}>
            <div className={styles.blogCard}>
              <h4>How to Conduct a Digital Marketing Audit</h4>
              <p>Step-by-step guide on auditing your online presence to unlock growth potential.</p>
              <Link to="/blog/digital-marketing-audit" className={styles.secondaryButton}>Read More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to Transform Your Business?</h2>
          <p className={styles.ctaDescription}>
            Let's work together to create something amazing. Get in touch with us today to discuss your project.
          </p>
          <Link to="/contact" className={styles.primaryButton} style={{ display: 'inline-flex' }}>
            Get in Touch <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
