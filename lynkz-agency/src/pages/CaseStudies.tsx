import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import styles from './CaseStudies.module.css';

interface CaseStudyProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  client: string;
  results: string[];
  style?: React.CSSProperties;
}

const CaseStudyCard: React.FC<CaseStudyProps> = ({
  id,
  title,
  description,
  imageUrl,
  category,
  client,
  results,
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/case-studies/${id}`);
  };

  return (
    <motion.div 
      className={styles.caseStudyCard}
      whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      onClick={handleCardClick}
      style={{ cursor: 'pointer' }}
    >
      <div className={styles.imageContainer}>
        <motion.img 
          src={imageUrl} 
          alt={title} 
          className={styles.caseStudyImage}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
        <span className={styles.categoryTag}>{category}</span>
      </div>
      <div className={styles.caseStudyContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.clientName}>{client}</p>
        <p className={styles.description}>{description}</p>
        <div className={styles.results}>
          <h4 className={styles.resultsTitle}>Key Results</h4>
          <ul className={styles.resultsList}>
            {results.map((result, index) => (
              <li key={index} className={styles.resultItem}>
                <span className={styles.bullet}>•</span> {result}
              </li>
            ))}
          </ul>
        </div>
        <button 
          className={styles.readMoreBtn}
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/case-studies/${id}`);
          }}
          aria-label={`Read more about ${title}`}
        >
          Read Full Case Study <FiArrowRight className={styles.arrowIcon} />
        </button>
      </div>
    </motion.div>
  );
};

// Export the caseStudies array for use in other components
export const caseStudies: CaseStudyProps[] = [
  {
    id: 'google-business-profile',
    title: 'How Google Business Profile Can Transform Your Online Presence',
    description: 'Optimizing your Google Business Profile to boost local visibility, drive traffic, and improve brand credibility.',
    imageUrl: 'https://images.unsplash.com/photo-1522199710521-72d69614c702?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    category: 'SEO & Local Marketing',
    client: 'Local Biz Pro',
    results: [
      '300% increase in local search impressions',
      '50% rise in customer calls and visits',
      'Improved Google Maps ranking to top 3'
    ]
  },
  {
    id: 'digital-marketing-audit',
    title: 'How to Conduct a Digital Marketing Audit for Your Business',
    description: 'A comprehensive audit that reveals gaps in strategy, platforms, and messaging—leading to a data-backed action plan.',
    imageUrl: 'https://images.unsplash.com/photo-1562577309-2592ab84b1bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    category: 'Digital Strategy',
    client: 'AuditEdge Solutions',
    results: [
      'Identified 5 key conversion drop-off points',
      'Unified messaging across 6 channels',
      'Reduced CAC by 35% after implementation'
    ]
  },
  {
    id: 'facebook-ads-cost-reduction',
    title: 'How to Reduce Cost Per Result in Facebook Ads',
    description: 'Ad creative testing and audience segmentation reduced ad spend while improving campaign ROI.',
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    category: 'Social Ads',
    client: 'GreenSpark Retail',
    results: [
      'Reduced CPR by 60% in 2 weeks',
      'Doubled CTR with creative refresh',
      'Improved ROI from 2.1x to 4.7x'
    ]
  },
  {
    id: 'cta-optimization',
    title: 'Mastering Calls to Action in Digital Marketing: Everything You Should Know',
    description: 'We A/B tested CTA placement and copy across web and ads to maximize engagement and conversions.',
    imageUrl: 'https://images.unsplash.com/photo-1581090700227-1e8e0c4f661e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    category: 'Conversion Rate Optimization',
    client: 'EngageNow Media',
    results: [
      'CTA click-through rate increased by 88%',
      'Landing page conversions up 47%',
      'Email CTR improved by 39%'
    ]
  },
  {
    id: 'data-analytics-business-growth',
    title: 'How Data Analytics Drives Strategic Business Growth',
    description: 'Using data dashboards and insights to guide decision-making, improve marketing ROI, and optimize customer experience.',
    imageUrl: 'https://images.unsplash.com/photo-1581090464777-752d1d8c1040?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    category: 'Data Analytics',
    client: 'BrightMetrics Inc.',
    results: [
      'Visualized performance across 10 departments',
      'Cut churn by 23% through data-led interventions',
      'Boosted customer retention by 18%'
    ]
  }
];

// CaseStudies component that uses the exported caseStudies array
const CaseStudies: React.FC = () => {
  // Use the exported caseStudies array directly
  const displayedCaseStudies = [...caseStudies];

  return (
    <div className={styles.caseStudiesPage}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <motion.h1 
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Case Studies
          </motion.h1>
          <motion.p 
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Explore our successful projects and see how we've helped businesses grow and transform.
          </motion.p>
        </div>
      </section>

      <section className={styles.caseStudiesSection}>
        <div className={styles.container}>
          <div className={styles.caseStudiesGrid}>
            {displayedCaseStudies.map((study) => (
              <CaseStudyCard
                key={study.id}
                id={study.id}
                title={study.title}
                description={study.description}
                imageUrl={study.imageUrl}
                category={study.category}
                client={study.client}
                results={study.results}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;