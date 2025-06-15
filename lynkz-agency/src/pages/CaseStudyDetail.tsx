import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiClock, FiUsers, FiCheckCircle, FiTrendingUp, FiAward, FiImage, FiShare2, FiBookOpen } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import styles from './CaseStudyDetail.module.css';

interface Metric {
  label: string;
  value: string;
  icon: React.ReactNode;
  description?: string;
}

interface Testimonial {
  text: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

interface CaseStudy {
  id: string;
  title: string;
  publishedDate: string;
  readTime: string;
  overview: string;
  client: string;
  category: string;
  industry?: string;
  duration?: string;
  teamSize?: string;
  technologies?: string[];
  challenge: string;
  solution: string;
  results: string[];
  metrics?: Metric[];
  testimonial?: Testimonial;
  sections: {
    title: string;
    content: string[];
    checklist?: string[];
    tips?: string[];
  }[];
  keyTakeaways?: string[];
  relatedArticles?: { title: string; link: string }[];
}

// Case Study data
const caseStudyData: Record<string, CaseStudy> = {
  'google-business-profile': {
    id: 'google-business-profile',
    title: 'How Google Business Profile Can Transform Your Online Presence',
    publishedDate: 'June 2023',
    readTime: '8 min read',
    overview: 'Optimizing your Google Business Profile to boost local visibility, drive traffic, and improve brand credibility.',
    client: 'Local Biz Pro',
    category: 'SEO & Local Marketing',
    industry: 'Marketing Services',
    duration: '3 Months',
    teamSize: '2 Specialists',
    technologies: ['Google Business Profile', 'Google My Business', 'Google Analytics', 'Google Search Console'],
    challenge: 'Local Biz Pro was struggling to help their clients achieve visibility in local search results, with many businesses losing potential customers to competitors with better-optimized Google Business Profiles.',
    solution: 'We implemented a comprehensive Google Business Profile optimization strategy that included complete profile optimization, review management, and regular content updates to improve local search visibility and drive more qualified traffic to their clients\' businesses.',
    results: [
      '300% increase in local search impressions',
      '50% rise in customer calls and visits',
      'Improved Google Maps ranking to top 3',
      'Increased customer engagement through Google Posts',
      'Enhanced online reputation with review management'
    ],
    metrics: [
      { label: 'Search Impressions', value: '300%', icon: <FiTrendingUp />, description: 'Increase in local search visibility' },
      { label: 'Customer Engagement', value: '50%', icon: <FiUsers />, description: 'Rise in calls and store visits' },
      { label: 'Maps Ranking', value: 'Top 3', icon: <FiAward />, description: 'Improved local search ranking' }
    ],
    testimonial: {
      text: "The Google Business Profile optimization by Lynkz Agency transformed our clients' local search presence. The results were immediate and substantial, with several clients moving to the top of local search results within weeks.",
      author: 'Sarah Johnson',
      role: 'CEO',
      company: 'Local Biz Pro'
    },
    sections: [
      {
        title: 'The Challenge',
        content: [
          'Local Biz Pro, a small business marketing agency, was struggling to help their clients stand out in local search results. Despite having great products and services, their clients were losing potential customers to competitors with better online visibility.',
          'The main challenge was to improve local search presence and drive more qualified traffic to their clients\' physical locations through Google Business Profile optimization.'
        ]
      },
      {
        title: 'Our Approach',
        content: [
          'We conducted a comprehensive audit of their clients\' Google Business Profiles and implemented a strategic optimization plan:',
          '1. Complete profile optimization with accurate business information'
        ],
        checklist: [
          'Verified and claimed all business listings',
          'Optimized business descriptions with relevant keywords',
          'Added high-quality photos and virtual tours',
          'Implemented a review management strategy',
          'Set up Google Posts for regular updates'
        ]
      },
      {
        title: 'The Results',
        content: [
          'Within just 3 months of implementing our optimization strategy, Local Biz Pro saw remarkable improvements across all key metrics for their clients:',
          '• 300% increase in local search impressions\n• 50% more customer calls and store visits\n• Top 3 rankings in Google Maps for target keywords'
        ],
        tips: [
          'Update your business information regularly',
          'Respond to all customer reviews promptly',
          'Use Google Posts to share updates and promotions',
          'Add high-quality photos monthly'
        ]
      }
    ],
    keyTakeaways: [
      'Complete GBP profiles get 7x more clicks than incomplete ones',
      'Businesses that add photos receive 42% more requests for directions',
      'Regularly updated profiles show higher engagement and better rankings'
    ],
    relatedArticles: [
      { title: 'Local SEO Strategies for Small Businesses', link: '/local-seo-strategies' },
      { title: 'How to Get More Customer Reviews', link: '/get-more-reviews' }
    ]
  },
  'digital-marketing-audit': {
    id: 'digital-marketing-audit',
    title: 'How to Conduct a Digital Marketing Audit for Your Business',
    publishedDate: 'July 2023',
    readTime: '10 min read',
    overview: 'Step-by-step guide to evaluating your digital marketing performance and identifying improvement opportunities.',
    client: 'AuditEdge Solutions',
    category: 'Digital Marketing',
    industry: 'Marketing Technology',
    duration: '6 Weeks',
    teamSize: '3 Analysts',
    technologies: ['Google Analytics', 'SEMrush', 'Hotjar', 'Google Data Studio'],
    challenge: 'AuditEdge Solutions needed a comprehensive digital marketing audit to identify inefficiencies across multiple channels and create a unified strategy that would improve their marketing ROI and customer acquisition costs.',
    solution: 'We conducted an in-depth audit of all digital marketing channels, including website analytics, SEO, paid advertising, social media, email marketing, and content strategy. Our team provided actionable insights and a prioritized roadmap for implementation.',
    results: [
      'Identified 5 key conversion drop-off points',
      'Unified messaging across 6 channels',
      'Reduced CAC by 35% after implementation',
      'Improved lead quality by 42%',
      'Streamlined marketing tech stack',
      'Uncovered 20-35% growth opportunities',
      'Fixed critical issues impacting customer experience',
      'Created a clear roadmap for digital success'
    ],
    metrics: [
      { label: 'Cost Per Acquisition', value: '35%', icon: <FiTrendingUp />, description: 'Reduction in customer acquisition cost' },
      { label: 'Lead Quality', value: '42%', icon: <FiCheckCircle />, description: 'Improvement in qualified leads' },
      { label: 'Channel Integration', value: '6', icon: <FiUsers />, description: 'Channels with unified messaging' }
    ],
    testimonial: {
      text: "The digital marketing audit from Lynkz Agency was a game-changer for our business. Their thorough analysis and clear recommendations helped us optimize our marketing spend and improve our overall strategy.",
      author: 'Michael Chen',
      role: 'Marketing Director',
      company: 'AuditEdge Solutions'
    },
    sections: [
      {
        title: "Why Your Business Needs Regular Check-Ups",
        content: [
          "Just like you visit a doctor for regular health check-ups, your business needs digital audits to stay in top shape. Many companies unknowingly operate with problems that push customers away - like confusing websites or social media that doesn't connect.",
          "Real Example: One of our clients in Kochi was losing 7 out of 10 mobile customers because their contact form wasn't working properly - a problem they discovered only through our audit."
        ]
      },
      {
        title: "What We Examine in Your Digital Audit",
        content: [
          "Our Kerala-based team at Lynkz Agency investigates every part of your online presence:",
          "1. Your website's health and user experience\n2. How easily customers can find you online (SEO)\n3. Your social media's real impact\n4. Whether your ads are giving good returns\n5. Where customers drop off in their buying journey"
        ],
        checklist: [
          "Website loading speed (should work as fast as a microwave)",
          "Mobile friendliness (how it looks on phones)",
          "Broken links (like closed doors customers can't open)",
          "Content quality (is it helpful or just filling space?)",
          "Conversion paths (can customers easily buy/contact you?)"
        ]
      },
      {
        title: "Turning Insights Into Action",
        content: [
          "We don't just hand you a report - we help fix what matters most first. Our clients typically see quick wins by addressing the 'big leaks' in their digital presence.",
          "Success Story: A Kozhikode restaurant increased online orders by 60% after we fixed just three issues found in their audit."
        ],
        tips: [
          "First fix what's broken (like non-working forms)",
          "Then improve what works (make good content great)",
          "Set up proper measurement (like a fitness tracker for your business)",
          "Plan regular check-ins (we recommend every 3-6 months)"
        ]
      }
    ],
    keyTakeaways: [
      '90% of businesses have at least 3 critical digital issues they don\'t know about',
      'Simple fixes often deliver 25%+ improvements',
      'Companies that audit regularly grow 2x faster than those who don\'t'
    ],
    relatedArticles: [
      { title: 'Technical SEO: The Complete Guide', link: '/technical-seo-guide' },
      { title: 'Conversion Rate Optimization Best Practices', link: '/cro-best-practices' }
    ]
  },
  'facebook-ads-cost-reduction': {
    id: 'facebook-ads-cost-reduction',
    title: 'How to Reduce Cost Per Result in Facebook Ads',
    publishedDate: 'August 2023',
    readTime: '9 min read',
    overview: 'Strategies to optimize Facebook ad campaigns and reduce cost per result while maintaining performance through creative testing and audience segmentation.',
    client: 'GreenSpark Retail',
    category: 'Social Media Advertising',
    industry: 'E-commerce',
    duration: '8 Weeks',
    teamSize: '2 Specialists',
    technologies: ['Facebook Ads Manager', 'Google Analytics', 'Hotjar', 'Google Tag Manager'],
    challenge: 'GreenSpark Retail was experiencing high customer acquisition costs and diminishing returns on their Facebook ad spend, with a cost per result that was 40% above industry benchmarks.',
    solution: 'We implemented a comprehensive Facebook Ads optimization strategy that included audience segmentation, A/B testing of ad creatives, landing page optimization, and detailed performance tracking to reduce costs while improving conversion rates.',
    results: [
      'Reduced CPR by 60% in 2 weeks',
      'Doubled CTR with creative refresh',
      'Improved ROI from 2.1x to 4.7x',
      'Increased conversion rate by 75%',
      'Expanded target audience segments'
    ],
    metrics: [
      { label: 'Cost Per Result', value: '60%', icon: <FiTrendingUp />, description: 'Reduction in advertising costs' },
      { label: 'Click-Through Rate', value: '2x', icon: <FiCheckCircle />, description: 'Increase with new creatives' },
      { label: 'Return on Ad Spend', value: '4.7x', icon: <FiTrendingUp />, description: 'Improved from 2.1x' }
    ],
    testimonial: {
      text: "Lynkz Agency's Facebook Ads expertise transformed our digital advertising. They not only reduced our costs but also significantly improved our campaign performance and ROI.",
      author: 'Emily Rodriguez',
      role: 'E-commerce Manager',
      company: 'GreenSpark Retail'
    },
    sections: [
      {
        title: 'The Challenge',
        content: [
          'GreenSpark Retail was struggling with rising Facebook ad costs and diminishing returns. Their cost per result had increased by 45% over six months, making their campaigns less profitable.',
          'The main challenge was to reduce the cost per result while maintaining or improving conversion rates and overall campaign performance.'
        ]
      },
      {
        title: 'Our Approach',
        content: [
          'We implemented a comprehensive Facebook Ads optimization strategy focused on three key areas:',
          '1. Audience segmentation and targeting refinement\n2. Ad creative testing and optimization\n3. Campaign structure and bidding strategy adjustments'
        ],
        checklist: [
          'Analyzed existing audience segments and performance data',
          'Created multiple ad variations for A/B testing',
          'Refined lookalike audiences based on high-value customers',
          'Optimized campaign structure for better budget allocation',
          'Implemented automated rules for bid adjustments'
        ]
      },
      {
        title: 'The Results',
        content: [
          'Within just two weeks, we achieved remarkable improvements in campaign performance:',
          '• 60% reduction in cost per result\n• 2x increase in click-through rate\n• ROI improved from 2.1x to 4.7x\n• 35% increase in conversion rate'
        ],
        tips: [
          'Test at least 3-5 ad creatives per ad set',
          'Use video content for higher engagement',
          'Refresh ad creatives every 2-3 weeks',
          'Leverage lookalike audiences for better targeting'
        ]
      }
    ],
    keyTakeaways: [
      'Regular creative refreshes can significantly improve CTR',
      'Proper audience segmentation is key to reducing wasted ad spend',
      'Continuous testing and optimization are essential for maintaining performance'
    ],
    relatedArticles: [
      { title: 'Advanced Facebook Ad Targeting Strategies', link: '/facebook-ad-targeting' },
      { title: 'Video Ad Optimization Guide', link: '/video-ad-optimization' }
    ]
  },
  'cta-optimization': {
    id: 'cta-optimization',
    title: 'Mastering Calls to Action in Digital Marketing: Everything You Should Know',
    publishedDate: 'September 2023',
    readTime: '11 min read',
    overview: 'Comprehensive guide to creating high-converting CTAs across all digital channels through A/B testing and data-driven optimization.',
    client: 'EngageNow Media',
    category: 'Conversion Rate Optimization',
    industry: 'Digital Marketing Agency',
    duration: '6 Weeks',
    teamSize: '3 Specialists',
    technologies: ['Google Optimize', 'Hotjar', 'Google Analytics', 'VWO'],
    challenge: 'EngageNow Media was experiencing low conversion rates across their digital properties, with CTAs underperforming industry benchmarks and failing to drive the desired user actions.',
    solution: 'We conducted a comprehensive CTA optimization program that included A/B testing of button designs, placements, and messaging across all digital touchpoints, supported by heatmaps and user session recordings to understand user behavior.',
    results: [
      'CTA click-through rate increased by 88%',
      'Landing page conversions up 47%',
      'Email CTR improved by 39%',
      'Reduced bounce rate by 32%',
      'Increased average order value by 22%'
    ],
    metrics: [
      { label: 'CTR Improvement', value: '88%', icon: <FiTrendingUp />, description: 'Increase in click-through rates' },
      { label: 'Conversion Lift', value: '47%', icon: <FiCheckCircle />, description: 'Increase in landing page conversions' },
      { label: 'Email CTR', value: '39%', icon: <FiTrendingUp />, description: 'Improvement in email click rates' }
    ],
    testimonial: {
      text: "The CTA optimization work by Lynkz Agency delivered exceptional results across all our digital channels. Their data-driven approach and attention to detail significantly improved our conversion metrics.",
      author: 'David Kim',
      role: 'Head of Digital',
      company: 'EngageNow Media'
    },
    sections: [
      {
        title: 'The Challenge',
        content: [
          'EngageNow Media was experiencing subpar conversion rates across their digital properties. Their CTAs weren\'t driving the desired actions, leading to lost opportunities and lower ROI.',
          'The challenge was to optimize CTAs across multiple touchpoints to improve engagement and conversion rates.'
        ]
      },
      {
        title: 'Our Approach',
        content: [
          'We conducted a comprehensive CTA audit and implemented a data-driven optimization strategy:',
          '1. CTA placement and design testing\n2. Copy and messaging refinement\n3. Behavioral targeting and personalization'
        ],
        checklist: [
          'Audited existing CTAs across all digital properties',
          'Created multiple CTA variations for A/B testing',
          'Implemented heatmaps and session recordings',
          'Developed a CTA style guide for consistency',
          'Established a testing framework for ongoing optimization'
        ]
      },
      {
        title: 'The Results',
        content: [
          'The CTA optimization initiative delivered impressive results:',
          '• 88% increase in CTA click-through rates\n• 47% improvement in landing page conversions\n• 39% higher email CTR\n• 22% increase in overall lead generation'
        ],
        tips: [
          'Use action-oriented, benefit-driven CTA copy',
          'Test different CTA colors and button styles',
          'Place CTAs strategically based on user journey',
          'Use contrasting colors for better visibility'
        ]
      }
    ],
    keyTakeaways: [
      'Strategic CTA placement can significantly impact conversion rates',
      'A/B testing is crucial for optimizing CTA performance',
      'Consistent CTA design improves user experience and trust'
    ],
    relatedArticles: [
      { title: 'The Psychology of Effective CTAs', link: '/psychology-of-ctas' },
      { title: 'Landing Page Optimization Guide', link: '/landing-page-optimization' }
    ]
  },
  'data-analytics-business-growth': {
    id: 'data-analytics-business-growth',
    title: 'How Data Analytics Drives Strategic Business Growth',
    publishedDate: 'October 2023',
    readTime: '12 min read',
    challenge: 'BrightMetrics Inc. was drowning in data but lacked actionable insights, with decision-making slowed by siloed information and no unified view of customer behavior across touchpoints.',
    solution: 'We implemented a comprehensive data analytics framework that included data integration, custom dashboard development, and predictive analytics to provide real-time insights and actionable recommendations across the organization.',
    results: [
      'Visualized performance across 10 departments',
      'Cut churn by 23% through data-led interventions',
      'Boosted customer retention by 18%',
      'Reduced time-to-insight by 65%',
      'Increased data-driven decision making by 80%'
    ],
    metrics: [
      { label: 'Customer Churn', value: '23%', icon: <FiTrendingUp />, description: 'Reduction in customer churn' },
      { label: 'Retention Rate', value: '18%', icon: <FiCheckCircle />, description: 'Improvement in customer retention' },
      { label: 'Time-to-Insight', value: '65%', icon: <FiClock />, description: 'Reduction in analysis time' }
    ],
    testimonial: {
      text: "The data analytics transformation led by Lynkz Agency has been revolutionary for our business. We now have clear visibility into our operations and customer behavior, enabling us to make informed decisions that drive growth.",
      author: 'Alex Thompson',
      role: 'Director of Analytics',
      company: 'BrightMetrics Inc.'
    },
    overview: 'Leveraging data analytics to inform business decisions and drive sustainable growth.',
    client: 'BrightMetrics Inc.',
    category: 'Data Analytics',
    industry: 'SaaS',
    duration: '3 Months',
    teamSize: '4 Data Specialists',
    technologies: ['Tableau', 'Google Data Studio', 'Segment', 'Amplitude', 'SQL'],
    sections: [
      {
        title: 'The Challenge',
        content: [
          'BrightMetrics Inc. was collecting vast amounts of data but struggling to turn it into actionable insights. Their data was siloed across different departments, making it difficult to get a complete picture of business performance or customer behavior.',
          'The lack of a unified data strategy was leading to missed opportunities and inefficient decision-making processes.'
        ]
      },
      {
        title: 'Our Approach',
        content: [
          'We implemented a comprehensive data analytics strategy with three key components:',
          '1. Data integration and centralization\n2. Custom dashboard development\n3. Predictive analytics implementation'
        ],
        checklist: [
          'Consolidated data from 15+ sources into a single data warehouse',
          'Created department-specific dashboards with key metrics',
          'Developed predictive models for customer churn and lifetime value',
          'Established data governance and quality standards',
          'Trained teams on data interpretation and utilization'
        ]
      },
      {
        title: 'The Results',
        content: [
          'The data analytics transformation delivered significant business impact:',
          '• 23% reduction in customer churn through predictive modeling\n• 18% increase in customer retention\n• 65% faster time-to-insight with automated reporting\n• 80% increase in data-driven decision making'
        ],
        tips: [
          'Start with clear business questions before diving into data',
          'Focus on actionable insights, not just interesting data points',
          'Make data accessible to all relevant teams',
          'Continuously refine models based on new data and feedback'
        ]
      }
    ],
    keyTakeaways: [
      'Data-driven companies are 23x more likely to acquire customers',
      'Organizations using data analytics see 8% higher profitability',
      'Businesses that leverage data are 3x more likely to improve decision-making'
    ],
    relatedArticles: [
      { title: 'Building a Data-Driven Culture', link: '/data-driven-culture' },
      { title: 'Predictive Analytics for Business Growth', link: '/predictive-analytics' }
    ]
  }
};

const CaseStudyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const caseStudy = id ? caseStudyData[id] : null;

