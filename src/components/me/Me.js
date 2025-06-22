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
          <div className={styles.subtitle}>ובשבילי - החופש האמיתי זה להיות אדון לעצמך</div>
          <p className={styles.description}>
         תמיד הייתה בי תשוקה לעולם הביוטי, אבל כמו רבות אחרות – בחרתי בדרך הבטוחה. עשיתי תואר במשפטים, עבדתי במשרדים גדולים ונחשבים עד שיום אחד מצאתי את עצמי יושבת במשרד מול המחשב כמו עכבר במעבדה ואמרתי: "רגע, אני מרוויחה כסף עבור מישהו אחר – בזמן שאני מבטלת את עצמי."  <br/>וכאן התחיל השינוי שלי.
          </p>
            <p className={styles.description}>
ואז הגיעה האלרגיה – וטרפה לי את כל הקלפים <br/>

במהלך הלימודים שלי בתואר, התחילו אצלי סימנים ראשונים של אלרגיה ללק ג‘ל, והתעלמתי מהם – כי איך אפשר לוותר על משהו שאת כל כך אוהבת, נכון?
אבל יום אחד, זה פשוט התפרץ: העור שלי סביב הציפורניים התמלא בשלפוחיות ופשוט נקרע. רופא העור קבע חד משמעית: ”את לא יכולה לעשות יותר לק ג'ל. זאת גזירת גורל."
אבל אני? לא מאמינה בגזירות – אלא בפתרונות!  </p>
          {/* <p className={styles.description}>
              התשוקה שלי לציפורניים התחילה לא מהמקום הכי טוב.. הכל התחיל מהמשפט הבא:
          </p> */}
        </div>
      </div>
    </>
  );
};

export default AboutMe;