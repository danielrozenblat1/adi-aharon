import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from "react-scroll";
import styles from './NavBarNew.module.css';

import { FaTimes } from 'react-icons/fa';

const NavBarNew = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar only after scrolling 200px
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false);
      }, 500);
    } else {
      setIsMenuOpen(true);
    }
  };

  return (
    <nav className={`
      ${styles.navbar} 
      ${isVisible ? styles.visible : styles.hidden}
    `}>
      <div className={styles.navbarInner}>
   
        
        <ScrollLink
          to="טופס"
          smooth={true}
          offset={-150}
          duration={500}
          className={styles.menuButton}
        >
          <div className={styles.buttonContent}>
            <span className={styles.buttonText}>עדי, אני בפנים!</span>
            <span className={styles.buttonTextHover}>עדי, אני בפנים!</span>
          </div>
        </ScrollLink>
      </div>

      {(isMenuOpen || isClosing) && (
        <div className={`${styles.mobileMenu} ${isClosing ? styles.closing : ''}`}>
          <div className={styles.mobileMenuHeader}>
            <div className={styles.closeButton} onClick={toggleMenu}>
              <FaTimes />
            </div>
    
          </div>
          <div className={styles.mobileMenuContent}>
     
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBarNew;