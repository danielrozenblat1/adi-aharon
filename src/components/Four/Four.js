import React, { useRef, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import styles from './Four.module.css';
import FormScreen from '../../formScreen/FormScreen';

export default function Four() {
  const containerRef = useRef(null);
  const rightPanelRef = useRef(null);
  const leftPanelRef = useRef(null);
  const bottomRightPanelRef = useRef(null);

  useEffect(() => {
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
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.sectionWrapper}>
        
        {/* חלון הזכוכית בצד ימין */}
        <div 
          ref={rightPanelRef}
          className={`${styles.glassPanel} ${styles.rightSide}`}
        >
          <div className={styles.content}>
            <h2>התמדה וכוח רצון</h2>
            <p>
              ההצלחה בתחום הביוטי דורשת עבודה והתמדה יומיומית. 
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
            <p> בסוף הכל מסתכם בהשקעה שלך בעצמך -  זה יכול להיות מרחק, זמן או כסף, 
ככל שתתמקצעי יותר ותשקיעי בטכניקה שלך את תמשכי אלייך יותר לקוחות ותשמרי את הקיימות!
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
     עם כמה שקל לצייר את זה כחלום, הצלחה לא באה ביום וגם לא ביומיים - חשוב לי שתביני שיהיו ימים יותר מורכבים והדברים לא תמיד ילכו בדרך שלך, אבל ככל שתהי סבלנית וממוקדת במטרה - הכל יגיע והחלום יתגשם!
            </p>
          </div>
        </div>
      </div>
      <FormScreen/>
    </div>
  );
}