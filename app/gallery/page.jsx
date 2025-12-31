"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./gallery.module.css";

const galleryData = [
  // Hospital Campaigns
  { id: 1, category: "events", img: "/gallery/gallery10.webp" },
  { id: 2, category: "events", img: "/gallery/events2.webp" },
  { id: 3, category: "events", img: "/gallery/events3.webp" },
  { id: 4, category: "events", img: "/gallery/events4.webp" },
  { id: 5, category: "events", img: "/gallery/events5.webp" },
  { id: 6, category: "events", img: "/gallery/events6.webp" },

  // Infrastructure
  { id: 7, category: "infrastructure", img: "/gallery/gallery1.webp" },
  { id: 8, category: "infrastructure", img: "/gallery/gallery2.webp" },
  { id: 9, category: "infrastructure", img: "/gallery/gallery3.webp" },
  { id: 10, category: "infrastructure", img: "/gallery/gallery4.webp" },
  { id: 11, category: "infrastructure", img: "/gallery/gallery5.webp" },
  { id: 12, category: "infrastructure", img: "/gallery/gallery6.webp" },
  { id: 13, category: "infrastructure", img: "/gallery/gallery7.webp" },
  { id: 14, category: "infrastructure", img: "/gallery/gallery8.webp" },
  { id: 15, category: "infrastructure", img: "/gallery/gallery9.webp" },
  { id: 16, category: "infrastructure", img: "/gallery/infa1.webp" },
  { id: 17, category: "infrastructure", img: "/gallery/infa2.webp" },
  { id: 18, category: "infrastructure", img: "/gallery/infa3.webp" },
  { id: 19, category: "infrastructure", img: "/gallery/infa4.webp" },
  { id: 20, category: "infrastructure", img: "/gallery/infa5.webp" },
  { id: 21, category: "infrastructure", img: "/gallery/infa6.webp" },
  { id: 22, category: "infrastructure", img: "/gallery/infa7.webp" },
  { id: 23, category: "infrastructure", img: "/gallery/infa8.webp" },
  { id: 24, category: "infrastructure", img: "/gallery/infa9.webp" },
  { id: 25, category: "infrastructure", img: "/gallery/infa10.webp" },
  { id: 26, category: "infrastructure", img: "/gallery/infa11.webp" },
  { id: 27, category: "infrastructure", img: "/gallery/infa12.webp" },
  { id: 28, category: "infrastructure", img: "/gallery/infa13.webp" },
  { id: 29, category: "infrastructure", img: "/gallery/infa14.webp" },
  { id: 30, category: "infrastructure", img: "/gallery/infa15.webp" },
  { id: 31, category: "infrastructure", img: "/gallery/infa16.webp" },
];

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    selectedFilter === "all"
      ? galleryData
      : galleryData.filter(
          (item) => item.category === selectedFilter
        );

  /* ================= HERO ANIMATION ================= */
  const heroRef = useRef(null);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeroVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  /* ================= GALLERY ANIMATION ================= */
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [animateLeft, setAnimateLeft] = useState(false);
  const [animateRight, setAnimateRight] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === leftRef.current) setAnimateLeft(true);
            if (entry.target === rightRef.current) setAnimateRight(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    if (window.innerWidth < 768) setAnimateRight(true);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className={styles.galleryHero} ref={heroRef}>
        <h1
          className={`${styles.galleryTitle} ${
            heroVisible ? styles.slideInLeft : ""
          }`}
        >
          Hospital Gallery
        </h1>
      <p
  className={`${styles.gallerySubtitle} ${
    heroVisible ? `${styles.slideInLeft} ${styles.slideInLeftDelay}` : ""
  }`}
>
  Explore our facilities, patient care moments, and dedicated doctors at work.
</p>
         
      </section>

      {/* ================= MAIN ================= */}
      <section className={`${styles.galleryMain} container`}>
        {/* LEFT */}
        <div
          ref={leftRef}
          className={`${styles.galleryLeft} ${
            animateLeft ? styles.slideInLeft : ""
          }`}
        >
          <h3>Filter by Category</h3>
          <ul className={styles.galleryFilters}>
            <li
              className={selectedFilter === "all" ? styles.active : ""}
              onClick={() => setSelectedFilter("all")}
            >
              All
            </li>
            <li
              className={selectedFilter === "events" ? styles.active : ""}
              onClick={() => setSelectedFilter("events")}
            >
              Health Campaigns
            </li>
            <li
              className={selectedFilter === "infrastructure" ? styles.active : ""}
              onClick={() => setSelectedFilter("infrastructure")}
            >
              Infrastructure
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div
          ref={rightRef}
          className={`${styles.galleryRight} ${
            animateRight ? styles.slideInBottom : ""
          }`}
        >
          <div className={styles.galleryGrid}>
            {filteredImages.map((img) => (
              <div
                key={img.id}
                className={styles.galleryCard}
                onClick={() => setSelectedImage(img.img)}
              >
                <img src={img.img} alt="gallery" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {selectedImage && (
        <div
          className={styles.imageModal}
          onClick={() => setSelectedImage(null)}
        >
          <div
            className={styles.imageModalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedImage} alt="full view" />
            <button
              className={styles.gallCloseBtn}
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
