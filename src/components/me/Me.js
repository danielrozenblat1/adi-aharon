import React from 'react';
import styles from './Me.module.css';
import adi from "../../images/עדי אהרון תמונה שמאלית.png";

const AboutMe = () => {
  return (
    <>
      <div className={styles.header} id="מי אני">נעים מאוד</div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={adi} alt="עדי אהרון" className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>עדי אהרון</h1>
          <div className={styles.subtitle}>"להיות אדון לעצמך זה החופש האמיתי"</div>
          <p className={styles.description}>
           תמיד הייתה לי תשוקה לעולם היופי, אבל כמו שאומרים – ללכת בתלם זה בטוח, נכון? אז הלכתי. עד שיום אחד, כשישבתי במשרד והרגשתי שאני פשוט לא במקום הנכון עבורי, אמרתי לעצמי: "עדי, החיים קצרים מדי בשביל לעבוד בשביל מישהו אחר ולא לאהוב את מה שאת עושה!"
          </p>
          <p className={styles.description}>
              התשוקה שלי לציפורניים התחילה לא מהמקום הכי טוב.. הכל התחיל מהמשפט הבא:
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;