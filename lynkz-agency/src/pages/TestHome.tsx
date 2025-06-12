import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const TestHome = () => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#1a1a4e',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '800px' }}>
        <h1 style={{ 
          fontSize: '3rem', 
          marginBottom: '1.5rem',
          color: 'white'
        }}>
          Test Hero Section
        </h1>
        <p style={{ 
          fontSize: '1.25rem', 
          marginBottom: '2rem',
          opacity: 0.9
        }}>
          This is a test to check if the hero section is visible.
        </p>
        <Link 
          to="/contact" 
          style={{
            backgroundColor: '#00ff88',
            color: '#1a1a4e',
            padding: '0.75rem 2rem',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: '600',
            display: 'inline-flex',
            alignItems: 'center',
            transition: 'all 0.3s ease'
          }}
        >
          Test Button <FiArrowRight style={{ marginLeft: '0.5rem' }} />
        </Link>
      </div>
    </div>
  );
};

export default TestHome;
