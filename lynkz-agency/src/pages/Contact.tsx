import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  FiMapPin, 
  FiPhone, 
  FiMail, 
  FiClock, 
  FiCheck, 
  FiX, 
  FiTwitter, 
  FiLinkedin, 
  FiInstagram, 
  FiGithub, 
  FiDribbble,
  FiSend
} from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';

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

  // Contact information
  const contactInfo: ContactInfo[] = [
    {
      icon: <FiMapPin className={styles.icon} />,
      title: 'Our Location',
      description: '123 Creative Street, Tech City, CA 94103, USA',
      link: 'https://maps.google.com',
    },
    {
      icon: <FiMail className={styles.icon} />,
      title: 'Email Us',
      description: 'hello@lynkz.agency',
      link: 'mailto:hello@lynkz.agency',
    },
    {
      icon: <FiPhone className={styles.icon} />,
      title: 'Call Us',
      description: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: <FiClock className={styles.icon} />,
      title: 'Working Hours',
      description: 'Mon - Fri: 9:00 - 18:00',
      description2: 'Sat - Sun: Closed',
    },
  ];

  // Social media links
  const socialLinks: SocialLink[] = [
    { 
      name: 'Twitter', 
      url: 'https://twitter.com/lynkz', 
      icon: <FiTwitter aria-hidden="true" /> 
    },
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/company/lynkz', 
      icon: <FiLinkedin aria-hidden="true" /> 
    },
    { 
      name: 'Instagram', 
      url: 'https://instagram.com/lynkz', 
      icon: <FiInstagram aria-hidden="true" /> 
    },
    { 
      name: 'Dribbble', 
      url: 'https://dribbble.com/lynkz', 
      icon: <FiDribbble aria-hidden="true" /> 
    },
    { 
      name: 'GitHub', 
      url: 'https://github.com/lynkz', 
      icon: <FiGithub aria-hidden="true" /> 
    },
  ];
  
  // Google Maps iframe URL
  const mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2155709952225!2d-73.9878449240173!3d40.74844097138958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMTMuMiJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus';
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true, success: null, message: '' });

    try {
      if (!form.current) return;
      
      // In a real app, you would use your EmailJS service ID, template ID, and public key
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
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
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className={styles.heroTitle}>Contact Us</h1>
            <p className={styles.heroSubtitle}>
              Have questions or want to work together? We'd love to hear from you!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className={styles.section}>
        <div className="container">
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
                <div className={styles.contactIcon}>
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

      {/* Contact Form & Map Section */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.contactLayout}>
            {/* Contact Form */}
            <motion.div 
              ref={formRef}
              className={styles.contactFormContainer}
              initial={{ opacity: 0, y: 30 }}
              animate={isFormInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Send Us a Message</h2>
                <p className={styles.sectionSubtitle}>
                  Have questions or ready to start your project? We're here to help.
                </p>
              </div>
              
              <form ref={form} onSubmit={handleSubmit} className={styles.contactForm}>
                <AnimatePresence mode="wait">
                  {status.message && (
                    <motion.div 
                      className={`${styles.formMessage} ${status.success ? styles.success : styles.error}`}
                      initial={{ opacity: 0, height: 0, marginBottom: 0, overflow: 'hidden' }}
                      animate={{ opacity: 1, height: 'auto', marginBottom: '1.5rem' }}
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

                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.formLabel}>
                      Your Name <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={styles.formInput}
                      disabled={status.submitting}
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.formLabel}>
                      Email Address <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={styles.formInput}
                      disabled={status.submitting}
                    />
                  </div>
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.formLabel}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="How can we help?"
                    value={formData.subject}
                    onChange={handleChange}
                    className={styles.formInput}
                    disabled={status.submitting}
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>
                    Your Message <span className={styles.required}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={styles.formTextarea}
                    disabled={status.submitting}
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className={styles.submitButton}
                  disabled={status.submitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {status.submitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <FiSend className={styles.buttonIcon} />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div 
              className={styles.mapContainer}
              initial={{ opacity: 0, y: 30 }}
              animate={isFormInView ? { 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.6,
                  delay: 0.2
                }
              } : {}}
            >
              <iframe
                src={mapUrl}
                className={styles.mapIframe}
                allowFullScreen
                loading="lazy"
                title="Our Location"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
