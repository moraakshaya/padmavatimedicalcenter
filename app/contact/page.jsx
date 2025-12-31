"use client";

import React, { useRef, useState, useEffect } from "react";
import styles from "./contact.module.css";
import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

export default function Contact() {
  /* ================= WEB3FORMS ================= */
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const formData = new FormData(e.target);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully!");
      e.target.reset();
    } else {
      setResult("Something went wrong!");
    }
  };

  /* ================= HERO ANIMATION ================= */
  const contactHeroRef = useRef(null);
  const [contactHeroVisible, setContactHeroVisible] = useState(false);

 useEffect(() => {
  if (!contactHeroRef.current) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setContactHeroVisible(true);
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(contactHeroRef.current);

  // fallback: if already visible
  if (contactHeroRef.current.getBoundingClientRect().top < window.innerHeight) {
    setContactHeroVisible(true);
  }

  return () => observer.disconnect();
}, []);


  /* ================= CONTACT INFO ANIMATION ================= */
  const ciSectionRef = useRef(null);
  const [ciVisible, setCiVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCiVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (ciSectionRef.current) observer.observe(ciSectionRef.current);

    return () => observer.disconnect();
  }, []);

  /* ================= FORM + MAP ANIMATION ================= */
  const contactLeftRef = useRef(null);
  const contactRightRef = useRef(null);

  const [animateLeft, setAnimateLeft] = useState(false);
  const [animateRight, setAnimateRight] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === contactLeftRef.current) {
              setAnimateLeft(true);
            }
            if (entry.target === contactRightRef.current) {
              setAnimateRight(true);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (contactLeftRef.current) observer.observe(contactLeftRef.current);
    if (contactRightRef.current) observer.observe(contactRightRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.contactPage}>

      {/* ================= HERO ================= */}
     <section className={styles.contactHero} ref={contactHeroRef}>
  <div className={styles.container}>
    <h1 className={`${styles.heroTitle} ${contactHeroVisible ? styles.slideInLeft : ""}`}>
      Contact Us
    </h1>
    <p className={`${styles.heroSubtitle} ${contactHeroVisible ? `${styles.slideInLeft} ${styles.delay}` : ""}`}>
      We’re here to assist you with any medical support you need.
    </p>
  </div>
</section>



      {/* ================= INFO BOXES ================= */}

      <section className={styles.ciSection} ref={ciSectionRef}>
  <div className={styles.ciContainer}>
    <div className={`${styles.ciCard} ${ciVisible ? `${styles.slideUp} ${styles.delay0}` : ""}`}>
      <div className={styles.ciIcon}><FaPhoneAlt /></div>
      <h3>Emergency</h3>
      <p className={styles.ciMain}>040-27007111</p>
      <p className={styles.ciSub}>24/7 Available</p>
    </div>

    <div className={`${styles.ciCard} ${ciVisible ? `${styles.slideUp} ${styles.delay1}` : ""}`}>
      <div className={styles.ciIcon}><FaPhoneAlt /></div>
      <h3>Appointments</h3>
      <p className={styles.ciMain}>9160668686 , 9866635947</p>
    </div>

    <div className={`${styles.ciCard} ${ciVisible ? `${styles.slideUp} ${styles.delay2}` : ""}`}>
      <div className={styles.ciIcon}><FaEnvelope /></div>
      <h3>Email</h3>
      <p className={styles.ciMain}>padmavatimedicalcenter2010@gmail.com</p>
      <p className={styles.ciSub}>We reply in 24hrs</p>
    </div>

    <div className={`${styles.ciCard} ${ciVisible ? `${styles.slideUp} ${styles.delay3}` : ""}`}>
      <div className={styles.ciIcon}><FaClock /></div>
      <h3>Hours</h3>
      <p className={styles.ciMain}>24/7 Emergency</p>
      <p className={styles.ciSub}>OPD: 9AM–6PM</p>
    </div>
  </div>
</section>



      {/* ================= FORM + MAP ================= */}
      <section className={styles.contactMain}>
        <div className={styles.contactMainContainer}>
          {/* FORM */}
          <div
            ref={contactLeftRef}
            className={`${styles.contactForm} ${styles.slideLeft} ${
              animateLeft ? styles.active : ""
            }`}
          >
            <h2>Send Us a Message</h2>

            <form onSubmit={handleSubmit}>
              <input
                type="hidden"
                name="access_key"
                value="1d0ce4c1-4a40-4c7f-b051-04816f638ced"
              />

              <label>Full Name *</label>
              <input name="name" required />

              <label>Email *</label>
              <input type="email" name="email" required />

              <label>Phone *</label>
              <input name="phone" required />

              <label>Subject *</label>
              <input name="subject" required />

              <label>Message *</label>
              <textarea name="message" required />

              <button type="submit" className={styles.sendBtn}>
                Send Message
              </button>

              {result && <p className={styles.formResult}>{result}</p>}
            </form>
          </div>

          {/* -------- RIGHT SIDE : ADDRESS + MAP -------- */}
<div
  ref={contactRightRef}
  className={`${styles.contactRight} ${styles.slideRight} ${
    animateRight ? styles.active : ""
  }`}
>
  <div className={styles.visitCard}>
    <h2>Visit Us</h2>

    <div className={styles.visitBox}>
      <h4>🏥 Hospital Address</h4>
      <p>
        Plot No. 12-13-60, Main Road, Tarnaka <br />
        Plot No. 12-13-67/2, Sadhashiv Nagar, Lane Adj. to Sanman Hotel, <br />
        Street No. 5, Tarnaka, Secunderabad – 500017
      </p>
    </div>
  </div>

  {/* Google Map */}
  <div className={styles.mapBox}>
    <iframe
      title="Hospital Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.402948690773!2d78.5300602!3d17.426209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9963369be3d7%3A0xa287bc9155269c43!2sPadmavathi%20Hospital!5e0!3m2!1sen!2sin!4v1700000000000"
      width="100%"
      height="300"
      style={{ border: 0, borderRadius: "12px" }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>

        </div>
      </section>
    </div>
  );
}
