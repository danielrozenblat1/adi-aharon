import React, { useState } from 'react';
import { 
  BookOpen, Heart, Sparkles, Camera, Eye, Shield, Paintbrush, Award,
  Brain, AlertTriangle, Search, Zap, Wrench, Microscope, Package,
  Lightbulb, Users, Target, Layers, Eraser, UserCheck, Star,
  CheckCircle, Repeat, Focus, Trophy, Instagram, Aperture, Plus, Minus,
  GraduationCap, Scissors, Settings, Timer, FastForward
} from 'lucide-react';
import styles from './Sillabus.module.css';

const Hishtalmut = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const sessions = [
    {
      number: 1,
      icon: <Brain className={styles.sessionIcon} />,
      title: "שיעור תיאורטי – להבין את שיטת העבודה לפני שנוגעים בידיים",
      quote: "הידע התיאורטי הוא הבסיס לכל עבודה מקצועית ומושלמת",
      content: [
        { text: "מה זה טיפסים הפוכים ולמה זאת השיטה שכבשה את התחום?", icon: <Search className={styles.contentIcon} /> },
        { text: "סוגי הטיפסים הקיימים וההבדלים בניהם והיתרונות של כל סוג", icon: <Layers className={styles.contentIcon} /> },
        { text: "איך מבדלים בין סוגי הטיפסים?", icon: <Eye className={styles.contentIcon} /> },
        { text: "התאמה נכונה של הטיפסים בהתאם למבנה הציפורן - כדי להבטיח תוצאה טבעית ויציבה", icon: <Target className={styles.contentIcon} /> },
        { text: "הכרה של סוגי החומרים איתם ניתן לבצע בניה בטיפסים הפוכים - ההבדלים בניהם וההיתרונות של כל חומר", icon: <Package className={styles.contentIcon} /> },
        { text: "הכנת הציפורן לקראת הצמדת הטיפסים - כל מה שחייב לדעת כדי למנוע התרוממויות/ התנתקויות/ אלרגיות", icon: <Shield className={styles.contentIcon} /> }
      ]
    },
    {
      number: 2,
      icon: <Wrench className={styles.sessionIcon} />,
      title: "תרגול מעשי – עבודה מלאה על מודליסטית",
      quote: "התרגול הוא שהופך את התיאוריה למקצועיות אמיתית",
      content: [
        { text: "תרגול של כל שלבי העבודה עם ליווי אישי:", icon: <UserCheck className={styles.contentIcon} /> },
        { text: "הכנת הציפורן והתאמת הטיפסים לפי מידת הציפורן", icon: <Settings className={styles.contentIcon} /> },
        { text: "אופן הנחת חומר נכון בתוך הטיפס בהתאם לסוגי החומר ולסוג מבנה הציפורן", icon: <Paintbrush className={styles.contentIcon} /> },
        { text: "הצמדה מדויקת עם מינימום שיופים, שימוש נכון במנורת הייבוש", icon: <Zap className={styles.contentIcon} /> },
        { text: "שיוף ועיצוב", icon: <Scissors className={styles.contentIcon} /> },
        { text: "תיקון מבנה – איך משיגים תוצאה אחידה ומקצועית גם כשיש שוני בין הציפורניים", icon: <Repeat className={styles.contentIcon} /> },
        { text: "הסרת שאריות חומר, גימור ודיוק", icon: <Eraser className={styles.contentIcon} /> },
        { text: "ניתוח העבודה – מה אפשר לשפר, טיפים לעבודה מהירה ונקייה", icon: <FastForward className={styles.contentIcon} /> }
      ]
    }
  ];

  const targetAudience = [
    { text: "מניקוריסטיות שכבר עובדות ורוצות ללמוד שיטה חדשנית מהירה ומבוקשת", icon: <GraduationCap className={styles.contentIcon} /> },
    { text: "מקצועיות שמחפשות פתרון שמפחית זמן עבודה ומבטיח מקסימום תוצאה", icon: <Timer className={styles.contentIcon} /> },
    { text: "מתחילות שרוצות ללמוד שיטה פשוטה יותר להתחיל איתה", icon: <Star className={styles.contentIcon} /> }
  ];

  return (
    <div className={styles.syllabusContainer}>
      <div className={styles.header}>
        <h1 className={styles.mainTitle}>קורס בניה בטיפסים הפוכים</h1>
        <h2 className={styles.subtitle}>השיטה החדשנית שמהפכת את עולם הציפורניים</h2>
        <div className={styles.courseInfo}>
          <span>2 מפגשים</span>
          <span>4 שעות כל מפגש</span>
          <span>תיאוריה + פרקטיקה מעשית</span>
        </div>
        
        <div className={styles.expandButtonContainer}>
          <button 
            className={styles.expandButton} 
            onClick={toggleExpanded}
            aria-label={isExpanded ? "הסתר מפגשים" : "הצג מפגשים"}
          >
            {isExpanded ? (
              <>
                <Minus className={styles.expandIcon} />
                <span>לחצי כדי להסתיר את תיאור המפגשים</span>
              </>
            ) : (
              <>
                <Plus className={styles.expandIcon} />
                <span>לחצי כדי לצפות בכל המפגשים</span>
              </>
            )}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className={styles.sessionsContainer}>
          {sessions.map((session) => (
            <div key={session.number} className={styles.sessionCard}>
              <div className={styles.sessionHeader}>
                <div className={styles.sessionNumber}>מפגש {session.number}</div>
                <div className={styles.iconContainer}>
                  {session.icon}
                </div>
              </div>
              
              <h3 className={styles.sessionTitle}>{session.title}</h3>
              
              <div className={styles.quoteContainer}>
                <p className={styles.sessionQuote}>"{session.quote}"</p>
              </div>
              
              <div className={styles.contentContainer}>
                {session.content.map((item, index) => (
                  <div key={index} className={styles.contentItem}>
                    <span className={styles.contentIconWrapper}>
                      {item.icon}
                    </span>
                    <span className={styles.contentText}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          {/* קארד נוסף עבור "למי הקורס מתאים" */}
       
        </div>
      )}
    </div>
  );
};

export default Hishtalmut;