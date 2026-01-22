"use client";

import React from "react";
import styles from "./DoctorsCards.module.css";


function DoctorsCards({
  image,
  name,
  department,
  qualification,
  regNo,
  phone,
  availability,
}) {
  const profileImage =
    image?.trim() ? image : "/assets/doctors/dr1.png";

  return (
    <div className={styles.doctorCard}>
      <div className={styles.doctorImg} >
        <img src={profileImage}  alt={name || "Doctor"} />
      </div>

      <div className={styles.doctorCardInfo}>
        <h3>{name}</h3>
        <p className={styles.department}>{department}</p>
        <p className={styles.qualification}>{qualification}</p>
        <p className={styles.regNo}> {regNo}</p>

        <div className={styles.doctorContactRow}>
          <span className={styles.availability}>{availability}</span>
          <span className={styles.divider}></span>
          <span className={styles.phone}>{phone}</span>
        </div>
      </div>
    </div>
  );
}

export default DoctorsCards;
