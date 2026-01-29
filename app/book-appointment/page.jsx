"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./book-appointment.module.css";
import { FaUserMd, FaClock, FaPhoneAlt, FaHeartbeat } from "react-icons/fa";

export default function BookAppointment() {
  /* ================= CLIENT MOUNT ================= */
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  /* ================= HERO ANIMATION ================= */
  const heroRef = useRef(null);
  const [animateHero, setAnimateHero] = useState(false);

  useEffect(() => {
    if (!mounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateHero(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, [mounted]);

  /* ================= FORM LOGIC ================= */
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const formData = new FormData(e.target);
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Appointment Booked Successfully!");
        e.target.reset();
      } else {
        setResult("Something went wrong!");
      }
    } catch {
      setResult("Network error. Please try again.");
    }
  };

  /* ================= CONTENT ANIMATION ================= */
  const sectionRef = useRef(null);
  const [textVisible, setTextVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    if (!mounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTextVisible(true);
          setCardsVisible(true);
          setFormVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [mounted]);

  /* ================= RENDER ================= */
  return (
    <>
      {/* Prevent hydration mismatch */}
      {!mounted ? null : (
        <>
          {/* ================= HERO SECTION ================= */}
          <section className={styles.baHero} ref={heroRef}>
            <div className={styles.baContainer}>
              <h1
                className={`${styles.baTitle} ${
                  animateHero ? styles.slideInLeft : ""
                }`}
              >
                Book an Appointment
              </h1>

              <p
                className={`${styles.baSubtitle} ${
                  animateHero
                    ? `${styles.slideInLeft} ${styles.delay}`
                    : ""
                }`}
              >
                Your health is our priority—schedule your visit with our expert
                doctors.
              </p>
            </div>
          </section>

          {/* ================= MAIN SECTION ================= */}
          <section className={styles.baMain} ref={sectionRef}>
            <div className={styles.baWrapper}>
              {/* ---------- LEFT INFO ---------- */}
              <div className={styles.baLeft}>
                <h2
                  className={`${styles.baTitle} ${
                    textVisible ? styles.slideInLeft : ""
                  }`}
                >
                  Why Choose Padmavati Medical Center?
                </h2>

                <p
                  className={`${styles.baDesc} ${
                    textVisible
                      ? `${styles.slideInLeft} ${styles.delay}`
                      : ""
                  }`}
                >
                  We provide advanced medical care with highly experienced
                  specialists.
                </p>

                <div className={styles.baPoints}>
                  <div
                    className={`${styles.point} ${
                      textVisible
                        ? `${styles.slideInLeft} ${styles.delay2}`
                        : ""
                    }`}
                  >
                    <FaHeartbeat className={styles.icon} />
                    <p>Expert Cardiologist & Specialists</p>
                  </div>

                  <div
                    className={`${styles.point} ${
                      textVisible
                        ? `${styles.slideInLeft} ${styles.delay3}`
                        : ""
                    }`}
                  >
                    <FaClock className={styles.icon} />
                    <p>Quick & Easy Appointments</p>
                  </div>

                  <div
                    className={`${styles.point} ${
                      textVisible
                        ? `${styles.slideInLeft} ${styles.delay4}`
                        : ""
                    }`}
                  >
                    <FaPhoneAlt className={styles.icon} />
                    <p>24/7 Emergency Support</p>
                  </div>

                  <div
                    className={`${styles.point} ${
                      textVisible
                        ? `${styles.slideInLeft} ${styles.delay5}`
                        : ""
                    }`}
                  >
                    <FaUserMd className={styles.icon} />
                    <p>Personalized Patient Care</p>
                  </div>
                </div>

                <div className={styles.infoCards}>
                  {/* <div
                    className={`${styles.infoCard} ${
                      cardsVisible
                        ? `${styles.slideInBottom} ${styles.delay}`
                        : ""
                    }`}
                  >
                    <div className={styles.cardIconRound}>🏅</div>
                    <h3>ISO Certified</h3>
                    <p>Maintaining international quality and safety standards.</p>
                  </div> */}

                  

                  <div
                    className={`${styles.infoCard} ${
                      cardsVisible
                        ? `${styles.slideInBottom} ${styles.delay3}`
                        : ""
                    }`}
                  >
                    <div className={styles.cardIconRound}>⭐</div>
                    <h3>10,000+ Patients Treated</h3>
                    <p>Serving the community with care and commitment.</p>
                  </div>
                </div>
              </div>

              {/* ---------- RIGHT FORM ---------- */}
              <div
                className={`${styles.baRight} ${
                  formVisible ? styles.slideInRight : ""
                }`}
              >
                <h2>Book an Appointment</h2>

                <form className={styles.baForm} onSubmit={handleSubmit}>
                  <input name="Full Name" placeholder="Full Name" required />
                  <input
                    type="tel"
                    name="Phone Number"
                    placeholder="Phone Number"
                    required
                  />
                  <input
                    type="email"
                    name="Email"
                    placeholder="Email Address"
                    required
                  />

                  <select name="Department" required>
                    <option value="">Select Department</option>
                    <option>Cardiologist</option>
                    <option>General Physician</option>
                    <option>Gastroenterologist</option>
                    <option>Pediatrician</option>
                    <option>Orthopedician</option>
                  </select>

                  <input type="date" name="Preferred Date" required />

                  <textarea
                    name="Symptoms"
                    placeholder="Describe symptoms (optional)"
                    rows="4"
                  />

                  <button type="submit">Confirm Appointment</button>
                </form>

                <p className={styles.formStatus}>{result}</p>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