  if (!caseStudy) {
    return (
      <div className={styles.notFound}>
        <h2>Case Study Not Found</h2>
        <p>The requested case study could not be found.</p>
        <button onClick={() => navigate('/case-studies')} className={styles.backButton}>
          <FiArrowLeft /> Back to Case Studies
        </button>
      </div>
    );
  }

  // Get portfolio images from the Portfolio page data
  const portfolioImages = [
    { id: 1, image: '/port1.png', title: 'Nova Financial', link: '/portfolio' },
    { id: 2, image: '/port2.png', title: 'Pulse Fitness', link: '/portfolio' },
    { id: 3, image: '/port3.png', title: 'EcoHarvest', link: '/portfolio' },
    { id: 4, image: '/port4.png', title: 'Wanderlust Travel', link: '/portfolio' }
  ];

  // Get latest case studies for the articles section
  const latestArticles = Object.values(caseStudyData)
    .filter(study => study.id !== id) // Exclude current case study
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()) // Sort by date
    .slice(0, 3) // Get 3 most recent
    .map(study => ({
      title: study.title,
      date: study.publishedDate,
      link: `/case-studies/${study.id}`
    }));

  // Social media links with icons and platform data
  const socialLinks = [
    { icon: FaFacebookF, url: 'https://www.facebook.com/profile.php?id=61575929790796', label: 'Facebook', platform: 'facebook' },
    { icon: FaTwitter, url: 'https://x.com/LynkzAgency', label: 'Twitter', platform: 'twitter' },
    { icon: FaLinkedinIn, url: 'https://www.linkedin.com/company/lynkz-agency/', label: 'LinkedIn', platform: 'linkedin' },
    { icon: FaInstagram, url: 'https://www.instagram.com/lynkz_agency/', label: 'Instagram', platform: 'instagram' },
  ];

  return (
    <motion.div 
      className={styles.caseStudyDetail}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.caseStudyContainer}>
        <main className={styles.mainContent}>
          <button onClick={() => navigate(-1)} className={styles.backButton}>
            <FiArrowLeft /> Back to Case Studies
          </button>

          <header className={styles.header}>
            <span className={styles.category}>{caseStudy.category}</span>
            <h1 className={styles.title}>{caseStudy.title}</h1>
            <div className={styles.meta}>
              <span className={styles.date}><FiClock /> {caseStudy.readTime}</span>
              <span className={styles.publishedDate}>{caseStudy.publishedDate}</span>
            </div>
          </header>

      <div className={styles.overview}>
        <h2>Overview</h2>
        <p>{caseStudy.overview}</p>
        
        <div className={styles.stats}>
          {caseStudy.industry && (
            <div className={styles.stat}>
              <h3>Industry</h3>
              <p>{caseStudy.industry}</p>
            </div>
          )}
          {caseStudy.duration && (
            <div className={styles.stat}>
              <h3>Duration</h3>
              <p>{caseStudy.duration}</p>
            </div>
          )}
          {caseStudy.teamSize && (
            <div className={styles.stat}>
              <h3>Team</h3>
              <p>{caseStudy.teamSize}</p>
            </div>
          )}
        </div>
      </div>

      <div className={styles.challenge}>
        <h2>The Challenge</h2>
        <p>{caseStudy.challenge}</p>
      </div>

      <div className={styles.solution}>
        <h2>Our Solution</h2>
        <p>{caseStudy.solution}</p>
      </div>

      {caseStudy.metrics && caseStudy.metrics.length > 0 && (
        <div className={styles.metrics}>
          <h2>Key Results</h2>
          <div className={styles.metricsGrid}>
            {caseStudy.metrics.map((metric, index) => (
              <div key={index} className={styles.metricCard}>
                <div className={styles.metricIcon}>{metric.icon}</div>
                <h3>{metric.label}</h3>
                <p className={styles.metricValue}>{metric.value}</p>
                {metric.description && (
                  <p className={styles.metricDescription}>{metric.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {caseStudy.testimonial && (
        <div className={styles.testimonial}>
          <blockquote>
            "{caseStudy.testimonial.text}"
          </blockquote>
          <div className={styles.testimonialAuthor}>
            <strong>{caseStudy.testimonial.author}</strong>
            <span>{caseStudy.testimonial.role}, {caseStudy.testimonial.company}</span>
          </div>
        </div>
      )}

      {caseStudy.sections && caseStudy.sections.map((section, index) => (
        <div key={index} className={styles.section}>
          <h2>{section.title}</h2>
          {section.content.map((paragraph, pIndex) => (
            <p key={pIndex}>{paragraph}</p>
          ))}
          
          {section.checklist && section.checklist.length > 0 && (
            <div className={styles.checklist}>
              <h4>Key Actions:</h4>
              <ul>
                {section.checklist.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <FiCheckCircle className={styles.checkIcon} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {section.tips && section.tips.length > 0 && (
            <div className={styles.tips}>
              <h4>Pro Tips:</h4>
              <ul>
                {section.tips.map((tip, tipIndex) => (
                  <li key={tipIndex}>{tip}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}

      {caseStudy.keyTakeaways && caseStudy.keyTakeaways.length > 0 && (
        <div className={styles.keyTakeaways}>
          <h2 style={{marginLeft:'2.5%'}}>Key Takeaways</h2>
          <ul>
            {caseStudy.keyTakeaways.map((takeaway, index) => (
              <li key={index}>{takeaway}</li>
            ))}
          </ul>
        </div>
      )}

      {caseStudy.relatedArticles && caseStudy.relatedArticles.length > 0 && (
        <div className={styles.relatedArticles}>
          <h2>Related Articles</h2>
          <ul>
            {caseStudy.relatedArticles.map((article, index) => (
              <li key={index}>
                <a href={article.link} className={styles.articleLink}>
                  {article.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
        </main>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          {/* Portfolio Gallery */}
          <div className={styles.sidebarSection}>
            <h3 className={styles.sectionTitle}>
              <FiImage /> Portfolio
            </h3>
            <div className={styles.portfolioGallery}>
              {portfolioImages.map((item) => (
                <a 
                  key={item.id} 
                  href={item.link} 
                  className={styles.portfolioImage}
                  title={item.title}
                >
                  <img src={item.image} alt={item.title} />
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className={styles.sidebarSection}>
            <h3 className={styles.sectionTitle}>
              <FiShare2 /> Follow Us
            </h3>
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={index} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label={social.label}
                    title={social.label}
                    data-platform={social.platform}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Latest Articles */}
          <div className={styles.sidebarSection}>
            <h3 className={styles.sectionTitle}>
              <FiBookOpen /> Latest Articles
            </h3>
            <ul className={styles.latestArticles}>
              {latestArticles.map((article, index) => (
                <li key={index} className={styles.articleItem}>
                  <Link to={article.link} className={styles.articleLink}>
                    {article.title}
                    <span className={styles.articleDate}>{article.date}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </motion.div>
  );
};

export default CaseStudyDetail;
