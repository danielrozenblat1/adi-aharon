import GlassEffectCard from "../components/glassBox/GlassBox"
import styles from "./SecondScreen.module.css"
import heart from "../icons/wired-outline-414-money-bag-dollar-hover-shake (1).json"
import business from "../icons/wired-outline-633-female-standing-hover-success (2).json"
import clock from "../icons/wired-outline-236-alarm-clock-hover-pinch.json"
const SecondScreen=()=>{

return <>
    <div className={styles.title}>אם הגעת לכאן</div>
    <div className={styles.description}>יש לך תשוקה לתחום הביוטי כבר תקופה ארוכה אבל בזמן האחרון החלטת שהגיע הזמן לקחת אותה  <div className={styles.bold}>צעד אחד קדימה</div></div>
    <div className={styles.title}>ולהתחיל..</div>
    <div className={styles.row}>
<GlassEffectCard title="להכניס סכומים שפעם רק חלמת עליהם" description="תחום הביוטי מציע פוטנציאל הכנסה גבוה - עם טכניקה נכונה ולקוחות קבועות אפשר להגיע לרמות הכנסה גבוהות מאוד" icon={heart}/>
<GlassEffectCard title="לקום כל בוקר להגשמה עצמית" description="במקום לעבוד עבור מישהו אחר, להיות חייבת לו דין וחשבון ולהרוויח עבורו כסף -  את תתעוררי כל יום לעבוד על החלום שלך ולבנות את העתיד שלך" icon={business}/>
<GlassEffectCard title="להיות אדון לעצמך" description="לקבוע את השעות שלך, לבחור את הלקוחות שלך וליצור לעצמך חופש אמיתי בניהול הזמן והחיים" icon={clock}/>
    </div>
    <div className={styles.description}>תכלס.. אני מבינה את הסקרנות שלך!</div>
    <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          <span className={styles.markedTitle}>כי זה באמת אפשרי</span>
        </h1>
      </div>
<div className={styles.description}>תחום הביוטי הוא אחד התחומים הכי מתגמלים שיש - הביקוש אליו תמיד יהיה קיים כי נשים תמיד ירצו להיראות מטופחות, ומי שבאמת משקיעה בו יכולה להגיע לגבהים מדהימים</div>
      <div className={styles.description}>אבל חשוב לי להבהיר לך</div>
      <div className={styles.title}>זה לא חלום</div>
      <div className={styles.description}>כדי להצליח בתחום הציפורניים ולהשאר בו לאורך זמן את תצטרכי להצטייד ב</div>
</>

}
export default SecondScreen