import React from 'react';
import styles from './Recommends.module.css';


// Import your images
import result1 from "../../images/עדי אהרון עבודות 1.png";
import result2 from "../../images/עדי אהרון עבודות 2.png";
import result3 from "../../images/עדי אהרון עבודות 3.png";
import result4 from "../../images/עדי אהרון עבודות 4.png";
import result5 from "../../images/עדי אהרון עבודות 5.png";
import result6 from "../../images/עדי אהרון עבודות 6.png";
import result7 from "../../images/עדי אהרון עבודות 7.png";
import result8 from "../../images/עדי אהרון עבודות 8.png";
import result9 from "../../images/עדי אהרון עבודות 9.png";
import result10 from "../../images/עדי אהרון עבודות 10.png";
import result11 from "../../images/עדי אהרון עבודות 11.png";
import result12 from "../../images/עדי אהרון עבודות 12.png";
import result13 from "../../images/עדי אהרון עבודות 13.png";
import result14 from "../../images/עדי אהרון עבודות 14.png";
import result15 from "../../images/עדי אהרון עבודות 15.png";
import result16 from "../../images/עדי אהרון עבודות 16.png";
import result17 from "../../images/עדי אהרון עבודות 17.png";
import result18 from "../../images/עדי אהרון עבודות 18.png";
import result19 from "../../images/עדי אהרון עבודות 19.png";

const Works = () => {
  const images = [
    result1, result17,result2, result3, result4,result15, 
    result6,  result7, result8, result9, result13, result10,
     result5, result14, 
   result18, result19,result11, result16 ,result12, 
  ];

  return (
    <>
      <div className={styles.title}>
       הוצאתי עד היום אלפי נשים מרוצות
      </div>

      <div className={styles.container}>
        <div className={styles.scrollTrack}>
          {/* קבוצה ראשונה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`first-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`המלצה ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
          {/* קבוצה שנייה זהה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`second-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`המלצה ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
   
    </>
  );
};

export default Works;