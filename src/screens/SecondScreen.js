import GlassEffectCard from "../components/glassBox/GlassBox"
import styles from "./SecondScreen.module.css"
import heart from "../icons/wired-outline-414-money-bag-dollar-hover-shake (1).json"
import business from "../icons/wired-outline-633-female-standing-hover-success (2).json"
import clock from "../icons/wired-outline-187-suitcase-morph-open (1).json"
const SecondScreen=()=>{

return <>
    <div className={styles.title}>אם הגעת לכאן</div>
    <div className={styles.description}>זה כי יש לך תשוקה לתחום הביוטי כבר תקופה ארוכה רק שבזמן האחרון החלטת שהגיע הזמן לקחת אותה  <div className={styles.bold}>צעד אחד קדימה</div></div>
    <div className={styles.title}>ולהתחיל..</div>
    <div className={styles.row}>
<GlassEffectCard title="להכניס סכומים שפעם רק חלמת עליהם" description="תחום הביוטי מציע פוטנציאל הכנסה גבוה ועם התמדה שלך תוכלי להגיע להכנסות גבוהות מאוד" icon={heart}/>
<GlassEffectCard title="לקום כל בוקר להגשמה עצמית" description="במקום להרוויח כסף עבור מישהו אחר - את תתעוררי כל יום בלהגשים את החלום שלך ולבנות את העתיד שלך" icon={business}/>
<GlassEffectCard title="להיות אדון לעצמך" description="לקבוע את השעות שלך, לבחור את הלקוחות שלך וליצור לעצמך חופש אמיתי בניהול הזמן והחיים שלך" icon={clock}/>
    </div>
    <div className={styles.description}>והאמת.. אני מבינה את הסקרנות שלך!</div>
    <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          <span className={styles.markedTitle}>כי זה באמת אפשרי</span>
        </h1>
      </div>
<div className={styles.description}>התחום שלנו הוא אחד התחומים הכי מתגמלים שיש, הביקוש אליו תמיד קיים ומי שבאמת משקיעה בו יכולה להגיע להישגים גבוהים מאוד</div>
    
      <div className={styles.title}>נשמע כמו חלום, נכון?</div>
        <div className={styles.description}>חשוב לי להבהיר לך,</div>
      <div className={styles.description}>שכדי להצליח בתחום הציפורניים ולהשאר בו לאורך זמן את חייבת להצטייד ב</div>
</>

}
export default SecondScreen