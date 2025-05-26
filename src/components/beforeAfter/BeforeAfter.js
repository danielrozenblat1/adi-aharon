import React, { useState, useRef, useEffect } from 'react';
import styles from './BeforeAfter.module.css';

const BeforeAfterSlider = ({ beforeImage, afterImage, beforeLabel, afterLabel }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  // Handle mouse down event
  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  // Handle mouse move event
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX);
  };

  // Handle mouse up event
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Handle touch start event
  const handleTouchStart = (e) => {
    setIsDragging(true);
  };

  // Handle touch move event
  const handleTouchMove = (e) => {
    if (!isDragging) return;
    updateSliderPosition(e.touches[0].clientX);
  };

  // Handle touch end event
  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Update slider position
  const updateSliderPosition = (clientX) => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const containerWidth = container.offsetWidth;
    
    // Calculate position as percentage
    let position = (x / containerWidth) * 100;
    
    // Limit position to 0-100%
    position = Math.max(0, Math.min(100, position));
    
    setSliderPosition(position);
  };

  // Add event listeners
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);

  return (
    <div 
      className={styles.container}
      ref={containerRef}
    >
      <div className={styles.beforeContainer} style={{ width: `${sliderPosition}%` }}>
        {beforeLabel && <div className={styles.beforeLabel}>{beforeLabel}</div>}
        <img src={beforeImage} alt="Before" className={styles.beforeImage} />
      </div>
      
      <div className={styles.afterContainer}>
        {afterLabel && <div className={styles.afterLabel}>{afterLabel}</div>}
        <img src={afterImage} alt="After" className={styles.afterImage} />
      </div>
      
      <div 
        className={styles.sliderHandle}
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className={styles.sliderHandleArrow}>
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            <path d="M15.41 16.59L10.83 12 15.41 7.41 14 6l-6 6 6 6 1.41-1.41z" />
          </svg>
        </div>
      </div>
      
      <div className={styles.sliderLine} style={{ left: `${sliderPosition}%` }} />
    </div>
  );
};

export default BeforeAfterSlider;

