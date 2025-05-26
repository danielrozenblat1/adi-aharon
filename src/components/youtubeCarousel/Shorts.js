import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Shorts.module.css';

const LazyYoutubeEmbed = ({ videoId, index }) => {
  const ref = useRef(null);
  const [showIframe, setShowIframe] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShowIframe(true);
        observer.disconnect();
      }
    });
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.videoWrapper} ref={ref}>
      {showIframe && (
        <iframe
          className={styles.videoFrame}
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          title={`YouTube video ${index + 1}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      )}
    </div>
  );
};

const YoutubeCarousel = ({ videoIds }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);

  const handlePrevClick = () => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const videoWrapper = container.querySelector(`.${styles.videoWrapper}`);
      
      if (!videoWrapper) return;
      
      // מחשבים את הרוחב של כל פריט כולל הפרווה והמרווח
      const itemWidth = videoWrapper.offsetWidth + 16; // 8px gap מכל צד
      
      container.scrollBy({ 
        left: -itemWidth, 
        behavior: 'smooth' 
      });
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const videoWrapper = container.querySelector(`.${styles.videoWrapper}`);
      
      if (!videoWrapper) return;
      
      // מחשבים את הרוחב של כל פריט כולל הפרווה והמרווח
      const itemWidth = videoWrapper.offsetWidth + 16; // 8px gap מכל צד
      
      container.scrollBy({ 
        left: itemWidth, 
        behavior: 'smooth' 
      });
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const distance = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - distance;
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const distance = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - distance;
  };

  // הסרתי את האפקט של הגלילה האינסופית כי הוא עלול להפריע
  // אם אתה רוצה אותה בחזרה, תוכל להוסיף אותה מאוחר יותר

  return (
    <div className={styles.container}>
      <div
        ref={carouselRef}
        className={styles.carousel}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleTouchMove}
      >
        {videoIds.map((videoId, index) => (
          <LazyYoutubeEmbed key={`${videoId}-${index}`} videoId={videoId} index={index} />
        ))}
      </div>

      <button
        onClick={handlePrevClick}
        className={`${styles.navButton} ${styles.prevButton}`}
        aria-label="Previous video"
        type="button"
      >
        <ChevronLeft className={styles.navIcon} />
      </button>

      <button
        onClick={handleNextClick}
        className={`${styles.navButton} ${styles.nextButton}`}
        aria-label="Next video"
        type="button"
      >
        <ChevronRight className={styles.navIcon} />
      </button>
    </div>
  );
};

export default YoutubeCarousel;