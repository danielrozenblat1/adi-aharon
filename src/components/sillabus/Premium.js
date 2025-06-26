import React, { useState } from 'react';
import { 
  Target, TrendingUp, Calendar, Instagram, Eye, Camera, 
  BarChart3, Users, MessageCircle, Lightbulb, Star,
  CheckCircle, Plus, Minus, MapPin, Search, Trophy,
  Brain, Zap, PenTool, Video, Edit3, Sparkles
} from 'lucide-react';
import styles from './Sillabus.module.css';

const Premium = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const sessions = [
    {
      number: 1,
      icon: <Target className={styles.sessionIcon} />,
      title: "מיפוי העסק והצרכים האישיים",
      quote: "הכרות אמיתית עם העסק והסביבה העסקית",
      content: [
        { text: "היכרות עם התלמידה והעסק הקיים/הרצוי", icon: <Users className={styles.contentIcon} /> },
        { text: "ניתוח הסביבה העסקית: אזור גאוגרפי, תחרות, סוג קהל יעד", icon: <MapPin className={styles.contentIcon} /> },
        { text: "הגדרת שירותים עיקריים בעסק", icon: <Star className={styles.contentIcon} /> },
        { text: "זיהוי חסמים, פחדים ואתגרים אישיים ונקודתיים", icon: <Search className={styles.contentIcon} /> },
        { text: "ניסוח מטרות ברורות לטווח קצר וארוך", icon: <Target className={styles.contentIcon} /> },
        { text: "קביעת מטרות ריאליות ל-3 החודשים הקרובים", icon: <Calendar className={styles.contentIcon} /> }
      ]
    },
    {
      number: 2,
      icon: <TrendingUp className={styles.sessionIcon} />,
      title: "בניית תוכנית עבודה שמביאה תוצאות",
      quote: "תכנון אסטרטגי חודשי – מיפוי פעולות לפי סדר עדיפויות ולוחות זמנים עסקיים",
      content: [
        { text: "יצירת תוכנית חודשית מותאמת אישית לשלושת החודשים הקרובים", icon: <Calendar className={styles.contentIcon} /> },
        { text: "חלוקה לפי שבועות: פעולות שיווק, פעולות מכירה, תזמון שירותים", icon: <BarChart3 className={styles.contentIcon} /> },
        { text: "תכנון לוחות זמנים לקמפיינים, מבצעים, פוסטים, לייבים ועוד", icon: <Lightbulb className={styles.contentIcon} /> },
        { text: "תכנון תכנים בהתאם למועדים- עונות/ חגים/ ימים מיוחדים", icon: <Sparkles className={styles.contentIcon} /> },
        { text: "כלים פשוטים לעקוב אחרי ביצוע ועמידה ביעדים", icon: <CheckCircle className={styles.contentIcon} /> }
      ]
    },
    {
      number: 3,
      icon: <MessageCircle className={styles.sessionIcon} />,
      title: "שיווק, פרסום ונוכחות דיגיטלית",
      quote: "איך לגרום ללקוחות למצוא אותך – ולרצות לסגור איתך",
      content: [
        { text: "עקרונות בסיסיים בשיווק לעסקים קטנים", icon: <Brain className={styles.contentIcon} /> },
        { text: "הבנת פסיכולוגיית הלקוחה בעולם הביוטי", icon: <Eye className={styles.contentIcon} /> },
        { text: "בניית מסרים שיווקיים שמבדלים אותך בשוק תחרותי", icon: <Zap className={styles.contentIcon} /> },
        { text: "כתיבה שיווקית לפוסטים, סטוריז ועוד", icon: <PenTool className={styles.contentIcon} /> },
        { text: "איך לתכנן תכנים בצורה חכמה לאורך זמן", icon: <Calendar className={styles.contentIcon} /> },
        { text: "טיפים לניהול מערכות יחסים עם לקוחות", icon: <Users className={styles.contentIcon} /> }
      ]
    },
    {
      number: 4,
      icon: <Instagram className={styles.sessionIcon} />,
      title: "אינסטגרם ועריכת תוכן",
      quote: "שיעור מעשי כפול – ניהול תוכן ברשתות חברתיות וכלים ליצירת תוכן עצמאי",
      content: [
        { text: " תפעול וניהול אינסטגרם מקצועי", icon: <Instagram className={styles.contentIcon} /> },
        { text: "שימוש נכון בסטוריז, Reels, Highlights", icon: <Video className={styles.contentIcon} /> },
        { text: "איך לבנות עמוד שמשדר אמינות ויוקרה", icon: <Trophy className={styles.contentIcon} /> },
        { text: "תכנון שבועי של תוכן (גם כשאין זמן)", icon: <Calendar className={styles.contentIcon} /> },
        { text: "כלים לניתוח נתונים באינסטגרם – מה עובד ומה לזרוק", icon: <BarChart3 className={styles.contentIcon} /> },
        { text: " היכרות עם תוכנות עריכה", icon: <Edit3 className={styles.contentIcon} /> },
        { text: "יצירת תכנים שיווקיים לבד – בצורה פשוטה", icon: <Lightbulb className={styles.contentIcon} /> },
        { text: "עיצוב פוסטים, קאברים, תבניות קבועות, כתוביות", icon: <PenTool className={styles.contentIcon} /> },
        { text: "יצירת סרטונים קצרים לשיווק ברשתות", icon: <Camera className={styles.contentIcon} /> },
        { text: "תרגול מעשי מסכם, חיזוק עקרונות הקורס והטמעת הידע", icon: <CheckCircle className={styles.contentIcon} /> }
      ]
    }
  ];

  return (
    <div className={styles.syllabusContainer}>
      <div className={styles.header}>
        <h1 className={styles.mainTitle}>קורס פרימיום</h1>
        <h2 className={styles.subtitle}>הדרך המלאה להצלחה עסקית בעולם הביוטי</h2>
        <div className={styles.courseInfo}>
          <span>4 מפגשים</span>
          <span>ליווי אישי מלא</span>
          <span>אסטרטגיה עסקית + שיווק דיגיטלי</span>
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

export default Premium;