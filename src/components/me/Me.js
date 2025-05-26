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
            אז ככה זה התחיל... ישבתי בספריית המשפטים, מוקפת בערימות של ספרי חוק, והסתכלתי בחלון וחלמתי על משהו אחר לגמרי! תמיד הייתה לי אהבה סודית לעולם היופי, אבל כמו שאומרים – ללכת בתלם זה בטוח, נכון? אז הלכתי. עד שיום אחד, כשישבתי במשרד והרגשתי שאני פשוט לא במקום הנכון עבורי, אמרתי לעצמי: "עדי, החיים קצרים מדי בשביל לעבוד בשביל מישהו אחר ולא לאהוב את מה שאת עושה!"
          </p>
          <p className={styles.description}>
            אז עשיתי את הבלתי יאומן – זרקתי את התיק המשפטי וקפצתי למים העמוקים של עולם הביוטי! וואו, איזו קפיצה זו הייתה! והכל התחיל מהמשפט הבא:
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;