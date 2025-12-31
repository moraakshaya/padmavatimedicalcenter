"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useParams } from "next/navigation";
import Link from "next/link";
import styles from "./blogDetails.module.css";
import blogData from "@/data/BlogData";

export default function BlogDetails() {
  const { slug } = useParams();
  const blog = blogData.find((item) => item.slug === slug);

  if (!blog) return <h2>Blog Not Found</h2>;

  const relatedPosts = blogData.filter(
    (item) => item.category === blog.category && item.slug !== blog.slug
  );

  /* ---------------- HERO ANIMATION ---------------- */
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
      { threshold: 0.2 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  /* ---------------- SIDEBAR + CONTENT ANIMATION ---------------- */
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);

  const [animateLeft, setAnimateLeft] = useState(false);
  const [animateRight, setAnimateRight] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimateLeft(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (leftContentRef.current) observer.observe(leftContentRef.current);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimateRight(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (rightContentRef.current) observer.observe(rightContentRef.current);
  }, []);

  return (
    <div>
      {/* ⭐ HERO SECTION ⭐ */}
      <section className={styles.blogDetailsHero} ref={heroRef}>
        <h1
          className={`${styles.blogDetailsHeroTitle} ${
            animateHero ? styles.slideLeft : ""
          }`}
        >
          {blog.title}
        </h1>

        <p
          className={`${styles.blogDetailsHeroDate} ${
            animateHero ? styles.slideLeft : ""
          }`}
        >
          {blog.date}
        </p>
      </section>

      <div className={styles.blogDetailContainer}>
        {/* -------- LEFT SIDEBAR -------- */}
        <aside className={styles.blogSidebar}>
          <div
            className={`${styles.sidebarInner} ${
              animateLeft ? styles.slideLeft : ""
            }`}
            ref={leftContentRef}
          >
            <h3 className={styles.stagger}>In This Article</h3>

            <ul>
              {blog.sections.map((section, i) => (
                <li
                  key={section.id}
                  className={styles.stagger}
                  style={{ "--d": i }}
                >
                  <Link href={`#${section.id}`}>{section.heading}</Link>
                </li>
              ))}
            </ul>

            <div
              className={`${styles.shareBox} ${styles.stagger}`}
              style={{ "--d": blog.sections.length + 1 }}
            >
              <h3>Share This Article</h3>
              {/* <div className={styles.shareIcons}>
                <a className={`${styles.shareIcon} ${styles.fb}`}>FB</a>
                <a className={`${styles.shareIcon} ${styles.ig}`}>IG</a>
                <a className={`${styles.shareIcon} ${styles.tw}`}>X</a>
                <a className={`${styles.shareIcon} ${styles.yt}`}>YT</a>
              </div> */}

              <div className={styles.shareIcons}>
      <a 
        href="https://facebook.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`${styles.shareIcon} ${styles.fb}`}
      >
        <FaFacebookF />
      </a>

      <a 
        href="https://instagram.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`${styles.shareIcon} ${styles.ig}`}
      >
        <FaInstagram />
      </a>

      <a 
        href="https://x.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`${styles.shareIcon} ${styles.tw}`}
      >
        <FaXTwitter />
      </a>

      <a 
        href="https://youtube.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`${styles.shareIcon} ${styles.yt}`}
      >
        <FaYoutube />
      </a>
    </div>
            </div>
          </div>
        </aside>

        {/* -------- MAIN CONTENT -------- */}
        <div className={styles.blogMain}>
          <div
            className={`${styles.blogMainInner} ${
              animateRight ? styles.slideLeft : ""
            }`}
            ref={rightContentRef}
          >
            {blog.sections.map((section, i) => (
              <section
                key={section.id}
                id={section.id}
                className={`${styles.blogSection} ${styles.stagger}`}
                style={{ "--d": i }}
              >
                <h2>{section.heading}</h2>

                {section.id === "introduction" && (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className={styles.introImage}
                  />
                )}

                {Array.isArray(section.content) ? (
                  <ul className={styles.blogList}>
                    {section.content.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{section.content}</p>
                )}
              </section>
            ))}

            {/* -------- RELATED POSTS -------- */}
            <div
              className={`${styles.relatedPosts} ${styles.stagger}`}
              style={{ "--d": blog.sections.length + 1 }}
            >
              <h3>Related Posts</h3>

              {relatedPosts.length === 0 ? (
                <p>No related posts found.</p>
              ) : (
                <div className={styles.relatedPostList}>
                  {relatedPosts.map((post) => (
                    <div className={styles.relatedPostCard} key={post.id}>
                      <img src={post.image} alt={post.title} />
                      <h4>{post.title}</h4>
                      <p className={styles.relatedDate}>{post.date}</p>

                      <Link
                        href={`/blog/${post.slug}`}
                        className={styles.readMoreBtn}
                      >
                        Read More →
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
