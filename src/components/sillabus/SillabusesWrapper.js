import React, { useState } from 'react';
import { GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';
import Syllabus from './Sillabus';
import Hishtalmut from './Hishtalmut';
import styles from './SillabusesWrapper.module.css';

const CourseDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.drawerContainer}>
      <div className={styles.drawerHeader}>
        <div className={styles.headerContent}>
          <div className={styles.iconWrapper}>
            <GraduationCap className={styles.headerIcon} strokeWidth={1}/>
          </div>
          <div className={styles.headerText}>
            <h2 className={styles.drawerTitle}>הקורסים וההשתלמויות שלי</h2>
            <p className={styles.drawerSubtitle}>גלי את כל המסלולים המקצועיים שאני מציעה</p>
          </div>
        </div>
        
        <button 
          className={styles.toggleButton} 
          onClick={toggleDrawer}
          aria-label={isOpen ? "סגור את המסלולים" : "פתח את המסלולים"}
        >
          <span className={styles.buttonText}>
            {isOpen ? "לחצי כאן לסגירת המסלולים" : "לחצי כאן לפתיחת המסלולים"}
          </span>
          {isOpen ? (
            <ChevronUp className={styles.toggleIcon} />
          ) : (
            <ChevronDown className={styles.toggleIcon} />
          )}
        </button>
      </div>

      {isOpen && (
        <div className={styles.drawerContent}>
          <div className={styles.coursesGrid}>
            <div className={styles.courseWrapper}>
              <Syllabus />
            </div>
            <div className={styles.courseWrapper}>
              <Hishtalmut />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDrawer;