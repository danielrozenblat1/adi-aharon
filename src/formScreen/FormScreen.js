import React, { useRef, useState } from 'react';
import styles from './FormScreen.module.css';

const FormScreen = () => {
  // State for validation errors
  const [errors, setErrors] = useState({
    fullName: '',
    phone: '',
    reason: ''
  });

  // State for form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Refs for form fields
  const fullNameRef = useRef(null);
  const phoneRef = useRef(null);
  const reasonRef = useRef(null);
  const emailRef = useRef(null); // Using emailRef for free text

  // Server settings
  const serverUrl = "https://dynamic-server-dfc88e1f1c54.herokuapp.com/leads/newLead";
  const reciver = "adikaacademy@gmail.com";

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const name = fullNameRef.current.value;
    const phone = phoneRef.current.value;
    const reason = reasonRef.current.value;
    const freeText = emailRef.current.value;
    
    // Combine reason with free text if provided
    const finalReason = freeText.trim() 
      ? `${reason}\nטקסט חופשי: ${freeText.trim()}`
      : reason;
    
    // Validate inputs
    let valid = true;
    const newErrors = { ...errors };

    // Validate full name
    if (!name.trim()) {
      newErrors.fullName = 'נא להזין שם מלא';
      valid = false;
    } else if (name.trim().length < 2) {
      newErrors.fullName = 'שם חייב להכיל לפחות 2 תווים';
      valid = false;
    }

    // Validate phone number (Israeli format)
    const phoneRegex = /^0(5\d|[23489])\d{7}$/;
    if (!phone.trim()) {
      newErrors.phone = 'נא להזין מספר טלפון';
      valid = false;
    } else if (!phoneRegex.test(phone.trim())) {
      newErrors.phone = 'נא להזין מספר טלפון תקין';
      valid = false;
    }

    // Validate reason
    if (!reason || reason === '') {
      newErrors.reason = 'נא לבחור סיבת פנייה';
      valid = false;
    }

    // Message is optional, so no validation needed

    setErrors(newErrors);
    
    if (!valid) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Server data object
    const serverData = {
      name: name,
      phone: phone,
      email: "אין", // Always "אין" - not using email field
      reason: finalReason, // Combined reason with free text
      reciver: reciver
    };

    try {
      // Send to server
      const serverResponse = await fetch(serverUrl, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(serverData)
      });

      if (serverResponse.ok) {
        setIsSubmitting(false);
        setSubmitted(true);
        
        // Reset form after successful submission
        setTimeout(() => {
          fullNameRef.current.value = "";
          phoneRef.current.value = "";
          reasonRef.current.value = "";
          emailRef.current.value = "";
          setSubmitted(false);
        }, 3000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      alert("התרחשה שגיאה, אנא נסו שוב מאוחר יותר");
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.formScreenContainer} id="טופס">
      <div className={styles.titleContainer}>
        <div className={styles.title}>הדרך שלנו מתחילה כאן</div>
      </div>
      
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="fullName">שם מלא</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className={`${styles.input} ${errors.fullName ? styles.inputError : ''}`}
              placeholder="השם המלא שלך"
              disabled={isSubmitting || submitted}
              ref={fullNameRef}
            />
            {errors.fullName && <p className={styles.errorText}>{errors.fullName}</p>}
          </div>
          
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="phone">מספר טלפון</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
              placeholder="050-0000000"
              disabled={isSubmitting || submitted}
              ref={phoneRef}
            />
            {errors.phone && <p className={styles.errorText}>{errors.phone}</p>}
          </div>
          
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="reason">סיבת הפנייה</label>
            <select
              id="reason"
              name="reason"
              className={`${styles.input} ${errors.reason ? styles.inputError : ''}`}
              ref={reasonRef}
              defaultValue=""
              disabled={isSubmitting || submitted}
            >
              <option value="" disabled>בחרי סיבת פנייה</option>
              <option value="קורס מתחילות">קורס מתחילות</option>
              <option value="קורס בניה בטיפסים הפוכים">קורס בניה בטיפסים הפוכים</option>
              <option value="השתלמות לאלרגיות">השתלמות לאלרגיות</option>
              <option value="השתלמות העלאת רמה/ קיצור זמנים">השתלמות העלאת רמה/ קיצור זמנים</option>
            </select>
            {errors.reason && <p className={styles.errorText}>{errors.reason}</p>}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="freeText">פירוט (רשות)</label>
            <textarea
              id="freeText"
              name="freeText"
              className={styles.input}
              placeholder="כאן תוכלי לכתוב פרטים נוספים או שאלות..."
              disabled={isSubmitting || submitted}
              ref={emailRef}
              rows={4}
            />
          </div>
          
          <button 
            type="submit" 
            className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''} ${submitted ? styles.submitted : ''}`}
            disabled={isSubmitting || submitted}
          >
            {isSubmitting ? 'שולח...' : submitted ? 'נשלח בהצלחה!' : 'עדי, בואי נדבר!'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormScreen;