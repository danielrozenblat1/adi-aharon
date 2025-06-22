import GlassEffectCard from "../components/glassBox/GlassBox"
import styles from "./SecondScreen.module.css"
import heart from "../icons/wired-outline-414-money-bag-dollar-hover-shake (1).json"
import business from "../icons/wired-outline-633-female-standing-hover-success (2).json"
import clock from "../icons/wired-outline-187-suitcase-morph-open (1).json"
const SecondScreen=()=>{

return <>
    <div className={styles.title}>אם הגעת לכאן</div>
    <div className={styles.description}>זה כי יש לך תשוקה אמיתית לעולם הביוטי
אולי את עוקבת אחרי התחום כבר תקופה, אולי אפילו התנסית בו קצת בעצמך – אבל עכשיו הגיע הרגע שלך:
</div>
    <div className={styles.title}>להפוך את החלום לקריירה</div>
  <div className={styles.row}>
        <GlassEffectCard 
            title="להכניס סכומים שפעם רק חלמת עליהם" 
            description="תחום הציפורניים מציע פוטנציאל הכנסה עצום ועם התמדה, השקעה נכונה – ובעיקר למידה ממי שכבר עשתה את הדרך – אין סיבה שלא תתחילי להרוויח כמו מקצוענית." 
            icon={heart}
        />
        <GlassEffectCard 
            title="לקום כל בוקר להגשמה עצמית" 
            description="במקום לעבוד בשביל אחרים – תעבדי בשביל עצמך, תבני את העסק שלך, את החלום שלך והכי חשוב- בדרך שלך. העתיד שלך בידיים שלך – ואלה יהיו ידיים שיודעות ליצור עבודה מקצועית, בריאה, בטוחה, ומבוקשת." 
            icon={business}
        />
        <GlassEffectCard 
            title="להיות אדון לעצמך" 
            description="את קובעת את הקצב ואת השעות שלך, את בוחרת את הלקוחות שלך. את זאת שיוצרת לעצמך חופש אמיתי בניהול הזמן והחיים שלך." 
            icon={clock}
        />
    </div>
   <div className={styles.description}>והאמת? אני מבינה את הסקרנות שלך!</div>
    <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          <span className={styles.markedTitle}>כי זה באמת אפשרי</span>
        </h1>
      </div>
    <div className={styles.description}>ואפילו הרבה יותר קרוב ממה שנדמה לך.  <br/> תחום הציפורניים הוא אחד התחומים הכי מתגמלים שיש – כלכלית, מקצועית ואישית. והביקוש? תמיד קיים – במיוחד למקצועניות שמשקיעות בעצמן ויודעות לתת שירותים עם ערך מוסף אמיתי</div>
    
      <div className={styles.title}>נשמע כמו חלום, נכון?</div>
        <div className={styles.description}>חשוב לי שתדעי את האמת</div>
      <div className={styles.description}>כדי להצליח בתחום הציפורניים באמת ולבנות עסק יציב לאורך זמן, יש כמה תכונות שתצטרכי לאמץ בדרך</div>
</>

}
export default SecondScreen