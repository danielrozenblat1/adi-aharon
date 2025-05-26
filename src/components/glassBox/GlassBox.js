import React, { useEffect, useRef } from 'react';
import { Player } from '@lordicon/react';
import ScrollReveal from 'scrollreveal';
import styles from './GlassBox.module.css';

const GlassEffectCard = ({ 
  title,
  description,
  icon,
}) => {
  const playerRef = useRef(null);
    
  useEffect(() => {
    playerRef?.current?.playFromBeginning();
  }, []);
    
  useEffect(() => {
    ScrollReveal().reveal(`.${styles.iconContainer}`, {
      duration: 1200,
      distance: "50px",
      origin: "right",
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 0.95,
    });
  }, []);
  
  const handleComplete = () => {
    setTimeout(() => {
      playerRef?.current?.playFromBeginning();
    }, 3000);
  }
  
  return (
    <div className={styles.card}>
      {/* Glass effect */}
      <div className={styles.glassEffect}></div>
      
      {/* Content */}
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.iconContainer}>
            <Player 
              icon={icon} 
              ref={playerRef} 
              size="100%" 
              onComplete={handleComplete}
              className={styles.icon}
            />
          </div>
          
          <h2 className={styles.title}>{title}</h2>
        </div>
        
        <p className={styles.description}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default GlassEffectCard;