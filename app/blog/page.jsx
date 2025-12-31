"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./blog.module.css";
import BlogCard from "@/components/BlogCard/BlogCard";
import blogData from "@/data/BlogData";

export default function Blog() {
  /* ---------------- HERO ANIMATION ---------------- */
  const heroRef = useRef(null);
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

    if (heroRef.current) observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, []);

  /* ---------------- BLOG CARDS ANIMATION ---------------- */
  const blogSectionRef = useRef(null);
  const [animateBlogs, setAnimateBlogs] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimateBlogs(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (blogSectionRef.current) {
      observer.observe(blogSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ---------------- HERO SECTION ---------------- */}
      <section className={styles.blogHero} ref={heroRef}>
        <h1
          className={`${styles.blogTitle} ${
            animate ? styles.slideLeft : ""
          }`}
        >
          Our Blog
        </h1>

        <p
          className={`${styles.blogSubtitle} ${
            animate ? `${styles.slideLeft} ${styles.delay}` : ""
          }`}
        >
          Explore the latest health tips, news, and expert advice from our experts.
        </p>
      </section>

      {/* ---------------- BLOG CARDS ---------------- */}
      <section className={styles.blogSection} ref={blogSectionRef}>
        <div className={styles.container}>
          <div
            className={`${styles.blogCardWrapper} ${
              animateBlogs ? styles.animate : ""
            }`}
          >
            {blogData.map((blog) => (
              <BlogCard
                key={blog.id}
                slug={blog.slug}
                image={blog.image}
                title={blog.title}
                description={blog.description}
                date={blog.date}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
