import { motion, useInView } from 'framer-motion';
import { FiUsers, FiAward, FiGlobe, FiTwitter, FiLinkedin, FiGithub, FiDribbble, FiInstagram } from 'react-icons/fi';
import styles from './About.module.css';
import { useRef } from 'react';

// Mock data
const teamMembers = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    bio: 'Digital strategist with over 10 years of experience in building successful online businesses.',
    image: 'team-1.jpg',
    social: {
      twitter: '#',
      linkedin: '#',
      dribbble: '#',
    },
  },
  {
    id: 2,
    name: 'Sarah Williams',
    role: 'Creative Director',
    bio: 'Award-winning designer with a passion for creating beautiful and functional digital experiences.',
    image: 'team-2.jpg',
    social: {
      twitter: '#',
      linkedin: '#',
      behance: '#',
    },
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Lead Developer',
    bio: 'Full-stack developer specializing in modern web technologies and performance optimization.',
    image: 'team-3.jpg',
    social: {
      twitter: '#',
      github: '#',
      linkedin: '#',
    },
  },
  {
    id: 4,
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    bio: 'Data-driven marketer with expertise in growth strategies and brand development.',
    image: 'team-4.jpg',
    social: {
      twitter: '#',
      linkedin: '#',
      instagram: '#',
    },
  },
];

const values = [
  {
    icon: <FiUsers />,
    title: 'Collaboration',
    description: 'We believe in working closely with our clients as partners to achieve shared success.'
  },
  {
    icon: <FiAward />,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, delivering exceptional quality and results.'
  },
  {
    icon: <FiGlobe />,
    title: 'Innovation',
    description: 'We embrace creativity and forward-thinking to solve complex challenges in new ways.'
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

  // Social icon mapping
  const socialIcons = {
    twitter: <FiTwitter />,
    linkedin: <FiLinkedin />,
    github: <FiGithub />,
    dribbble: <FiDribbble />,
    behance: <FiDribbble />, // Using Dribbble icon for Behance as well
    instagram: <FiInstagram />
  };

  return (
    <div className={styles.about}>
      {/* Hero Section */}
      <section className={styles.heroSection} ref={heroRef}>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.heroTitle}>Our Story</h1>
          <p className={styles.heroSubtitle}>Crafting digital experiences that make an impact</p>
        </motion.div>
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
                We are a passionate team of designers, developers, and strategists dedicated to creating exceptional digital experiences. With years of combined experience, we help businesses of all sizes bring their ideas to life through innovative technology and creative solutions.
              </p>
              <p>
                Our approach combines strategic thinking with technical excellence to deliver solutions that not only look great but also drive real business results. We believe in building long-term partnerships with our clients, working collaboratively to achieve their goals.
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

      {/* Team Section */}
      <section className={styles.teamSection} ref={teamRef}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionSubtitle}>Our Experts</span>
            <h2 className={styles.sectionTitle}>Meet The Team</h2>
            <div className={styles.sectionDivider}></div>
            <p style={{ marginTop: '1rem', color: 'var(--color-text-secondary)' }}>The talented individuals behind our success</p>
          </div>
          
          <motion.div 
            className={styles.teamGrid}
            initial="hidden"
            animate={isTeamInView ? "visible" : "hidden"}
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.id}
                className={styles.teamCard}
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
                <div className={styles.teamImage}>
                  <img 
                    src={member.avatar || `https://randomuser.me/api/portraits/${member.gender === 'female' ? 'women' : 'men'}/${member.id + 20}.jpg`} 
                    alt={member.name} 
                    loading="lazy"
                  />
                </div>
                <div className={styles.teamContent}>
                  <h3 className={styles.teamName}>{member.name}</h3>
                  <span className={styles.teamRole}>{member.role}</span>
                  <p className={styles.teamBio}>{member.bio}</p>
                  <div className={styles.socialLinks}>
                    {Object.entries(member.social).map(([platform, url]) => (
                      <a 
                        key={platform} 
                        href={url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                        aria-label={`${member.name}'s ${platform}`}
                      >
                        {socialIcons[platform]}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle">Milestones in our growth and success</p>
          </motion.div>
          
          <div className="timeline">
            {[
              {
                year: '2018',
                title: 'Company Founded',
                description: 'Lynkz was founded with a small team of 3 people working out of a shared office space.'
              },
              {
                year: '2019',
                title: 'First Major Client',
                description: 'Landed our first enterprise client, marking a significant milestone in our growth.'
              },
              {
                year: '2020',
                title: 'Team Expansion',
                description: 'Expanded our team to 15 talented professionals across design, development, and marketing.'
              },
              {
                year: '2021',
                title: 'New Office',
                description: 'Moved into our new headquarters in the heart of the city.'
              },
              {
                year: '2023',
                title: '100+ Projects',
                description: 'Successfully delivered over 100 projects for clients across various industries.'
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
            <h2 className="cta-title">Want to be part of our story?</h2>
            <p className="cta-subtitle">We're always looking for talented individuals to join our team</p>
            <a href="#" className="btn btn--dark" data-cursor-hover>
              View Open Positions
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
