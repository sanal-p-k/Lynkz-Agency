import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { FiArrowRight, FiCheck, FiCode, FiLayers, FiSearch, FiDollarSign, FiShare2, FiPieChart } from 'react-icons/fi';
import styles from './Services.module.css';

// Service data
const services = [
  {
    id: 'branding',
    title: 'Branding',
    icon: <FiLayers />,
    shortDescription: 'Creating a unique identity for your business.',
    description: 'We craft memorable brand identities that resonate with your target audience and communicate your core values effectively.'
  },
  {
    id: 'web',
    title: 'Web Development',
    icon: <FiCode />,
    shortDescription: 'Building fast, responsive websites.',
    description: 'Custom web development solutions that deliver exceptional user experiences and drive business growth.'
  },
  {
    id: 'seo',
    title: 'SEO',
    icon: <FiSearch />,
    shortDescription: 'Improving your search visibility.',
    description: 'Data-driven SEO strategies to improve your search rankings and drive qualified traffic to your website.'
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    icon: <FiDollarSign />,
    shortDescription: 'Data-driven marketing strategies.',
    description: 'Comprehensive digital marketing campaigns that generate leads and increase conversions.'
  },
  {
    id: 'analytics',
    title: 'Analytics',
    icon: <FiPieChart />,
    shortDescription: 'Insights to drive decisions.',
    description: 'Actionable insights from your data to make informed business decisions and optimize performance.'
  },
  {
    id: 'social',
    title: 'Social Media',
    icon: <FiShare2 />,
    shortDescription: 'Building and engaging your community.',
    description: 'Strategic social media management to build brand awareness and engage with your audience effectively.'
  }
];

const Services = () => {
  const [activeTab, setActiveTab] = useState('branding');
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.9], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

  const activeService = services.find(service => service.id === activeTab);

  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={styles.header}
        >
          <span className={styles.headerSubtitle}>
            Our Expertise
          </span>
          <h2 className={styles.headerTitle}>
            Comprehensive Digital Solutions
          </h2>
          <div className={styles.headerDivider}></div>
        </motion.div>
        
        <div className={styles.grid}>
          {/* Service Navigation */}
          <div className={styles.navColumn}>
            <div className={styles.navContainer}>
              {services.map((service) => (
                <motion.button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className={`${styles.navButton} ${activeTab === service.id ? styles.navButtonActive : ''}`}
                >
                  <span className={`${styles.navIcon} ${activeTab === service.id ? styles.navIconActive : ''}`}>
                    {service.icon}
                  </span>
                  <div className={styles.navText}>
                    <div className={styles.navTitle}>{service.title}</div>
                    <div className={styles.navDescription}>{service.shortDescription}</div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
          
          {/* Service Content */}
          <div className={styles.contentColumn}>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className={styles.serviceCard}
            >
              {activeService && (
                <div className={styles.serviceContent}>
                  <div className={styles.serviceHeader}>
                    <h3 className={styles.serviceTitle}>
                      {activeService.title}
                    </h3>
                    <div className={styles.serviceIcon}>
                      {activeService.icon}
                    </div>
                  </div>
                  
                  <p className={styles.serviceDescription}>
                    {activeService.description}
                  </p>
                  
                  <div className={styles.featuresSection}>
                    <h4 className={styles.featuresTitle}>Key Features</h4>
                    <ul className={styles.featuresList}>
                      {[1, 2, 3].map((item) => (
                        <motion.li 
                          key={item} 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: item * 0.1 }}
                          className={styles.featureItem}
                        >
                          <div className={styles.featureIcon}>
                            <FiCheck className="w-4 h-4" />
                          </div>
                          <span className={styles.featureText}>
                            {activeService.title} Feature {item}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={styles.ctaButton}
                  >
                    <span>Learn more about {activeService.title}</span>
                    <FiArrowRight className={styles.ctaIcon} />
                  </motion.button>
                </div>
              )}
            </motion.div>
            
            {/* Additional Content */}
            <motion.div 
              style={{ y, opacity, scale }}
              className={styles.whyUsSection}
            >
              <div className={styles.whyUsBg}></div>
              <div className={styles.whyUsContent}>
                <h4 className={styles.whyUsTitle}>
                  Why Choose Us for Your {activeService?.title} Needs?
                </h4>
                <p className={styles.whyUsDescription}>
                  We combine cutting-edge technology with creative solutions to deliver exceptional results that drive real business growth. Our client-focused approach ensures that every project is tailored to your unique needs and goals.
                </p>
                <div className={styles.benefitsGrid}>
                  {[
                    { 
                      title: 'Expert Team', 
                      description: 'Certified professionals with years of industry experience',
                      icon: <FiCheck className="w-5 h-5" />
                    },
                    { 
                      title: 'Custom Solutions', 
                      description: 'Tailored strategies designed for your specific business needs',
                      icon: <FiLayers className="w-5 h-5" />
                    },
                    { 
                      title: 'Proven Results', 
                      description: 'Track record of successful projects and satisfied clients',
                      icon: <FiPieChart className="w-5 h-5" />
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ y: -5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className={styles.benefitCard}
                    >
                      <div className={styles.benefitIcon}>
                        {item.icon}
                      </div>
                      <h5 className={styles.benefitTitle}>{item.title}</h5>
                      <p className={styles.benefitDescription}>{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
