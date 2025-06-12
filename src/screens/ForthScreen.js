import Hishtalmut from "../components/sillabus/Hishtalmut";
import Syllabus from "../components/sillabus/Sillabus"
import CourseDrawer from "../components/sillabus/SillabusesWrapper";
import YoutubeCarousel from "../components/youtubeCarousel/Shorts";
import FormScreen from "../formScreen/FormScreen";
import styles from "./ForthScreen.module.css"
const ForthScreen=()=>{
const videoIds = [
           "8gYZjz6skNA", 
    "a9qaLQZvTG0",
 
        "mGfNvUExX2o",
      "s_0SahQWJHI",


  
];
 return <>


<CourseDrawer/>
     
            <div className={styles.description}>הכנתי לך טעימה קצרה מהשיעורים איתי ומהחוויה שכל תלמידה שלי עוברת, לצפייה בסרטונים - פשוט תלחצי עליהם</div>
 <YoutubeCarousel videoIds={videoIds}/>
 <FormScreen/>
    </>
}
export default ForthScreen