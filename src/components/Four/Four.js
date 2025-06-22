import React, { useRef, useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import styles from './Four.module.css';
import FormScreen from '../../formScreen/FormScreen';

export default function Four() {
  const containerRef = useRef(null);
  const rightPanelRef = useRef(null);
  const leftPanelRef = useRef(null);
  const bottomRightPanelRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // בדיקה אם זה מסך קטן
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 649);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // הגדרת ScrollReveal עם אפקטים שונים לכל פאנל
    if (rightPanelRef.current) {
      ScrollReveal().reveal(rightPanelRef.current, {
        duration: 1000,
        delay: 200,
        distance: '50px',
        origin: 'right',
        opacity: 0,
        scale: 0.9,
        easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        reset: false, // האנימציה תקרה רק פעם אחת
        viewFactor: 0.3
      });
    }

    if (leftPanelRef.current) {
      ScrollReveal().reveal(leftPanelRef.current, {
        duration: 1000,
        delay: 400,
        distance: '50px',
        origin: 'left',
        opacity: 0,
        scale: 0.9,
        easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        reset: false,
        viewFactor: 0.3
      });
    }

    if (bottomRightPanelRef.current) {
      ScrollReveal().reveal(bottomRightPanelRef.current, {
        duration: 1000,
        delay: 600,
        distance: '50px',
        origin: 'bottom',
        opacity: 0,
        scale: 0.9,
        easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        reset: false,
        viewFactor: 0.3
      });
    }

    // נקיון ScrollReveal כשהקומפוננטה נמחקת
    return () => {
      ScrollReveal().destroy();
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={`${styles.sectionWrapper} ${isMobile ? styles.mobileLayout : ''}`}>
        
        {/* חלון הזכוכית בצד ימין */}
        <div 
          ref={rightPanelRef}
          className={`${styles.glassPanel} ${styles.rightSide}`}
        >
          <div className={styles.content}>
            <h2>התמדה וכוח רצון</h2>
            <p>
              ההצלחה בתחום הציפורניים דורשת עבודה והתמדה יומיומית. 
              ברגע שתבחרי להתמיד,לתרגל ולהשקיע - תצליחי למלא את היומן ולבנות עסק משגשג ורווחי
            </p>
          </div>
        </div>
        
        {/* חלון הזכוכית בצד שמאל */}
        <div 
          ref={leftPanelRef}
          className={`${styles.glassPanel} ${styles.leftSide}`}
        >
          <div className={styles.content}>
            <h2>השקעה והתמקצעות</h2>
            <p>
              הכל מסתכם בהשקעה שלך בעצמך - זה יכול להיות מרחק, זמן או כסף, 
              ככל שתשקיעי יותר – בטכניקה, בידע, ובחומרים שאת בוחרת, ככה תמשכי יותר לקוחות שיארו איתך לאורך זמן.
            </p>
          </div>
        </div>

        {/* חלון הזכוכית החדש בצד ימין תחתון */}
        <div 
          ref={bottomRightPanelRef}
          className={`${styles.glassPanel} ${styles.bottomRightSide}`}
        >
          <div className={styles.content}>
            <h2>סבלנות</h2>
            <p>
              עם כמה שקל לצייר את זה כחלום, ההצלחה לא מגיעה ביום אחד. יהיו רגעים מאתגרים, יהיו גם ימים פחות נוצצים
              אבל מי שממוקדת במטרה ונשארת עקבית – תראה תוצאות מהר מאוד ותגשים את החלום.
            </p>
          </div>
        </div>
      </div>
      <FormScreen/>
    </div>
  );
}