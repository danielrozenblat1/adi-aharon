import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from "react-scroll";
import styles from './NavBarNew.module.css';
import logo from "../../images/עדי אהרון לוגו.png"
import { FaTimes, FaInstagram, FaWhatsapp } from 'react-icons/fa';

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

  // הוסף כאן את הקישורים לרשתות החברתיות שלך
  const socialLinks = {
    instagram: "https://www.instagram.com/adika.aharon/", // החלף בקישור האמיתי שלך
    whatsapp: "https://wa.me/972527482778?text=היי%20עדי,%20אשמח%20לשמוע%20עוד%20על%20הקורסים%20שלך..." // קישור לווצאפ עם הודעה
  };

  return (
    <nav className={`
      ${styles.navbar} 
      ${isVisible ? styles.visible : styles.hidden}
    `}>
      <div className={styles.navbarInner}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
        
        {/* אייקוני רשתות חברתיות */}
        <div className={styles.socialIcons}>
          <a 
            href={socialLinks.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="עקבו אחרינו באינסטגרם"
          >
            <FaInstagram />
          </a>
          <a 
            href={socialLinks.whatsapp} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="צור קשר דרך ווצאפ"
          >
            <FaWhatsapp />
          </a>
        </div>
        
        <ScrollLink
          to="טופס"
          smooth={true}
          offset={-150}
          duration={500}
          className={styles.menuButton}
        >
          <div className={styles.buttonContent}>
            <span className={styles.buttonText}>עדי, תחזרי אלי!</span>
            <span className={styles.buttonTextHover}>עדי, תחזרי אלי!</span>
          </div>
        </ScrollLink>
      </div>

      {(isMenuOpen || isClosing) && (
        <div className={`${styles.mobileMenu} ${isClosing ? styles.closing : ''}`}>
          <div className={styles.mobileMenuHeader}>
            <div className={styles.closeButton} onClick={toggleMenu}>
              <FaTimes />
            </div>
            <div className={styles.mobileMenuLogo}>
              <img src={logo} alt="עדי אהרון לוגו"/>
            </div>
          </div>
          <div className={styles.mobileMenuContent}>
            <div className={styles.mobileLogo}>
              <img src={logo} alt="Logo" />
            </div>
            {/* אייקוני רשתות חברתיות במובייל */}
            <div className={styles.mobileSocialIcons}>
              <a 
                href={socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.mobileSocialIcon}
              >
                <FaInstagram />
                <span>Instagram</span>
              </a>
              <a 
                href={socialLinks.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.mobileSocialIcon}
              >
                <FaWhatsapp />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBarNew;