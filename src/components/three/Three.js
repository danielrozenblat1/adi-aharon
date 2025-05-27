import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Environment, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { gsap } from 'gsap';
import styles from './Three.module.css';

// ייבוא המודל
import model from '../../../src/bottle_of_red_nail_polish.glb';
import FormScreen from '../../formScreen/FormScreen';

// קומפוננטה להצגת המודל
function Model({ scrollY, containerHeight, windowHeight }) {
  const modelRef = useRef();
  const { scene } = useGLTF(model);
  const prevScrollProgress = useRef(0);
  
  // עדכון האנימציה של המודל בהתאם לגלילה - עם מעברים חלקים
  useFrame(() => {
    if (!modelRef.current) return;
    
    // האטת האנימציה על ידי חלוקת ההתקדמות בפקטור גבוה יותר
    const slowFactor = 0.4; // פקטור האטה
    
    // חישוב ערך הגלילה היחסי
    const scrollProgress = Math.min(scrollY * slowFactor / Math.max(windowHeight, 100), 1);
    
    // בדיקה אם השינוי משמעותי מספיק להפעלת אנימציה חלקה
    if (Math.abs(prevScrollProgress.current - scrollProgress) > 0.005) {
      // סיבוב איטי ואלגנטי של המודל עם אנימציה חלקה
      gsap.to(modelRef.current.rotation, {
        y: scrollProgress * Math.PI * 3,
        duration: 0.8,
        ease: "power2.out"
      });
      
      // תנועה אנכית משמעותית יותר - ירידה גדולה יותר
      gsap.to(modelRef.current.position, {
        y: -scrollProgress * 5,
        duration: 0.8,
        ease: "power2.out"
      });
      
      // תנועה חלקה ועדינה קדימה ואחורה
      gsap.to(modelRef.current.position, {
        z: Math.sin(scrollProgress * Math.PI * 2) * 1.5,
        duration: 0.8,
        ease: "power2.out"
      });
      
      // סיבוב X עדין ואיטי
      gsap.to(modelRef.current.rotation, {
        x: Math.sin(scrollProgress * Math.PI) * 0.3,
        duration: 0.8,
        ease: "power2.out"
      });
      
      // סיבוב Z עדין ואיטי
      gsap.to(modelRef.current.rotation, {
        z: Math.cos(scrollProgress * Math.PI) * 0.2,
        duration: 0.8,
        ease: "power2.out"
      });
      
      // שינוי גודל איטי ואלגנטי
      const scaleFactor = 15 + Math.sin(scrollProgress * Math.PI * 1.5) * 4;
      gsap.to(modelRef.current.scale, {
        x: scaleFactor,
        y: scaleFactor,
        z: scaleFactor,
        duration: 0.8,
        ease: "power2.out"
      });
      
      // עדכון הערך הקודם
      prevScrollProgress.current = scrollProgress;
    }
  });

  return (
    <primitive 
      ref={modelRef} 
      object={scene} 
      scale={15} 
      position={[0, 0, 0]}
      className={styles.model} 
    />
  );
}

// קומפוננטה לסצנת Three.js עם תמיכה בגלילה
function Scene({ scrollY, containerHeight }) {
  const { size } = useThree();
  
  return (
    <>
      <ambientLight intensity={1.2} />
      <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={1.8} />
      <spotLight position={[-10, -10, -5]} angle={0.3} penumbra={1} intensity={1.3} color="#f9c4d2" />
      <Model 
        scrollY={scrollY} 
        containerHeight={containerHeight} 
        windowHeight={window.innerHeight} 
      />
      <Environment preset="night" />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate={false}
        enableDamping
        dampingFactor={0.1}
      />
    </>
  );
}

export default function ThreeViewer() {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const [canvasKey, setCanvasKey] = useState(0);
  const [rightPanelVisible, setRightPanelVisible] = useState(false);
  const [leftPanelVisible, setLeftPanelVisible] = useState(false);
  const [bottomRightPanelVisible, setBottomRightPanelVisible] = useState(false);

  // מעקב אחרי אירועי גלילה וחישוב גובה המיכל
  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.scrollHeight);
    }

    const handleResize = () => {
      if (containerRef.current) {
        setContainerHeight(containerRef.current.scrollHeight);
        setCanvasKey(prev => prev + 1);
      }
    };
    
    const handleScroll = () => {
      // חישוב ערך הגלילה יחסית למיקום של הקומפוננטה
      const containerTop = containerRef.current.offsetTop;
      // הפעלת האנימציה כשהמשתמש נמצא בתוך הקומפוננטה
      const triggerOffset = 200;
      const relativeScrollY = Math.max(window.scrollY - (containerTop - triggerOffset), 0);
      
      setScrollY(relativeScrollY);
      
      // חישוב ואנימציה של החלוניות - אחת אחרי השנייה
      if (containerRef.current) {
        const scrollTrigger = window.innerHeight * 0.5;
        const scrollProgress = relativeScrollY / scrollTrigger;
        
        // החלונית הימנית מופיעה קודם ונשארת
        if (scrollProgress > 0.2) {
          setRightPanelVisible(true);
        }
        
        // החלונית השמאלית מופיעה בהמשך ונשארת
        if (scrollProgress > 0.5) {
          setLeftPanelVisible(true);
        }
        
        // החלונית הימנית התחתונה מופיעה אחרונה
        if (scrollProgress > 0.8) {
          setBottomRightPanelVisible(true);
        }
        
        // אם חוזרים למעלה (גלילה לאחור לגמרי) - מסתירים את כל החלוניות
        if (scrollProgress < 0.1) {
          setRightPanelVisible(false);
          setLeftPanelVisible(false);
          setBottomRightPanelVisible(false);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // גובה הקומפוננטה - הגדלנו כדי לתת יותר מקום לחלון השלישי
    if (containerRef.current) {
      containerRef.current.style.height = '150vh';
    }
    
    // קריאה ראשונית לחישוב הגלילה
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      {/* תוחם את המודל והטקסט להיות בתוך הקומפוננטה בלבד */}
      <div className={styles.sectionWrapper}>
        {/* מיכל המודל התלת מימדי */}
        <div className={styles.modelContainer}>
          <Canvas key={canvasKey} camera={{ position: [0, 0, 8], fov: 40 }}>
            <Scene scrollY={scrollY} containerHeight={containerHeight} />
          </Canvas>
        </div>
        
        {/* חלון הזכוכית בצד ימין - גבוה יותר */}
        <div 
          className={`${styles.glassPanel} ${styles.rightSide} ${!rightPanelVisible ? styles.hidden : ''}`}
          style={{ opacity: rightPanelVisible ? 1 : 0 }}
        >
          <div className={styles.content}>
            <h2>התמדה וכוח רצון</h2>
            <p>
              ההצלחה בתחום הביוטי דורשת עבודה והתמדה יומיומית. 
              אין קסמים בדרך להצלחה - רק נשים שמוכנות להופיע יום אחרי יום, לתרגל ולהשקיע, 
              הן אלה שבסוף ימלאו את היומן ויבנו עסק משגשג.
            </p>
          </div>
        </div>
        
        {/* חלון הזכוכית בצד שמאל - נמוך יותר */}
        <div 
          className={`${styles.glassPanel} ${styles.leftSide} ${!leftPanelVisible ? styles.hidden : ''}`}
          style={{ opacity: leftPanelVisible ? 1 : 0 }}
        >
          <div className={styles.content}>
            <h2>השקעה והתמקצעות</h2>
            <p> זה יכול להיות מרחק, זמן או כסף אבל בסוף הכל מסתכם להשקעה בעצמך!. 
ככל שתתמקצעי יותר ותשקיעי בטכניקה שלך את תמשכי אלייך יותר לקוחות ותשמרי את הקיימות!
            </p>
          </div>
        </div>

        {/* חלון הזכוכית החדש בצד ימין תחתון */}
        <div 
          className={`${styles.glassPanel} ${styles.bottomRightSide} ${!bottomRightPanelVisible ? styles.hidden : ''}`}
          style={{ opacity: bottomRightPanelVisible ? 1 : 0 }}
        >
          <div className={styles.content}>
            <h2>סבלנות</h2>
            <p>
    עם כמה שקל לצייר את זה ככה , הצלחה לא באה ביום וגם לא ביומיים - חשוב לי שתביני שיהיו ימים יותר קשים והדברים לא תמיד ילכו כמו שאת רוצה, אבל ככל שתהי סבלנית וממוקדת במטרה - הכל יגיע!
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}