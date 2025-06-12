import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import styles from './CaseStudyDetail.module.css';

// Educational content data
const educationalContent = {
  'google-business-profile': {
    id: 'google-business-profile',
    title: 'How Google Business Profile Can Transform Your Online Presence',
    publishedDate: 'June 2023',
    readTime: '8 min read',
    overview: 'Optimizing your Google Business Profile to boost local visibility, drive traffic, and improve brand credibility.',
    client: 'Local Biz Pro',
    category: 'SEO & Local Marketing',
    results: [
      '300% increase in local search impressions',
      '50% rise in customer calls and visits',
      'Improved Google Maps ranking to top 3'
    ],
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
    client: 'Various Clients',
    category: 'Digital Marketing',
    results: [
      'Identified 20-30% improvement opportunities',
      'Fixed critical technical issues affecting conversions',
      'Established baseline metrics for future optimization'
    ],
    sections: [
      {
        title: 'Why Audits Are Essential',
        content: [
          'A comprehensive digital marketing audit provides a clear picture of what\'s working and what needs improvement in your online presence. Many businesses operate with undetected technical issues that negatively impact their performance.',
          'Example: An e-commerce client discovered their mobile checkout process had a 68% drop-off rate due to a form validation error that went unnoticed for months.'
        ]
      },
      {
        title: 'Key Areas to Audit',
        content: [
          'Our audit process examines all critical aspects of your digital presence:',
          '1. Website performance and technical health\n2. SEO and content effectiveness\n3. Social media presence and engagement\n4. Paid advertising performance\n5. Conversion rate optimization'
        ],
        checklist: [
          'Page load speed (aim for under 3 seconds)',
          'Mobile responsiveness testing',
          'Broken links and 404 errors',
          'SEO elements optimization',
          'Conversion funnel analysis'
        ]
      },
      {
        title: 'Implementing Audit Findings',
        content: [
          'After identifying the key issues, we prioritize them based on potential impact and ease of implementation. Our clients typically see immediate improvements by addressing the critical issues first.',
          'Case Study: A B2B service provider increased their lead conversion rate by 45% after implementing the top 3 recommendations from our audit.'
        ],
        tips: [
          'Start with technical SEO fixes',
          'Address high-impact, low-effort items first',
          'Set up proper tracking before making changes',
          'Document all changes for future reference'
        ]
      }
    ],
    keyTakeaways: [
      'Regular audits can reveal 20-30% improvement opportunities',
      'Most businesses have at least 3 critical technical issues affecting conversions',
      'Audits should be conducted quarterly for best results'
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
    overview: 'Ad creative testing and audience segmentation reduced ad spend while improving campaign ROI.',
    client: 'GreenSpark Retail',
    category: 'Social Ads',
    results: [
      'Reduced CPR by 60% in 2 weeks',
      'Doubled CTR with creative refresh',
      'Improved ROI from 2.1x to 4.7x'
    ],
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
    overview: 'We A/B tested CTA placement and copy across web and ads to maximize engagement and conversions.',
    client: 'EngageNow Media',
    category: 'Conversion Rate Optimization',
    results: [
      'CTA click-through rate increased by 88%',
      'Landing page conversions up 47%',
      'Email CTR improved by 39%'
    ],
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
    overview: 'Using data dashboards and insights to guide decision-making, improve marketing ROI, and optimize customer experience.',
    client: 'BrightMetrics Inc.',
    category: 'Data Analytics',
    results: [
      'Visualized performance across 10 departments',
      'Cut churn by 23% through data-led interventions',
      'Boosted customer retention by 18%'
    ],
    sections: [
      {
        title: 'The Challenge',
        content: [
          'BrightMetrics Inc. was collecting vast amounts of data but struggling to derive actionable insights. Different departments were using disparate systems, making it difficult to get a unified view of performance.',
          'The challenge was to implement a comprehensive data analytics solution that would provide clear insights and drive strategic decision-making.'
        ]
      },
      {
        title: 'Our Approach',
        content: [
          'We developed a custom data analytics framework with the following components:',
          '1. Data integration and centralization\n2. Custom dashboard development\n3. Predictive analytics implementation\n4. Team training and enablement'
        ],
        checklist: [
          'Consolidated data from 15+ sources into a single data warehouse',
          'Created department-specific dashboards with KPIs',
          'Implemented predictive churn modeling',
          'Developed automated reporting system',
          'Conducted training sessions for all teams'
        ]
      },
      {
        title: 'The Results',
        content: [
          'The data analytics implementation transformed how BrightMetrics made decisions:',
          '• 23% reduction in customer churn\n• 18% improvement in customer retention\n• 30% faster decision-making process\n• 40% reduction in time spent on manual reporting'
        ],
        tips: [
          'Start with clear business questions before diving into data',
          'Ensure data quality before analysis',
          'Create self-serve dashboards for different teams',
          'Regularly review and update your analytics framework'
        ]
      }
    ],
    keyTakeaways: [
      'Data-driven decisions lead to better business outcomes',
      'Visual dashboards improve data accessibility across teams',
      'Predictive analytics can help anticipate and prevent churn'
    ],
    relatedArticles: [
      { title: 'Building a Data-Driven Culture', link: '/data-driven-culture' },
      { title: 'Advanced Data Visualization Techniques', link: '/data-visualization' }
    ]
  }
};

const EducationalArticle: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const article = educationalContent[id as keyof typeof educationalContent];

  if (!article) {
    return (
      <div className={styles.notFound}>
        <h2>Article Not Found</h2>
        <button onClick={() => navigate('/resources')} className={styles.backButton}>
          <FiArrowLeft /> Back to Resources
        </button>
      </div>
    );
  }

  return (
    <div className={styles.educationalArticle}>
      {/* Hero Section */}
      <section className={styles.articleHeader}>
        <div className={styles.container}>
          <button onClick={() => navigate('/resources')} className={styles.backButton}>
            <FiArrowLeft /> Back to Resources
          </button>
          
          <div className={styles.headerContent}>
            <h1 className={styles.title}>{article.title}</h1>
            <div className={styles.meta}>
              <span className={styles.date}>{article.publishedDate}</span>
              <span className={styles.readTime}>{article.readTime}</span>
            </div>
            <p className={styles.overview}>{article.overview}</p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className={styles.articleBody}>
        <div className={styles.container}>
          {article.sections.map((section, index) => (
            <div key={index} className={styles.section}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              
              {section.content.map((paragraph, pIndex) => (
                <p key={pIndex} className={styles.paragraph}>{paragraph}</p>
              ))}
              
              {section.tips && (
                <div className={styles.tipsBox}>
                  <h3 className={styles.tipsTitle}>Actionable Tips:</h3>
                  <ul className={styles.tipsList}>
                    {section.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className={styles.tipItem}>
                        <span className={styles.tipIcon}>✓</span> {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {section.checklist && (
                <div className={styles.checklistBox}>
                  <h3 className={styles.checklistTitle}>Audit Checklist:</h3>
                  <ul className={styles.checklist}>
                    {section.checklist.map((item, itemIndex) => (
                      <li key={itemIndex} className={styles.checklistItem}>
                        <input type="checkbox" id={`item-${itemIndex}`} />
                        <label htmlFor={`item-${itemIndex}`}>{item}</label>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Key Takeaways */}
      {article.keyTakeaways && (
        <section className={styles.keyTakeaways}>
          <div className={styles.container}>
            <h2 className={styles.takeawaysTitle}>Key Takeaways</h2>
            <ul className={styles.takeawaysList}>
              {article.keyTakeaways.map((takeaway, index) => (
                <li key={index} className={styles.takeawayItem}>
                  <div className={styles.takeawayIcon}>★</div>
                  <div className={styles.takeawayText}>{takeaway}</div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Related Articles */}
      {article.relatedArticles && (
        <section className={styles.relatedArticles}>
          <div className={styles.container}>
            <h2 className={styles.relatedTitle}>Continue Learning</h2>
            <div className={styles.relatedGrid}>
              {article.relatedArticles.map((related, index) => (
                <div key={index} className={styles.relatedCard} onClick={() => navigate(related.link)}>
                  <h3 className={styles.relatedCardTitle}>{related.title}</h3>
                  <div className={styles.relatedArrow}>→</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className={styles.articleCTA}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Want to implement these strategies?</h2>
          <p className={styles.ctaSubtitle}>Get professional guidance to maximize your results</p>
          <button 
            className={`${styles.ctaButton} ${styles.primary}`}
            onClick={() => navigate('/contact')}
          >
            Schedule Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default EducationalArticle;