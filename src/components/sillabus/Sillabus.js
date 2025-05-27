import React, { useState } from 'react';
import { 
  BookOpen, Heart, Sparkles, Camera, Eye, Shield, Paintbrush, Award,
  Brain, AlertTriangle, Search, Zap, Wrench, Microscope, Package,
  Lightbulb, Users, Target, Layers, Eraser, UserCheck, Star,
  CheckCircle, Repeat, Focus, Trophy, Instagram, Aperture, Plus, Minus
} from 'lucide-react';
import styles from './Sillabus.module.css';

const Syllabus = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const sessions = [
    {
      number: 1,
      icon: <Shield className={styles.sessionIcon} />,
      title: "יסודות המקצוע ובניית בסיס בריא לעבודה",
      quote: "היסוד הוא הכל - בלי בסיס חזק, אין בניין יציב",
      content: [
        { text: "תיאוריה מקצועית: הכרה והבנת מבנה הציפורן, עור ותגובות עור נפוצות", icon: <Brain className={styles.contentIcon} /> },
        { text: "מחלות עור וציפורניים בדגש על אלרגיות – נושא חובה לכל מקצועית", icon: <AlertTriangle className={styles.contentIcon} /> },
        { text: "איך לזהות אלרגיה ולמה חשוב לא להתעלם?", icon: <Search className={styles.contentIcon} /> },
        { text: "מה הגורמים להתפתחותה של האלרגיה?", icon: <Zap className={styles.contentIcon} /> },
        { text: "עבודה בטוחה ונכונה כדי להימנע אלרגיות", icon: <Shield className={styles.contentIcon} /> },
        { text: "הכרת רכיבים אלרגניים בג'לים בהרחבה – כולל HEMA, TPO וחומרים נוספים", icon: <Microscope className={styles.contentIcon} /> },
        { text: "סוגי הג'ל השונים: ג'ל בסיס, ג׳ל בנייה, צבע, טופ", icon: <Package className={styles.contentIcon} /> },
        { text: "הסבר מעמיק על מנורת הייבוש: ההבדלים בין המנורות הקיימות", icon: <Lightbulb className={styles.contentIcon} /> },
        { text: "היכרות עם ציוד העבודה: מכונת שיוף, ראשי שיוף, פצירות", icon: <Wrench className={styles.contentIcon} /> },
        { text: "סטריליזציה וסביבה בטוחה לעבודה נקייה", icon: <Sparkles className={styles.contentIcon} /> },
        { text: "ערכת התחלה חובה – מה את צריכה כדי להתחיל להרוויח", icon: <Star className={styles.contentIcon} /> }
      ]
    },
    {
      number: 2,
      icon: <Paintbrush className={styles.sessionIcon} />,
      title: "התחלת עבודה מעשית – לק ג'ל בצורה נכונה ובטוחה",
      quote: "התרגול הוא המפתח להצלחה - כל מקצועית התחילה כאן",
      content: [
        { text: "הכרת שלבי העבודה", icon: <Layers className={styles.contentIcon} /> },
        { text: "תרגול על ציפורניים מלאכותיות:", icon: <Target className={styles.contentIcon} /> },
        { text: "הנחה ומריחת לק ג'ל בצורה אחידה", icon: <Paintbrush className={styles.contentIcon} /> },
        { text: "הסרת החומר בלי לפגוע בציפורן", icon: <Eraser className={styles.contentIcon} /> },
        { text: "עבודה על מודליסטית בשיטת עבודה מותאמת ללקוחות עם אלרגיות:", icon: <UserCheck className={styles.contentIcon} /> },
        { text: "טכניקה ייחודית שפיתחתי – ליישום בטוח, יעיל ורווחי", icon: <Award className={styles.contentIcon} /> },
        { text: "תרגול שלב אחר שלב עם ליווי צמוד", icon: <CheckCircle className={styles.contentIcon} /> }
      ]
    },
    {
      number: 3,
      icon: <Sparkles className={styles.sessionIcon} />,
      title: "תיקון מבנה אנטומי – המקפצה המקצועית שלך",
      quote: "כשאת יודעת לתקן מבנה, את הופכת לאמנית אמיתית",
      content: [
        { text: "לימוד ותרגול של שיטת תיקון המבנה האנטומי הטבעי:", icon: <BookOpen className={styles.contentIcon} /> },
        { text: "איך משחזרים מבנה אחיד, חזק ובריא גם בציפורניים פגועות", icon: <Repeat className={styles.contentIcon} /> },
        { text: "תרגול מקיף על מודליסטית עם דגש על דיוק, אחידות ועבודה נכונה עם החומרים המתאימים", icon: <Focus className={styles.contentIcon} /> }
      ]
    },
    {
      number: 4,
      icon: <Trophy className={styles.sessionIcon} />,
      title: "עבודת גמר + מיתוג אישי",
      quote: "העבודה הטובה ביותר היא זו שהעולם רואה ומעריך",
      content: [
        { text: "עבודה מלאה על מודליסטית – סימולציית לקוחה אמיתית:", icon: <Users className={styles.contentIcon} /> },
        { text: "טיפול מלא עם ליווי מקצועי שלי", icon: <Heart className={styles.contentIcon} /> },
        { text: "איך לצלם נכון את העבודות שלך כדי למשוך לקוחות ברשתות:", icon: <Camera className={styles.contentIcon} /> },
        { text: "זוית, תאורה, פריים – שהעבודה שלך תבלוט גם באינסטגרם וגם בעין של הלקוחה", icon: <Instagram className={styles.contentIcon} /> }
      ]
    }
  ];

  return (
    <div className={styles.syllabusContainer}>
      <div className={styles.header}>
        <h1 className={styles.mainTitle}>ככה זה הולך לעבוד</h1>
        <h2 className={styles.subtitle}>הדרך שלך לקריירה רווחית בעולם הציפורניים</h2>
        <div className={styles.courseInfo}>
          <span>4 מפגשים</span>
          <span>4 שעות כל מפגש</span>
          <span>לימוד עיוני + פרקטיקה על לקוחות אמיתיות</span>
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
        </div>
      )}
    </div>
  );
};

export default Syllabus;