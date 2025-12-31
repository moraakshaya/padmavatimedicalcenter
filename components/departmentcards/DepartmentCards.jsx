"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./DepartmentCards.module.css";
import { departments } from "@/data/Department";

function DepartmentCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const sectionRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  /* ---------------- CAROUSEL SCROLL ---------------- */
  const handleScroll = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const scrollLeft = container.scrollLeft;
    
    // 0.9 represents the 90% width set in CSS for carouselCard
    const cardWidth = container.offsetWidth * 0.9; 
    const index = Math.round(scrollLeft / cardWidth);
    setCurrentIndex(index);
  };

  /* ---------------- INTERSECTION ANIMATION ---------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            setAnimated(true);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [animated]);

  // Updated: Removed "Learn More" link
  const renderCardContent = (dept) => (
    <>
      {dept.featured && <span className={styles.featuredBadge}>⭐ FEATURED</span>}
      <h3 className={styles.departmentHeading}>{dept.title}</h3>
      <p className={styles.departmentDesc}>{dept.description}</p>
    </>
  );

  return (
    <section className={styles.departmentsSection} ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={`${styles.departmentsTitle} ${animated ? styles.slideInLeft : ""}`}>
          Our Departments
        </h2>
        <p className={`${styles.departmentsSubtitle} ${animated ? styles.slideInLeft : ""}`}>
          Comprehensive medical services across multiple specialties
        </p>

        {/* ---------- DESKTOP GRID ---------- */}
        <div className={`${styles.departmentsGrid} ${styles.desktopView}`}>
          {departments.map((dept, index) => (
            <div
              key={dept.id || index}
              className={`${styles.departmentCard} ${
                dept.featured ? styles.featuredCard : ""
              } ${animated ? styles.slideUpFade : ""}`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {renderCardContent(dept)}
            </div>
          ))}
        </div>

        {/* ---------- MOBILE CAROUSEL ---------- */}
        <div className={styles.mobileViewWrapper}>
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className={`${styles.carouselContainer} ${styles.mobileView}`}
          >
            {departments.map((dept, index) => (
              <div
                key={dept.id || index}
                className={`${styles.carouselCard} ${
                  dept.featured ? styles.featuredCard : ""
                } ${animated ? styles.slideUpFade : ""}`}
              >
                {renderCardContent(dept)}
              </div>
            ))}
          </div>
          
          {/* Pagination dots - Using dotActive */}
          <div className={`${styles.carouselDots} ${styles.mobileView}`}>
            {departments.map((_, index) => (
              <span 
                key={index} 
                className={`${styles.dot} ${currentIndex === index ? styles.dotActive : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DepartmentCards;