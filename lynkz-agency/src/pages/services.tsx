import { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { 
  FiCheck, 
  FiCode, 
  FiLayers, 
  FiSearch, 
  FiDollarSign, 
  FiShare2, 
  FiPieChart, 
  FiCamera, 
  FiSmartphone, 
  FiTrendingUp, 
  FiAward, 
  FiUsers, 
  FiBarChart2, 
  FiCheckCircle 
} from 'react-icons/fi';
import styles from './Services.module.css';
import { VscGraph } from 'react-icons/vsc';

// Lynkz Agency Service data
const services = [
  {
    id: 'branding',
    title: 'Branding',
    icon: <FiLayers />,
    shortDescription: 'Build a bold and memorable identity.',
    description: 'We shape your brand’s personality with striking visuals, tone, and strategy that stick in minds and stir emotions.',
    features: [
      'Logo Design & Visual Identity',
      'Brand Guidelines Creation',
      'Tone of Voice & Messaging Framework'
    ]
  },
  {
    id: 'web',
    title: 'Web Development',
    icon: <FiCode />,
    shortDescription: 'Sleek, fast, and conversion-focused.',
    description: 'We craft stunning websites that don’t just look great — they convert. Speed, responsiveness, and UX-first design at the core.',
    features: [
      'Responsive Web Design',
      'SEO-Optimized Code',
      'Performance-First Architecture'
    ]
  },
  {
    id: 'seo',
    title: 'Search Engine Optimization (SEO)',
    icon: <FiSearch />,
    shortDescription: 'Rank high. Stay found.',
    description: 'From technical audits to on-page strategy, we get you seen where it matters most — right on top of Google.',
    features: [
      'Technical SEO Audits',
      'Keyword Strategy & Implementation',
      'Performance Tracking & Reporting'
    ]
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    icon: <FiDollarSign />,
    shortDescription: 'Scroll-stopping ads that sell.',
    description: 'Meta Ads. Google Ads. Funnel strategy. Our campaigns are built to grab attention, nurture interest, and drive sales.',
    features: [
      'Ad Campaign Management',
      'Funnel Strategy Development',
      'Conversion Optimization'
    ]
  },
  {
    id: 'analytics',
    title: 'Data Analytics',
    icon: <VscGraph />,
    shortDescription: 'Numbers that speak business.',
    description: 'Turn raw data into insights. We empower you with dashboards and reports to make decisions smarter and faster.',
    features: [
      'Interactive Dashboards',
      'KPI Monitoring Systems',
      'Predictive Analytics Solutions'
    ]
  },
  {
    id: 'social',
    title: 'Social Media Management',
    icon: <FiShare2 />,
    shortDescription: 'Your brand’s voice, everywhere.',
    description: 'From reels to reach, we manage and grow your online presence with consistency, creativity, and community in mind.',
    features: [
      'Content Scheduling & Posting',
      'Community Engagement',
      'Analytics & Performance Reports'
    ]
  },
  {
    id: 'content',
    title: 'Content Creation',
    icon: <FiCamera />,
    shortDescription: 'Stories that stick.',
    description: 'Whether it’s videos, graphics, or copy — our team creates content that connects, engages, and converts.',
    features: [
      'Video Production',
      'Graphic Design',
      'Copywriting & Storytelling'
    ]
  },
  {
    id: 'mobile',
    title: 'App Development',
    icon: <FiSmartphone />,
    shortDescription: 'Tap into mobile audiences.',
    description: 'We build smooth, secure mobile apps that scale — both native and cross-platform solutions.',
    features: [
      'iOS & Android Apps',
      'Cross-Platform Solutions',
      'API & Backend Integration'
    ]
  },
  {
    id: 'growth',
    title: 'Growth Strategy',
    icon: <FiTrendingUp />,
    shortDescription: 'From startup to standout.',
    description: 'We design growth strategies using creative funnels, retention playbooks, and brand storytelling that fuels real results.',
    features: [
      'User Acquisition Funnels',
      'Retention & Loyalty Programs',
      'Growth-Focused Brand Positioning'
    ]
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
      {/* Hero Section */}
      <div 
        className={styles.heroSection}
        style={{ 
          backgroundImage: 'url(/images/our_services.jpg)' // Replace with your image path
        }}
      >
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <motion.h1 
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h1>
          <motion.p 
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover how we can transform your digital presence with our comprehensive solutions
          </motion.p>
        </div>
      </div>

      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={styles.header}
        >
          <span className={styles.headerSubtitle}>
            Creative. Strategic. Bold.
          </span>
          <h2 className={styles.headerTitle}>
            Welcome to Lynkz Agency — Where Brands Take Off
          </h2>
          <div className={styles.headerDivider}></div>
        </motion.div>

        <div className={styles.grid}>
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
                      {activeService.features.map((feature, index) => (
                        <motion.li 
                          key={index} 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className={styles.featureItem}
                        >
                          <div className={styles.featureIcon}>
                            <FiCheck className="w-4 h-4" />
                          </div>
                          <span className={styles.featureText}>
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </motion.div>

            <motion.div 
              style={{ y, opacity, scale }}
              className={styles.whyUsSection}
            >
              <div className={styles.whyUsBg}></div>
              <div className={styles.whyUsContent}>
                <h4 className={styles.whyUsTitle}>
                  Why Lynkz for {activeService?.title}?
                </h4>
                <p className={styles.whyUsDescription}>
                  At Lynkz, we don’t just tick deliverables. We craft digital journeys tailored to your brand’s vision. We’re fueled by creativity, driven by data, and obsessed with growth.
                </p>
                <div className={styles.benefitsGrid}>
                  {[
                    { 
                      title: 'Expert Team', 
                      description: 'Seasoned designers, coders, and marketers united by passion.',
                      icon: <FiCheck className="w-5 h-5" />
                    },
                    { 
                      title: 'Tailored Strategy', 
                      description: 'Every business is unique — we craft your roadmap accordingly.',
                      icon: <FiLayers className="w-5 h-5" />
                    },
                    { 
                      title: 'Track Record of Wins', 
                      description: 'Our work speaks through results — traffic, leads, and brand loyalty.',
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

  <section className={styles.whyUsSection}>
    <div className={styles.container}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Why Choose Lynkz Agency?</h2>
        <p>Because behind every pixel and post, there's a purpose. We're not just an agency — we're your growth partner.</p>
      </div>

      <div className={styles.whyUsGrid}>
        <motion.div 
          className={styles.whyUsCard}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <FiAward className={styles.icon} size={40} color="var(--color-accent)" />
          <h3>We’ve Walked This Road</h3>
          <p>We're founders, dreamers, and builders — just like you. We've grown brands from scratch and know what it takes to go from idea to impact.</p>
        </motion.div>

        <motion.div 
          className={styles.whyUsCard}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FiUsers className={styles.icon} size={40} color="var(--color-accent)" />
          <h3>People First, Always</h3>
          <p>We’re not here to sell you services. We’re here to understand your story and become a part of your journey — every step, every milestone.</p>
        </motion.div>

        <motion.div 
          className={styles.whyUsCard}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <FiBarChart2 className={styles.icon} size={40} color="var(--color-accent)" />
          <h3>Emotion Meets Execution</h3>
          <p>We combine data with human emotion. So your brand doesn’t just look good — it *feels* right and performs where it matters.</p>
        </motion.div>
      </div>
    </div>
  </section>

      {/* Customer Journey Section */}
       {/* Customer Journey Section */}
       <section className={styles.journeySection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Your Success Journey</h2>
            <p>From first contact to final delivery, we're with you every step of the way</p>
          </div>

          <div className={styles.journeyContainer}>
            <div className={styles.journeyLine}></div>
            <div className={styles.journeyItems}>
              {/* Discovery & Onboarding */}
              <div className={styles.journeyItem}>
                <motion.div 
                  className={styles.journeyContent}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3>Discovery & Onboarding</h3>
                  <p>We start by deeply understanding your business, audience, and vision. This foundation ensures everything we build aligns with your goals from day one.</p>
                </motion.div>
              </div>

              {/* Client Service Manager */}
              <div className={styles.journeyItem}>
                <motion.div 
                  className={styles.journeyContent}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3>Client Service Manager</h3>
                  <p>Your dedicated point of contact who understands your business goals and ensures smooth communication throughout the project.</p>
                </motion.div>
              </div>

              {/* Digital Strategist */}
              <div className={styles.journeyItem}>
                <motion.div 
                  className={styles.journeyContent}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h3>Digital Strategist</h3>
                  <p>Expert analysis and strategic planning to create a roadmap that aligns with your business objectives.</p>
                </motion.div>
              </div>

              {/* Creative Team */}
              <div className={styles.journeyItem}>
                <motion.div 
                  className={styles.journeyContent}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <h3>Creative Team</h3>
                  <p>Talented designers and content creators who bring your brand to life with stunning visuals and compelling copy.</p>
                </motion.div>
              </div>

              {/* Digital Marketing Executive */}
              <div className={styles.journeyItem}>
                <motion.div 
                  className={styles.journeyContent}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <h3>Digital Marketing Executive</h3>
                  <p>Implementation and optimization of digital campaigns to ensure maximum reach and engagement.</p>
                </motion.div>
              </div>

              {/* Post-Launch Support */}
              <div className={styles.journeyItem}>
                <motion.div 
                  className={styles.journeyContent}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <h3>Post-Launch Support</h3>
                  <p>We don’t leave after delivery. You get ongoing support, performance reviews, and upgrades to keep your brand thriving long after launch.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assured Section */}
      <section className={styles.qualitySection}>
        <div className={styles.qualityContent}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Quality Assured, Results Delivered</h2>
            <p>At Lynkz, we don't just meet expectations - we exceed them. Our rigorous quality assurance process ensures that every project we deliver is of the highest standard, from initial concept to final implementation.</p>
            <div className={styles.qualityBadge}>
              <FiCheckCircle size={20} />
              <span>100% Satisfaction Guaranteed</span>
            </div>
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default Services;