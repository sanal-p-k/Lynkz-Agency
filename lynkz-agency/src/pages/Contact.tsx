import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  FiPhone, 
  FiMail, 
  FiClock, 
  FiCheck, 
  FiX, 
  FiSend,
  FiArrowRight
} from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';

// Define TypeScript interfaces
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  description: string;
  description2?: string;
  link?: string;
}

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

interface FormStatus {
  submitting: boolean;
  success: boolean | null;
  message: string;
}

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState<FormStatus>({ 
    submitting: false, 
    success: null, 
    message: '' 
  });
  
  // Refs for scroll animations
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const isFormInView = useInView(formRef, { once: true, amount: 0.1 });

  // Contact information in a single row
  const contactInfo: ContactInfo[] = [
    {
      icon: <FiMail className={styles.icon} />,
      title: 'Email Us',
      description: 'lynkzagency@gmail.com',
      link: 'mailto:lynkzagency@gmail.com',
    },
    {
      icon: <FiPhone className={styles.icon} />,
      title: 'Call Us',
      description: '+91 9497684728',
      description2: 'Mon - Fri, 9:00 - 18:00',
      link: 'tel:+91 9497684728',
    },
    {
      icon: <FiClock className={styles.icon} />,
      title: 'Working Hours',
      description: 'Monday - Friday: 9:00 - 18:00',
      description2: 'Saturday: 10:00 - 15:00',
    },
  ];

  // Social media links
  const socialLinks: SocialLink[] = [
    {
    name: 'Instagram',
    url: 'https://www.instagram.com/lynkz_agency/',
    icon: <i className="fa-brands  fa-instagram"></i>,
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/LynkzAgency',
    icon: <i className="fa-brands  fa-x-twitter"></i>,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/lynkz-agency/',
    icon: <i className="fa-brands fa-linkedin-in "></i>,
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61575929790796',
    icon: <i className="fa-brands  fa-facebook-f"></i>,
  },
  ];

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setStatus({
      submitting: true,
      success: null,
      message: ''
    });
    
    try {
      // Replace with your EmailJS service ID, template ID, and user ID
      const result = await emailjs.sendForm(
        'your_service_id',
        'your_template_id',
        form.current!,
        'your_user_id'
      );
      
      console.log('Email sent successfully:', result);
      
      // Update status on success
      setStatus({
        submitting: false,
        success: true,
        message: 'Your message has been sent successfully! We\'ll get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({
        submitting: false,
        success: false,
        message: 'Something went wrong. Please try again later.'
      });
    }
  };

  // Reset status message after timeout
  useEffect(() => {
    if (status.message) {
      const timer = setTimeout(() => {
        setStatus(prev => ({ ...prev, message: '' }));
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status.message]);

  return (
    <div className={styles.contactPage}>
      {/* Hero Section */}
      <section className={styles.hero} ref={heroRef}>
        <div className="container">
          <div className={styles.heroContent}>
            <motion.h1 
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Let's Work Together
            </motion.h1>
            <motion.p 
              className={styles.heroSubtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Have a project in mind or want to discuss potential opportunities? 
              We'd love to hear from you. Let's create something amazing together.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={styles.heroCta}
            >
              <a href="#contact-form" className={styles.ctaButton}>
                Get in Touch <FiArrowRight className={styles.ctaIcon} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className={styles.section} id="contact-info">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Get In Touch</h2>
            <p className={styles.sectionSubtitle}>
              We're here to help and answer any questions you might have.
            </p>
          </div>
          
          <div className={styles.contactInfoGrid}>
            {contactInfo.map((item, index) => (
              <motion.div 
                key={index}
                className={styles.contactInfoCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={styles.icon}>
                  {item.icon}
                </div>
                <h3 className={styles.contactTitle}>{item.title}</h3>
                <p className={styles.contactDescription}>
                  {item.link ? (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.contactLink}
                    >
                      {item.description}
                    </a>
                  ) : (
                    item.description
                  )}
                </p>
                {item.description2 && (
                  <p className={styles.contactDescription}>{item.description2}</p>
                )}
              </motion.div>
            ))}
          </div>
          
          {/* Social Links */}
          <div className={styles.socialLinks}>
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Visit our ${social.name}`}
              >
                {social.icon}
                <span className="sr-only">{social.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={styles.section} id="contact-form">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Send Us a Message</h2>
            <p className={styles.sectionSubtitle}>
              Have questions or ready to start your project? We're here to help.
            </p>
          </div>
          
          <div className={styles.contactLayout}>
            {/* Contact Form */}
            <motion.div 
              ref={formRef}
              className={styles.contactFormContainer}
              initial={{ opacity: 0, y: 30 }}
              animate={isFormInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <form ref={form} onSubmit={handleSubmit} className={styles.contactForm}>
                <AnimatePresence mode="wait">
                  {status.message && (
                    <motion.div 
                      className={`${styles.formMessage} ${status.success ? styles.success : styles.error}`}
                      initial={{ opacity: 0, height: 0, marginBottom: 0, overflow: 'hidden' }}
                      animate={{ opacity: 1, height: 'auto', marginBottom: '2rem' }}
                      exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className={styles.messageContent}>
                        {status.success ? (
                          <FiCheck className={styles.messageIcon} />
                        ) : (
                          <FiX className={styles.messageIcon} />
                        )}
                        <span>{status.message}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className={styles.formGroup}>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={styles.formControl}
                    placeholder=" "
                    required
                  />
                  <label htmlFor="name" className={styles.formLabel}>
                    Your Name
                  </label>
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.formControl}
                    placeholder=" "
                    required
                  />
                  <label htmlFor="email" className={styles.formLabel}>
                    Email Address
                  </label>
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={styles.formControl}
                    placeholder=" "
                    required
                  />
                  <label htmlFor="subject" className={styles.formLabel}>
                    Subject
                  </label>
                </div>

                <div className={styles.formGroup}>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={styles.formControl}
                    placeholder=" "
                    rows={5}
                    required
                  />
                  <label htmlFor="message" className={styles.formLabel}>
                    Your Message
                  </label>
                </div>

                <motion.button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={status.submitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {status.submitting ? 'Sending...' : 'Send Message'}
                  {!status.submitting && <FiSend className={styles.submitIcon} />}
                </motion.button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
