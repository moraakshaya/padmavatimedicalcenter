"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./testimonials.module.css";
import Image from "next/image";

const testimonials = [
  {
    name: "Rohit Sharma",
    role: "Patient",
    photo: "/images/patient1.jpg",
    rating: 5,
    feedback:
      "The doctors were extremely caring and supportive. The treatment was smooth and stress-free.",
  },
  {
    name: "Priya Reddy",
    role: "Patient",
    photo: "/images/patient2.jpg",
    rating: 4,
    feedback:
      "Very clean environment and friendly staff. I felt comfortable throughout my stay.",
  },
  {
    name: "Amit Gupta",
    role: "Patient",
    photo: "/images/patient3.jpg",
    rating: 5,
    feedback:
      "Excellent service! The doctor explained everything clearly. Highly recommended.",
  },
];

export default function Testimonials() {
  /* HERO ANIMATION */
  const heroRef = useRef(null);
  const [animateHero, setAnimateHero] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimateHero(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  /* TESTIMONIAL SECTION ANIMATION */
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className={styles.testimonialHero} ref={heroRef}>
        <h1
          className={`${styles.heroTitle} ${
            animateHero ? styles.slideLeft : ""
          }`}
        >
          Patient Testimonials
        </h1>

        <p
          className={`${styles.heroSubtitle} ${
            animateHero ? `${styles.slideLeft} ${styles.delay}` : ""
          }`}
        >
          Hear inspiring stories from our patients and their experience at our
          hospital.
        </p>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.testimonials} ref={sectionRef}>
        <h2
          className={`${styles.title} ${animate ? styles.slideLeft : ""}`}
        >
          What Our Patients Say
        </h2>

        <div className={styles.testimonialGrid}>
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`${styles.testimonialCard} ${
                animate ? styles.slideBottom : ""
              }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              {/* <Image
                src={item.photo}
                alt={item.name}
                width={80}
                height={80}
                className={styles.patientImg}
              /> */}

              <p className={styles.feedback}>"{item.feedback}"</p>

              <div className={styles.patientInfo}>
                <h3>{item.name}</h3>
                <span>{item.role}</span>
              </div>

              <div className={styles.stars}>
                {"⭐".repeat(item.rating)}
              </div>
            </div>
          ))}
        </div>

        {/* GOOGLE REVIEW */}
        <div className={styles.googleReviewBox}>
          <p
            className={`${styles.googleText} ${
              animate ? styles.slideLeft : ""
            }`}
          >
            Want to read more patient experiences?
          </p>

          <a
            href="https://share.google/vrspeyG6Xo0jwhFLi"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.googleReviewBtn} ${
              animate ? styles.slideBottom : ""
            }`}
          >
            ⭐ Read More Reviews on Google
          </a>
        </div>
      </section>
    </>
  );
}
