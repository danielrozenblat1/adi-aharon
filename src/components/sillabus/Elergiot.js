import React, { useState } from 'react';
import { 
  AlertTriangle, Shield, Microscope, Eye, Search, Target,
  UserCheck, Settings, Heart, Brain, Package, Zap,
  CheckCircle, Award, Plus, Minus, GraduationCap, Timer, Star
} from 'lucide-react';
import styles from './Sillabus.module.css';

const Allergies = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const sessions = [
    {
      number: 1,
      icon: <Brain className={styles.sessionIcon} />,
      title: "מהי אלרגיה ללק ג'ל? – הבנת המנגנון והתסמינים",
      quote: "הבנה עמוקה של האלרגיה היא המפתח לעבודה בטוחה ומקצועית",
      content: [
        { text: "ההתמודדות של הגוף כאשר מתפתחת אלרגיה", icon: <Heart className={styles.contentIcon} /> },
        { text: "חשיבות ההבנה של אלרגיות בעבודת מניקוריסטית", icon: <UserCheck className={styles.contentIcon} /> },
        { text: "ההבדל בין רגישות, גירוי ואלרגיה חמורה", icon: <AlertTriangle className={styles.contentIcon} /> },
        { text: "תסמינים נפוצים ודרכי זיהוי, סוגי תגובות: מיידיות ומצטברות", icon: <Eye className={styles.contentIcon} /> },
        { text: "מתי להפסיק טיפול ואיך לנהוג עם לקוחה שפיתחה אלרגיה", icon: <Shield className={styles.contentIcon} /> }
      ]
    },
    {
      number: 2,
      icon: <Microscope className={styles.sessionIcon} />,
      title: "הכרת חומרים אלרגניים – מה באמת גורם לבעיה?",
      quote: "ידע מדעי מדויק הוא הכלי החשוב ביותר בידי המקצועית",
      content: [
        { text: "סקירת רכיבים אלרגניים נפוצים בג'לים: HEMA, HPMA, TPO ועוד", icon: <Package className={styles.contentIcon} /> },
        { text: "הסבר על מונומרים, פוטואיניציאטורים וחומרים מגיבים", icon: <Search className={styles.contentIcon} /> },
        { text: "איך מנורות ייבוש יכולה לגרום לאלרגיה להתפתח – הסבר מעמיק על ההבדלים בין המנורות הקיימות", icon: <Zap className={styles.contentIcon} /> },
        { text: "איך לקרוא תוויות ולזהות סיכונים", icon: <Eye className={styles.contentIcon} /> },
        { text: "ההבדל בין לק ג'ל רגיל ל\"היפואלרגני\" – ומה לבדוק בפועל", icon: <CheckCircle className={styles.contentIcon} /> }
      ]
    },
    {
      number: 3,
      icon: <Shield className={styles.sessionIcon} />,
      title: "מניעה – עבודה בטוחה ואחראית",
      quote: "מניעה טובה עדיפה על כל טיפול לאחר הבעיה",
      content: [
        { text: "כללי עבודה נכונה להימנעות מאלרגיה", icon: <Settings className={styles.contentIcon} /> },
        { text: "התנהלות מול לקוחה רגישה: שאלות מקדימות, בדיקות רגישות", icon: <UserCheck className={styles.contentIcon} /> },
        { text: "טעויות נפוצות שגורמות לתגובה אלרגית", icon: <AlertTriangle className={styles.contentIcon} /> }
      ]
    },
    {
      number: 4,
      icon: <Target className={styles.sessionIcon} />,
      title: "התאמת שיטת העבודה ללקוחה רגישה – פתרונות מעשיים",
      quote: "כל לקוחה זכאית לטיפול מקצועי ובטוח, ללא יוצא מן הכלל",
      content: [
        { text: "בחירת חומרים בטוחים בהתאם לסוג האלרגיה", icon: <Package className={styles.contentIcon} /> },
        { text: "דגשים טכניים חשובים: שיטת עבודה ייחודית שאני פיתחתי", icon: <Award className={styles.contentIcon} /> },
        { text: "התמודדות עם תגובה אלרגית לאחר טיפול", icon: <Shield className={styles.contentIcon} /> }
      ]
    }
  ];

  const targetAudience = [
    { text: "מניקוריסטיות שרוצות לעבוד בבטחה ומקצועיות עם לקוחות רגישות", icon: <GraduationCap className={styles.contentIcon} /> },
    { text: "מקצועיות שחוו בעיות אלרגיה עם לקוחות ורוצות למנוע זאת בעתיד", icon: <Shield className={styles.contentIcon} /> },
    { text: "מי שרוצה להרחיב את הידע המדעי שלה ולהבין לעומק את החומרים איתם היא עובדת", icon: <Star className={styles.contentIcon} /> }
  ];

  return (
    <div className={styles.syllabusContainer}>
      <div className={styles.header}>
        <h1 className={styles.mainTitle}>השתלמות אלרגיות ללק ג'ל</h1>
        <h2 className={styles.subtitle}>עבודה בטוחה ומקצועית עם לקוחות רגישות</h2>
        <div className={styles.courseInfo}>
          <span>4 חלקים</span>
          <span>3 שעות סה"כ</span>
          <span>ידע מדעי + פתרונות מעשיים</span>
        </div>
        
        <div className={styles.expandButtonContainer}>
          <button 
            className={styles.expandButton} 
            onClick={toggleExpanded}
            aria-label={isExpanded ? "הסתר חלקים" : "הצג חלקים"}
          >
            {isExpanded ? (
              <>
                <Minus className={styles.expandIcon} />
                <span>לחצי כדי להסתיר את תיאור החלקים</span>
              </>
            ) : (
              <>
                <Plus className={styles.expandIcon} />
                <span>לחצי כדי לצפות בכל החלקים</span>
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
                <div className={styles.sessionNumber}>חלק {session.number}</div>
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
        </div>
      )}
    </div>
  );
};

export default Allergies;