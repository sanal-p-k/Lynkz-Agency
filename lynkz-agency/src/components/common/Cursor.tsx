import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Cursor.css';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    // Add hover state for interactive elements
    const hoverElements = document.querySelectorAll('a, button, [data-cursor-hover]');
    const addHover = (el: Element) => {
      el.addEventListener('mouseenter', () => setIsHovered(true));
      el.addEventListener('mouseleave', () => setIsHovered(false));
    };

    hoverElements.forEach(addHover);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseout', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseout', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', () => setIsHovered(true));
        el.removeEventListener('mouseleave', () => setIsHovered(false));
      });
    };
  }, []);

  const cursorVariants = {
    default: {
      x: position.x - 4,
      y: position.y - 4,
      scale: isClicked ? 0.7 : 1,
      opacity: isVisible ? 1 : 0,
      transition: {
        type: 'spring',
        mass: 0.1,
        damping: 20,
        stiffness: 300,
      },
    },
    hover: {
      x: position.x - 20,
      y: position.y - 20,
      scale: isClicked ? 0.7 : 1.5,
      opacity: isVisible ? 0.5 : 0,
    },
  };

  const dotVariants = {
    default: {
      x: position.x - 4,
      y: position.y - 4,
      scale: isClicked ? 0.7 : 1,
      opacity: isVisible ? 1 : 0,
      transition: {
        type: 'spring',
        mass: 0.1,
        damping: 20,
        stiffness: 500,
      },
    },
    hover: {
      x: position.x - 20,
      y: position.y - 20,
      scale: isClicked ? 0.7 : 2.5,
      backgroundColor: 'transparent',
      border: '2px solid #b2ff59',
    },
  };

  return (
    <>
      <motion.div
        className="cursor-dot"
        variants={dotVariants}
        animate={isHovered ? 'hover' : 'default'}
      />
      <motion.div
        className="cursor-outline"
        variants={cursorVariants}
        animate={isHovered ? 'hover' : 'default'}
      />
    </>
  );
};

export default Cursor;
