import { useState } from 'react';
import styles from './Treatments.module.css';

import acne1 from "../../images/עידית בזק סדרת אקנה 1.png";
import acne2 from "../../images/עידית בזק סדרת אקנה 2.png";
import acne3 from "../../images/עידית בזק סדרת אקנה 3.png";
import acne4 from "../../images/עידית בזק סדרת אקנה 4.png";
import acne5 from "../../images/עידית בזק סדרת אקנה 5.png";
import acne6 from "../../images/עידית בזק סדרת אקנה 6.png";

import micro1 from "../../images/עידית בזק מיקרובליידינג 1.png";
import micro2 from "../../images/עידית בזק מיקרובליידינג 2.png";
import micro3 from "../../images/עידית בזק מיקרובליידינג 3.png";
import micro4 from "../../images/עידית בזק מיקרובליידינג 4.png";
import micro5 from "../../images/עידית בזק מיקרובליידינג 5.png";

import negaim1 from "../../images/עידית בזק הסרת נגעים 1.png";
import negaim2 from "../../images/עידית בזק הסרת נגעים 2.png";

import anti1 from "../../images/עידית בזק אנטי אייגינג.png"
import behara1 from "../../images/עידית בזק סדרת הבהרה.png"

const MyServices = () => {
  const [openDrawer, setOpenDrawer] = useState(null);

  const services = [
    {
      id: 1,
      title: "סדרות הבהרה",
      description: "טיפולי הבהרה מתקדמים לעור זוהר ואחיד",
      suitableFor: ["למי שסובל מכתמי שמש ופיגמנטציה", "למי שיש לו צבע עור לא אחיד", "למי שרוצה עור זוהר ובהיר יותר", "למי שמחפש פתרון לכתמי גיל"],
      problemSolved: ["מטפל בהיפרפיגמנטציה ומבהיר כתמי עור", "משפר מרקם העור ויוצר גוון אחיד", "מחזיר ביטחון עצמי ותחושת נוחות עם המראה"],
      duration: "45-60 דקות",
      image: behara1,
      galleryImages: [behara1]
    },
    {
      id: 2,
      title: "סדרות אקנה",
      description: "טיפול מקיף לטיפוח עור שמן ומטיפול באקנה",
      suitableFor: ["למי שסובל מאקנה פעילה או צלקות אקנה", "למי שיש לו עור שמן ונקבוביות סתומות", "למי שמתמודד עם דלקות ואדמומיות", "למי שרוצה למנוע הופעת אקנה עתידית"],
      problemSolved: ["מטפל באקנה פעילה ומקטין דלקות", "מנקה נקבוביות ומווסת הפרשת שמן", "מחזיר ביטחון עצמי ונוחות בחברה"],
      duration: "60-75 דקות",
      image: acne1,
      galleryImages: [acne1, acne2, acne3, acne4, acne5, acne6]
    },
    {
      id: 3,
      title: "הסרת נגעים",
      description: "הסרה בטוחה ומקצועית של נגעי עור שונים",
      suitableFor: ["למי שיש לו יבלות או כתמי זקנה", "למי שרוצה להסיר נגעי עור קטנים", "למי שמפריע לו נגע מבחינה אסתטית", "למי שמחפש פתרון בטוח וללא צלקות"],
      problemSolved: ["מסיר נגעי עור בבטחה וללא צלקות", "משפר את המראה הכללי של העור", "מעניק תחושת נקיון ושלמות אסתטית"],
      duration: "30-45 דקות",
      image: negaim1,
      galleryImages: [negaim1, negaim2]
    },
    {
      id: 4,
      title: "מיקרובליידינג",
      description: "עיצוב וצביעת גבות בטכניקה מתקדמת",
      suitableFor: ["למי שיש לו גבות דלילות או חסרות", "למי שרוצה צורת גבות מעוצבת ומושלמת", "למי שמתעייף מהתאמת גבות יומית", "למי שרוצה מראה טבעי וזמין תמיד"],
      problemSolved: ["יוצר מראה גבות מושלם וטבעי לתקופה ארוכה", "חוסך זמן יומי ומעניק צורה מדויקת", "מחזיר ביטחון עצמי ותחושת מושלמות"],
      duration: "90-120 דקות",
      image: micro1,
      galleryImages: [micro1, micro2, micro3, micro4, micro5]
    },
    {
      id: 5,
      title: "אנטי אייגינג",
      description: "טיפולים מתקדמים נגד הזדקנות העור",
      suitableFor: ["למי שרואה סימני הזדקנות ראשונים", "למי שיש לו קמטים או עור רפוי", "למי שרוצה למנוע הזדקנות מוקדמת", "למי שמחפש עור צעיר ומתוח יותר"],
      problemSolved: ["מחדש את העור ומקטין קמטים וקווי הבעה", "משפר גמישות ומתיחות העור", "מחזיר תחושת צעירות וביטחון עצמי"],
      duration: "75-90 דקות",
      image: anti1,
      galleryImages: [anti1]
    }
  ];

  const toggleDrawer = (serviceId) => {
    setOpenDrawer(openDrawer === serviceId ? null : serviceId);
  };

  const generateWhatsAppLink = (title) => {
    const message = encodeURIComponent(`היי עידית הגעתי מהדף, אשמח לשמוע עוד על ${title}`);
    return `https://wa.me/972527752556?text=${message}`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.servicesWrapper}>
        {services.map((service) => (
          <div key={service.id} className={styles.serviceItem}>
            <div 
              className={styles.serviceHeader}
              onClick={() => toggleDrawer(service.id)}
            >
              <div className={styles.headerContent}>
                <div className={styles.serviceImage}>
                  <img src={service.image} alt={service.title} />
                </div>
                <div className={styles.serviceInfo}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                </div>
                <div className={styles.toggleIcon}>
                  {openDrawer === service.id ? '−' : '+'}
                </div>
              </div>
            </div>

            <div className={`${styles.drawerContent} ${openDrawer === service.id ? styles.open : ''}`}>
              <div className={styles.serviceDetails}>
                <div className={styles.detailItem}>
                  <strong>למי זה מתאים:</strong>
                  <ul className={styles.detailList}>
                    {service.suitableFor.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.detailItem}>
                  <strong>איזה בעיה הוא פותר:</strong>
                  <ul className={styles.detailList}>
                    {service.problemSolved.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.detailItem}>
                  <strong>אורך טיפול:</strong>
                  <span className={styles.duration}>{service.duration}</span>
                </div>

                <div className={styles.galleryContainer}>
                  <h4>גלריית תמונות:</h4>
                  <div className={styles.imageGallery}>
                    {service.galleryImages.map((img, index) => (
                      <div key={index} className={styles.galleryImage}>
                        <img src={img} alt={`${service.title} ${index + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                  <a
                    href={generateWhatsAppLink(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ctaButton}
                  >
                    לעוד פרטים
                  </a>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default MyServices;
