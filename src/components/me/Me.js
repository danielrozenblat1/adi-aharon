import React from 'react';
import styles from './Me.module.css';
import adi from "../../images/עדי אהרון תמונת תדמית.png";

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
          <div className={styles.subtitle}>"החופש האמיתי זה להיות אדון לעצמך"</div>
          <p className={styles.description}>
          תמיד הייתה לי תשוקה לעולם היופי, אבל כמו שאומרים – ללכת בתלם זה בטוח, נכון? אז הלכתי, למדתי, עשיתי תואר במשפטים, עבדתי בתחום כמה שנים עד שיום אחד כשישבתי הרגשתי כמו עכבר מעבדה. <br/> אני יושבת ועובדת בלהרוויח כסף עבור מישהו אחר! ואז הבנתי - ש"אם אני יכולה לעשות את זה עבור אדם אחר אני יכולה לעשות את זה עבור עצמי!"
          </p>
            <p className={styles.description}>
במהלך התואר התחילו אצלי ניצנים של אלרגיה ללק ג׳ל, סירבתי להאמין, אמרתי בטח זה שטויות, זה יעבור, המשכתי והמשכתי עם הלק עד שיום אחד התפרצה האלרגיה באופן חריג וקרעה לי את כל העור מסביב לציפורניים. <br/>

בביקור אצל הרופא עור הוא אמר לי שבחיים לא אוכל לעשות יותר לק ג׳ל ושמבחינתו אין טעם לפנות לאלרגולוג כי מדובר בגזירת גורל עבורי  </p>
          {/* <p className={styles.description}>
              התשוקה שלי לציפורניים התחילה לא מהמקום הכי טוב.. הכל התחיל מהמשפט הבא:
          </p> */}
        </div>
      </div>
    </>
  );
};

export default AboutMe;