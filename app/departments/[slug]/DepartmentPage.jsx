"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import styles from "./department.module.css";

// 1. Ensure all are imported correctly
import {
  FiStar,
  FiActivity,
  FiAward,
  FiHeart,
  FiUserCheck,
  FiPocket,
  FiLayers,
  FiSmile,
  FiShield,
  FiCpu
} from "react-icons/fi";

// 2. Define the map inside or outside the component
const iconMap = {
  FiStar: FiStar,
  FiActivity: FiActivity,
  FiAward: FiAward,
  FiHeart: FiHeart,
  FiUserCheck: FiUserCheck,
  FiPocket: FiPocket,
  FiLayers: FiLayers,
  FiSmile: FiSmile,
  FiShield: FiShield,
  FiCpu: FiCpu

};
/* ------------------ REUSABLE ANIMATION HOOK ------------------ */
const useSectionAnimation = () => {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, animate];
};

export default function DepartmentPage({ dept }) {
  const [highlightsRef, animateHighlights] = useSectionAnimation();
  const [servicesRef, animateServices] = useSectionAnimation();
  const [doctorsRef, animateDoctors] = useSectionAnimation();
  const [conditionsRef, animateConditions] = useSectionAnimation();

  return (
    <div className={styles.departmentPage}>
      {/* ================= HERO ================= */}
      <section className={styles.departmentHero}>
        <div className={styles.depHeroOverlay}>
          <h1 className={`${styles.depHeroTitle} ${styles.slideLeft}`}>{dept.name}</h1>
          <p className={`${styles.depHeroSubtitle} ${styles.slideLeft}`}>{dept.overview}</p>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className={styles.departmentAbout}>
        <div className={`${styles.aboutImage} ${styles.slideUp}`}>
          <Image
            src={dept.image}
            alt={dept.name}
            width={600}
            height={400}
            className={styles.aboutImg}
          />
        </div>

        <div className={`${styles.aboutContent} ${styles.slideRight}`}>
          <h2>About {dept.name}</h2>
          <p>{dept.about}</p>
        </div>
      </section>

      {/* ================= HIGHLIGHTS ================= */}
      <section className={styles.departmentHighlights} ref={highlightsRef}>
        <h2
          className={`${styles.sectionHeading} ${
            animateHighlights ? styles.sectionSlideLeft : ""
          }`}
        >
          Why Choose Our {dept.name} Department
        </h2>

        <div className={styles.highlightsGrid}>
          {dept.highlights?.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={i}
                className={`${styles.highlightCard} ${
                  animateHighlights ? `${styles.cardAnimate} ${styles[`card${i}`]}` : ""
                }`}
              >
                {Icon && <Icon className={styles.highlightIcon} size={40} />}
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className={styles.departmentServices} ref={servicesRef}>
        <h2
          className={`${styles.sectionHeading} ${
            animateServices ? styles.sectionSlideLeft : ""
          }`}
        >
          Services We Provide
        </h2>

        <div className={styles.servicesGrid}>
          {dept.services.map((service, i) => (
            <div
              key={i}
              className={`${styles.serviceCard} ${
                animateServices ? `${styles.cardAnimate} ${styles[`card${i}`]}` : ""
              }`}
            >
              <p>{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= DOCTORS ================= */}
      <section className={styles.departmentDoctorsHighlight} ref={doctorsRef}>
        <h2
          className={`${styles.sectionHeading} ${
            animateDoctors ? styles.sectionSlideLeft : ""
          }`}
        >
          Meet Our Experts
        </h2>

        <div className={styles.doctorsHighlightGrid}>
          {dept.doctors?.map((doc, i) => (
            <div
              key={i}
              className={`${styles.doctorHighlightCard} ${
                animateDoctors ? `${styles.cardAnimate} ${styles[`card${i}`]}` : ""
              }`}
            >
              <div className={styles.doctorImg}>
                <Image
                  src={doc.img}
                  alt={doc.name}
                  width={150}
                  height={150}
                />
              </div>

              <div className={styles.doctorInfo}>
                <h3>{doc.name}</h3>
                <p className={styles.doctorDesignation}>{doc.designation}</p>
                <p className={styles.doctorQualifications}>
                  {doc.qualifications.join(", ")}
                </p>
                <p className={styles.doctorExperience}>{doc.experience}</p>
                <p className={styles.doctorAbout}>{doc.about}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CONDITIONS ================= */}
      <section className={styles.departmentConditions} ref={conditionsRef}>
        <h2
          className={`${styles.sectionHeading} ${
            animateConditions ? styles.sectionSlideLeft : ""
          }`}
        >
          Common Conditions
        </h2>

        <div className={styles.conditionsGrid}>
          {dept.conditions.map((condition, i) => (
            <div
              key={i}
              className={`${styles.conditionCard} ${
                animateConditions ? `${styles.cardAnimate} ${styles[`card${i}`]}` : ""
              }`}
            >
              <p>{condition}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
