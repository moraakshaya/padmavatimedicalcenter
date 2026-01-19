"use client";

import React, { useRef, useState, useEffect } from "react";
import DoctorsCards from "../doctorscards/DoctorsCards";
import styles from "./HomeDoctorsSection.module.css";
import { doctors } from "../../data/Doctor";

export default function HomeDoctorsSection() {
  const carouselRef = useRef(null);
  const sectionRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [animated, setAnimated] = useState(false);

  // Scroll arrows logic
  const checkOverflow = () => {
    const el = carouselRef.current;
    if (!el) return;

    setShowLeft(el.scrollLeft > 0);
    setShowRight(Math.ceil(el.scrollLeft + el.clientWidth) < el.scrollWidth);
  };

  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  const handleScroll = () => {
    checkOverflow();
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
          observer.disconnect(); // Clean up immediately after animation starts
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [animated]);

  return (
    <div className={styles.homeDoctorsWrapper} ref={sectionRef}>
      <h2 className={`${styles.homeDoctorsTitle} ${animated ? styles.slideInLeft : ""}`}>
      Our Specialist Doctors
      </h2>
      <p className={`${styles.homeDoctorsSubtitle} ${animated ? styles.slideInLeft : ""}`}>
        Experienced and caring medical professionals dedicated to your health
      </p>

      {showLeft && (
  <button
    className={`${styles.homeArrow} ${styles.arrowLeft}`}
    onClick={scrollLeft}
    aria-label="Scroll Left"
  >
    &#8249;
  </button>
)}

{showRight && (
  <button
    className={`${styles.homeArrow} ${styles.arrowRight}`}
    onClick={scrollRight}
    aria-label="Scroll Right"
  >
    &#8250;
  </button>
)}

      <div
        className={styles.homeDoctorsCarousel}
        ref={carouselRef}
        onScroll={handleScroll}
      >
        {doctors.map((doctor) => (
          <div key={doctor.id} className={styles.carouselItem}>
            <DoctorsCards
              image={doctor.image}
              name={doctor.name}
              department={doctor.department}
              qualification={doctor.qualification}
              phone={doctor.phone}
              availability={doctor.availability}
            />
          </div>
        ))}
      </div>
    </div>
  );
}