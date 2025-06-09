import Hishtalmut from "../components/sillabus/Hishtalmut";
import Syllabus from "../components/sillabus/Sillabus"
import YoutubeCarousel from "../components/youtubeCarousel/Shorts";
import FormScreen from "../formScreen/FormScreen";
import styles from "./ForthScreen.module.css"
const ForthScreen=()=>{
const videoIds = [
    "a9qaLQZvTG0",
    "8gYZjz6skNA", 
    "mGfNvUExX2o",
    "s_0SahQWJHI"
];
 return <>


    <Syllabus/>
    <Hishtalmut/>
     
            <div className={styles.description}>הכנתי לך טעימה קצרה מהשיעורים איתי, מוזמנת ללחוץ על כל סרטון</div>
 <YoutubeCarousel videoIds={videoIds}/>
 <FormScreen/>
    </>
}
export default ForthScreen