import React, { useState, useEffect } from 'react';

import styles from './FirstScreen.module.css';

import middleImage from "../images/עדי אהרון תמונה מרכזית.png";
import rightImage from "../images/עדי אהרון תמונה ימנית.png"
import leftImage from "../images/עדי אהרון תמונה שמאלית.png"
import Loader from "../components/loader/Loader"
const FirstScreen = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imageUrls = [
      middleImage,
      rightImage,
      leftImage
    ];

    const loadImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = url;
      });
    };

    Promise.all(imageUrls.map(loadImage))
      .then(() => setImagesLoaded(true))
      .catch((err) => console.error("Failed to load images", err));
  }, []);

  if (!imagesLoaded) {
    return <Loader/>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={`${styles.backgroundImage} ${styles.leftImage}`}></div>
        <div className={`${styles.backgroundImage} ${styles.centerImage}`}></div>
        <div className={`${styles.backgroundImage} ${styles.rightImage}`}></div>
      </div>
      
      <div className={styles.contentBox}>
        <h1 className={styles.title}>ADI AHARON</h1>
  
        <div className={styles.description}>הכשרות בתחום הציפורניים עם דגש מיוחד על אלרגיות והתחומים שלא כולן יספרו לך עליהם </div>
      </div>
    </div>
  );
};

export default FirstScreen;