import Recommendations from "../components/recommends/Recommends"
import Works from "../components/recommends/Works"
import styles from "./ThirdScreen.module.css"
import before from "../images/עבודה לפני השתלמות.png"
import after from "../images/עבודה אחרי השתלמות.png"
import before2 from "../images/עבודה לפני השתלמות 3.png"
import after2 from "../images/עבודה אחרי השתלמות 3.png"
import after3 from "../images/עבודה אחרי השתלמות 4.png"
import BeforeAfterSlider from "../components/beforeAfter/BeforeAfter"
import  FormScreen from "../formScreen/FormScreen"
import YoutubeCarousel from "../components/youtubeCarousel/Shorts"
const ThirdScreen = () => {

const videoIds = [
  'wMpjCC-H70o',
  'YaDKSxItLH8',
  '2eXGafhMSj4'
];

  return (
    <>
      <div className={styles.description}></div>
      {/* <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          <span className={styles.markedTitle}>״לא תוכלי לעשות ציפורניים לעולם״</span>
        </h1>
      </div> */}
      {/* <div className={styles.description}>זה מה ששמעתי מהרופאים אחרי שכמעט התאשפזתי, מסתבר שפיתחתי אלרגיה לחומרים של הלק ג׳ל</div>
      <div className={styles.title}>ופשוט סירבתי להאמין שאני היחידה בעולם שאלרגית ללק</div>
       */}

      {/* <div className={styles.description}>
        החלטתי לחקור את הנושא ולמצוא פתרון בעצמי.
      </div> */}
      
      <div className={styles.title}>
        <span className={styles.markedTitle}>וכך נולדה המומחיות שלי</span>
      </div>
      
      <div className={styles.description}>
        הבנתי שאני לא לבד! יש המון נשים שנאלצות לוותר על טיפוח הציפורניים בגלל אלרגיות
        ומניקוריסטיות רבות שלא יודעות איך להתמודד עם התופעה הזו - מאבדות לקוחות ולפעמים אפילו נוטשות את המקצוע.
      </div>
      
      <div className={styles.description}>
        מהר מאוד מילאתי את היומן שלי בלקוחות שסבלו מאלרגיות ולא מצאו מענה במקום אחר.
        הפכתי להיות מומחית בתחום שכולן מפחדות להיכנס אליו!
      </div>
      <div className={styles.description}>
       לכן החלטתי לקחת את הידע שלי צעד אחד קדימה  ולהעניק לך את כל הידע שיש לתחום להציע!
      </div>
 <Works/>
  <Recommendations/>
  <div className={styles.title}>שמיד אחרי הקורס כבר הוציאו עבודות כאלה:</div>
        <div className={styles.description}>
החליקי ימינה ושמאלה כדי לצפות בתמונות
      </div>
  <div className={styles.row}>
 <BeforeAfterSlider 
   beforeImage={after3} 
   afterImage={before2} 
   beforeLabel="אחרי" 
   afterLabel="לפני"  />

    <BeforeAfterSlider
   beforeImage={after} 
   afterImage={after2} 
   beforeLabel="אחרי" 
   afterLabel="לפני"  />
           <div className={styles.description}>
 אני יודעת בלב שלם שמי שרוצה להצליח בתחום הזה - תצליח! <br/>
 היא רק צריכה את הכלים הנכונים ואת האומץ לעשות את הצעד הראשון ולהתחיל!
      </div>
      <div className={styles.title}>קצת מאלה שעשו את הצעד..</div>
      <YoutubeCarousel videoIds={videoIds}/>
   <FormScreen/>
    </div>

    </>
  )
}

export default ThirdScreen