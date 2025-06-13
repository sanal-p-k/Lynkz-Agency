import { motion, useInView } from 'framer-motion';
import { FiUsers, FiAward, FiGlobe, FiZap, FiHeart, FiTrendingUp } from 'react-icons/fi';
import styles from './About.module.css';
import { useRef } from 'react';

const values = [
  {
    icon: <FiUsers />,
    title: 'Client-First Mindset',
    description: 'Your success is our success. We dive deep into your business to deliver solutions that drive real impact and ROI.'
  },
  {
    icon: <FiAward />,
    title: 'Bold Creativity',
    description: 'We don\'t just follow trends—we set them. Expect innovative solutions that make your brand stand out.'
  },
  {
    icon: <FiGlobe />,
    title: 'Agile & Adaptable',
    description: 'In a fast-moving digital world, we pivot quickly to keep your business ahead of the curve.'
  },
  {
    icon: <FiZap />,
    title: 'Transparent & Accountable',
    description: 'No hidden agendas or surprises. We maintain open communication and take ownership of our work.'
  },
  {
    icon: <FiHeart />,
    title: 'Passion-Driven',
    description: 'We love what we do, and it shows in every project we touch. Your vision becomes our mission.'
  },
  {
    icon: <FiTrendingUp />,
    title: 'Results-Oriented',
    description: 'We measure our success by your success. Every strategy we craft and every line of code we write is focused on delivering measurable growth.'
  }
];

const About = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const aboutRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.1 });
  const valuesRef = useRef(null);
  const isValuesInView = useInView(valuesRef, { once: true, amount: 0.1 });
  const teamRef = useRef(null);
  const isTeamInView = useInView(teamRef, { once: true, amount: 0.1 });



  return (
    <div className={styles.about}>
      {/* Hero Section */}
      <section className={styles.heroSection} ref={heroRef}>
        <div className="container">
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, x: -20 }}
            animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className={styles.heroTitle}>Our Story</h1>
          </motion.div>
        </div>
      </section>

      {/* About Intro */}
      <section className={styles.aboutIntro} ref={aboutRef}>
        <div className="container">
          <div className={styles.aboutContainer}>
            <motion.div 
              className={styles.aboutImage}
              initial={{ opacity: 0, x: -50 }}
              animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                alt="Our team working together" 
                loading="lazy"
              />
            </motion.div>
            <motion.div 
              className={styles.aboutContent}
              initial={{ opacity: 0, y: 20 }}
              animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2>Who We Are</h2>
                <p>
                  Lynkz is the brainchild of four friends who came together with a shared dream-to build a creative tech agency that blends storytelling, design, and engineering into solutions that matter. We're not just developers or marketers—we’re builders, hustlers, designers, and strategists who love solving real problems.
                </p>
                <p>
                  Our strength lies in our diversity—one part code, one part content, one part strategy, one part hustle. From web development to digital campaigns, branding to analytics, we create work that speaks with clarity and performs with purpose.
                </p>
                <p>
                  What makes Lynkz different isn’t just our skills—it’s the way we think. We’re small, fast, and deeply committed to every brand we work with. We treat every project like it’s our own startup, blending creativity with execution, and always staying hungry to learn, adapt, and deliver.
                </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection} ref={valuesRef}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionSubtitle}>Our Principles</span>
            <h2 className={styles.sectionTitle}>Core Values</h2>
            <div className={styles.sectionDivider}></div>
            <p style={{ marginTop: '1rem', color: 'var(--color-text-secondary)' }}>Guiding principles that shape our work and culture</p>
          </div>
          
          <motion.div 
            className={styles.valuesGrid}
            initial="hidden"
            animate={isValuesInView ? "visible" : "hidden"}
          >
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className={styles.valueCard}
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
                <div className={styles.valueIcon}>
                  {value.icon}
                </div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>




      {/* Timeline */}
      <section className={`section ${styles.timelineSection}`}>
        <div className="container">
          <motion.div 
            className={`section-header text-center ${styles.sectionHeader}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.sectionSubtitle}>Our Timeline</span>
            <h2 className={styles.sectionTitle}>Our Journey</h2>
            <p className={styles.sectionDescription}>Milestones in our growth and success story</p>
          </motion.div>
          
          <div className={styles.roadmapContainer}>
            <div className={styles.roadmapLine}></div>
            {[
              {
                year: '2022',
                title: 'Vision Ignited',
                description: 'Four friends started dreaming of building a company that combines creativity, technology, and impact.'
              },
              {
                year: '2023',
                title: 'Laying the Groundwork',
                description: 'Spent time learning, experimenting, and helping a few clients while preparing to launch something bigger.'
              },
              {
                year: '2025',
                title: 'Lynkz Officially Launched',
                description: 'Transformed our long-standing passion into reality by officially launching Lynkz—a creative tech agency.'
              },
              {
                year: '2025',
                title: 'First Clients & Real Impact',
                description: 'Completed projects for 5+ clients across education, HR, retail, and marketing sectors, building strong case studies.'
              },
              {
                year: '2025',
                title: 'Expanding the Vision',
                description: 'Started developing in-house products like TutorLink while scaling up our services and outreach.'
              }
              
            ].map((item, index, array) => (
              <motion.div 
                key={index}
                className={`${styles.roadmapItem} ${index % 2 === 0 ? styles.left : styles.right}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5, delay: index * 0.15 }
                }}
                viewport={{ once: true }}
              >
                <div className={styles.roadmapDot}></div>
                <div className={styles.roadmapYear}>{item.year}</div>
                <div className={styles.roadmapContent}>

                  <h3 className={styles.roadmapTitle}>{item.title}</h3>
                  <p className={styles.roadmapDescription}>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <motion.div 
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.ctaTitle}>Let's Build Something Great Together</h2>
            <p className={styles.ctaSubtitle}>Whether you have an idea, a project, or just want to connect — we'd love to hear from you.</p>
            <a href="#contact" className={styles.ctaButton} data-cursor-hover>
              Connect With Us
              <span className={styles.ctaButtonIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;
