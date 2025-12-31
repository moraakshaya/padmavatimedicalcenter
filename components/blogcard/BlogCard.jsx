"use client";

import React from "react";
import Link from "next/link";
import styles from "./BlogCard.module.css";

function BlogCard({ image, title, description, date, slug }) {
  return (
    <div className={styles.blogCard}>
      <div className={styles.blogCardImage}>
        <img src={image} alt={title} />
      </div>

      <div className={styles.blogCardContent}>
        <p className={styles.blogCardDate}>{date}</p>
        <h3 className={styles.blogCardTitle}>{title}</h3>
        <p className={styles.blogCardDesc}>{description}</p>

        <Link href={`/blog/${slug}`}>
          <button className={styles.blogCardBtn}>
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
