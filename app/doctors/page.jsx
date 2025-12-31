"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./doctors.module.css";
import { doctors } from "../../data/Doctor";
import DoctorsCards from "@/components/doctorsCards/DoctorsCards";

export default function Doctors() {
  const [selectedDept, setSelectedDept] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef(null);
  const heroRef = useRef(null);
  const cardioRef = useRef(null);

  /* ================= FILTER LOGIC ================= */
  const filteredDoctors = doctors.filter((doc) => {
    const matchDept =
      selectedDept === "All" || doc.department === selectedDept;
    const query = searchQuery.toLowerCase();
    const matchName = doc.name.toLowerCase().includes(query);
    const matchDeptSearch = doc.department.toLowerCase().includes(query);
    return matchDept && (matchName || matchDeptSearch);
  });

  /* ================= CLOSE DROPDOWN ================= */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ================= HERO ANIMATION ================= */
  useEffect(() => {
    if (!heroRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          heroRef.current.classList.add(styles.show);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(heroRef.current);
  }, []);

  /* ================= CARDIO ANIMATION ================= */
  useEffect(() => {
    if (!cardioRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cardioRef.current.classList.add(styles.cardioShow);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(cardioRef.current);
  }, []);

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className={styles.doctorsHero} ref={heroRef}>
        <video className={styles.backgroundVideo} autoPlay loop muted>
          <source src="/doctors/herovideo.mp4" type="video/mp4" />
        </video>

        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <h1>Our Medical Team</h1>
          <p>
            Meet our team of highly qualified and experienced medical
            professionals
          </p>
        </div>
      </section>

      {/* ================= CARDIOLOGY SECTION ================= */}
      <section className={styles.cardioSection} ref={cardioRef}>
        <div className={styles.cardioContainer}>
          <span className={styles.cardioFeaturedTag}>
            ⭐ FEATURED SPECIALISTS
          </span>

          <h2 className={styles.cardioTitle}>
            Our <span className={styles.cardioHighlight}>Cardiology</span>{" "}
            Experts
          </h2>

          <p className={styles.cardioSubtitle}>
            Renowned cardiologists with extensive experience in treating heart
            conditions
          </p>

          <div className={styles.cardioCardsWrapper}>
            {doctors
              .filter((doc) => doc.department === "Cardiologist")
              .map((doctor, index) => (
                <DoctorsCards key={index} {...doctor} />
              ))}
          </div>
        </div>
      </section>

      {/* ================= ALL DOCTORS ================= */}
      <section className={styles.dmSection}>
        <div className={styles.dmContainer}>
          <h2 className={styles.dmTitle}>All Doctors</h2>
          <p className={styles.dmSubtitle}>
            Expert physicians across all medical specialties
          </p>

          {/* SEARCH + DROPDOWN */}
          <div className={styles.dmFilterBar}>
            <div
              className={styles.dmSearchDropdownWrapper}
              ref={dropdownRef}
            >
              <div className={styles.dmSearchBox}>
                <span className={styles.dmSearchIcon}>🔍</span>
                <input
                  type="text"
                  placeholder="Search doctor or department..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  suppressHydrationWarning={true} // Add this line
                />
                <button
                  className={styles.dmDropdownToggle}
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  ▼
                </button>
              </div>

              {showDropdown && (
                <div className={styles.dmDropdownMenu}>
                  <div
                    className={styles.dmDropdownItem}
                    onClick={() => {
                      setSelectedDept("All");
                      setShowDropdown(false);
                    }}
                  >
                    All Departments
                  </div>

                  {[...new Set(doctors.map((d) => d.department))]
                    .filter((dept) =>
                      dept.toLowerCase().includes(searchQuery)
                    )
                    .map((dept, i) => (
                      <div
                        key={i}
                        className={styles.dmDropdownItem}
                        onClick={() => {
                          setSelectedDept(dept);
                          setShowDropdown(false);
                        }}
                      >
                        {dept}
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>

          {/* DOCTOR CARDS */}
          <div className={styles.dmCardsWrapper}>
            {filteredDoctors.map((doctor, index) => (
              <DoctorsCards key={index} {...doctor} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
