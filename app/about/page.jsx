"use client";

import React, { useEffect, useState, useRef } from "react";
import { FaHeart, FaAward, FaShieldAlt, FaUsers } from "react-icons/fa";
import styles from "./about.module.css";
import Image from "next/image";

function About() {
    /* HERO ANIMATION */
    const [animateHero, setAnimateHero] = useState(false);
    useEffect(() => {
        setTimeout(() => setAnimateHero(true), 100);
    }, []);

    /* ABOUT SECTION */
    const aboutRef = useRef(null);
    const [aboutVisible, setAboutVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAboutVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.3 }
        );
        if (aboutRef.current) observer.observe(aboutRef.current);
    }, []);

    /* LEADERSHIP */
    const leadershipRef = useRef(null);
    const [leadershipVisible, setLeadershipVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setLeadershipVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.3 }
        );
        if (leadershipRef.current) observer.observe(leadershipRef.current);
    }, []);

    /* QUALITY */
    const qualityRef = useRef(null);
    const [qualityVisible, setQualityVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setQualityVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.3 }
        );
        if (qualityRef.current) observer.observe(qualityRef.current);
    }, []);

    /* VALUES */
    const valuesRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (valuesRef.current) {
            observer.observe(valuesRef.current);
        }

        return () => {
            if (valuesRef.current) {
                observer.unobserve(valuesRef.current);
            }
        };
    }, []);

    /* STATS */
    const statsRef = useRef(null);
    const [statsVisible, setStatsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStatsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.3 }
        );
        if (statsRef.current) observer.observe(statsRef.current);
    }, []);

    return (
        <>
            {/* HERO */}
            <section className={styles.aboutHero}>
                <div
                    className={`${styles.aboutHeroContent} ${animateHero ? styles.animate : ""
                        }`}
                >
                    <h1 className={styles.aboutHeroTitle}>About Our Hospital</h1>
                    <p className={styles.aboutHeroSubtitle}>
                        Delivering compassionate care with modern medical excellence.
                    </p>
                </div>
            </section>

            {/* ABOUT */}
            <section className={styles.aboutDetailsSection} ref={aboutRef}>
                <div className={styles.aboutDetailsContainer}>
                    <div
                        className={`${styles.aboutImage} ${aboutVisible ? styles.slideInLeft : ""
                            }`}
                    >
                        <img src="/hospital.jpeg" alt="Hospital" />
                    </div>

                    <div
                        className={`${styles.aboutContent} ${aboutVisible ? styles.slideInRight : ""
                            }`}
                    >
                        <h2>About Padmavati Medical Centre</h2>
                        <p>
                            Padmavati Medical Centre is a trusted healthcare institution in Tarnaka, Hyderabad,
                            committed to providing compassionate, ethical, and quality medical services to patients and families.
                        </p>
                        <p>
                            Our hospital is built on the foundation of patient-first care, modern medical facilities,
                            and a multidisciplinary team of experienced doctors.
                        </p>
                        <p>
                            At the heart of our hospital’s excellence is our Medical Director,
                            <strong> Dr. G. Kondal Rao</strong>, a highly reputed and senior Interventional Cardiologist with nearly 30 years of clinical experience.
                        </p>
                        <p>
                            We specialize in advanced cardiac care, ethical medical practices, and patient-focused healthcare that you can trust.
                        </p>
                        {/* VISION & MISSION BOXES BELOW CONTENT */}
                        <div className={styles.visionMissionContainer}>
                            <div className={styles.vmBox}>
                                <h3>Our Vision</h3>
                                <p>
                                    To deliver <strong>patient-centric healthcare</strong> that is
                                    <strong> accessible, ethical, and guided by advanced medical knowledge</strong>.
                                </p>
                            </div>

                            <div className={styles.vmBox}>
                                <h3>Our Mission</h3>
                                <ul>
                                    <li>Provide <strong>high-quality medical services</strong> across multiple specialties</li>
                                    <li>Maintain a <strong>caring and healing environment</strong> for every patient</li>
                                    <li>Ensure <strong>transparency, compassion, and personalized care</strong></li>
                                    <li>Strengthen our hospital through <strong>continuous medical advancements</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* LEADERSHIP */}
            <section className={styles.leadershipSection} ref={leadershipRef}>
                <div className={`container ${styles.leadershipContainer}`}>
                    {/* LEFT CONTENT */}
                    <div
                        className={`${styles.leadershipContent} ${leadershipVisible ? styles.slideInLeft : ""
                            }`}
                    >
                        <h2>Leadership You Can Trust</h2>

                        <p>
                            At the heart of our hospital’s excellence is our{" "}
                            <strong>Medical Director, Dr. G. Kondal Rao</strong>, a senior{" "}
                            <strong>Interventional Cardiologist</strong> with nearly{" "}
                            <strong>30 years of clinical experience</strong>. Under his
                            leadership, <strong>Padmavati Medical Centre</strong> has become
                            a dependable center for comprehensive healthcare, with a special
                            focus on <strong>advanced cardiac care</strong>.
                        </p>

                        <h3>Dr. G. Kondal Rao’s Qualifications:</h3>

                        <ul>
                            <li>
                                <strong>MBBS</strong> – Kakatiya Medical College, 1988
                            </li>
                            <li>
                                <strong>MD (General Medicine)</strong> – Gandhi Medical College,
                                1992
                            </li>
                            <li>
                                <strong>DM (Cardiology)</strong> – Osmania Medical College, 1996
                            </li>
                            <li>
                                <strong>FSCAI</strong>, Fellow of the Society for Cardiovascular
                                Angiography & Interventions
                            </li>
                            <li>
                                <strong>Registration:</strong> 12607 – Andhra Pradesh Medical
                                Council (1998)
                            </li>
                        </ul>

                        <p>
                            Dr. Kondal Rao’s extensive experience in leading hospitals such
                            as{" "}
                            <strong>
                                Apollo, Yashoda, Kamineni, Sunshine, and Virinchi
                            </strong>{" "}
                            ensures that <strong>Padmavati Medical Centre</strong> adheres to
                            the highest standards of{" "}
                            <strong>medical competence and patient safety</strong>. His
                            expertise includes{" "}
                            <strong>
                                cardiac catheterization, angioplasty, heart valve procedures,
                                arrhythmia management, TMT, Holter monitoring, and critical
                                cardiac care
                            </strong>.
                        </p>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div
                        className={`${styles.leadershipImage} ${leadershipVisible ? styles.slideInRight : ""
                            }`}
                    >
                        <Image
                            src="/assets/doctors/dr-g-kondal-rao-cardiologist.png"
                            alt="Dr. G. Kondal Rao"
                            width={400}
                            height={450}
                            className={styles.doctorImage}
                        />

                    </div>
                </div>
            </section>


            {/* QUALITY */}
            <section
                className={`${styles.qualitySection} ${qualityVisible ? styles.slideInLeft : ""}`}
                ref={qualityRef}
            >
                <div className={styles.qualityContainer}>
                    <h2>Quality Healthcare You Can Rely On</h2>
                    <p>
                        Padmavati Medical Centre offers a wide range of medical services supported by
                        <strong> skilled specialists</strong> and <strong>modern facilities</strong>. While we cater
                        to various health needs, we are particularly recognized for our strong
                        <strong> cardiac services</strong> led by <strong>Dr. G. Kondal Rao</strong>.
                    </p>

                    <h3>Patients trust us for:</h3>
                    <ul className={styles.healthcarePoints}>
                        <li>✔ <strong>Evidence-based treatments</strong></li>
                        <li>✔ <strong>Experienced consultants</strong></li>
                        <li>✔ <strong>Modern diagnostic facilities</strong></li>
                        <li>✔ <strong>Personalized patient care</strong></li>
                        <li>✔ <strong>Ethical medical practices</strong></li>
                    </ul>

                    <h3>Committed to Your Well-Being</h3>
                    <p>
                        Every patient at Padmavati Medical Centre is treated with <strong>respect, empathy, and dedication</strong>.
                        Our team ensures accurate diagnosis, proper guidance, and effective treatment. With strong leadership,
                        expert doctors, and a patient-focused approach, we continue to serve the community with
                        <strong> excellence and care</strong>.
                    </p>
                </div>
            </section>


            {/* CORE VALUES */}
            <section className={styles.valuesSection} ref={valuesRef}>
                <div className="container">
                    <h2
                        className={`${styles.valuesSectionTitle} ${visible ? styles.slideInLeft : ""
                            }`}
                    >
                        Our Core Values
                    </h2>

                    <p
                        className={`${styles.valuesSectionSubtitle} ${visible ? `${styles.slideInLeft} ${styles.delay}` : ""
                            }`}
                    >
                        The principles that guide everything we do
                    </p>

                    <div className={styles.valuesGrid}>
                        <div
                            className={`${styles.valueCard} ${visible ? styles.slideInBottom : ""
                                }`}
                        >
                            <div className={styles.icon}>
                                <FaHeart />
                            </div>
                            <h4>Compassion</h4>
                            <p>We treat every patient with empathy, kindness, and respect</p>
                        </div>

                        <div
                            className={`${styles.valueCard} ${visible ? `${styles.slideInBottom} ${styles.delay1}` : ""
                                }`}
                        >
                            <div className={styles.icon}>
                                <FaAward />
                            </div>
                            <h4>Excellence</h4>
                            <p>We strive for the highest standards in medical care</p>
                        </div>

                        <div
                            className={`${styles.valueCard} ${visible ? `${styles.slideInBottom} ${styles.delay2}` : ""
                                }`}
                        >
                            <div className={styles.icon}>
                                <FaShieldAlt />
                            </div>
                            <h4>Integrity</h4>
                            <p>We uphold the highest ethical standards in all we do</p>
                        </div>

                        <div
                            className={`${styles.valueCard} ${visible ? `${styles.slideInBottom} ${styles.delay3}` : ""
                                }`}
                        >
                            <div className={styles.icon}>
                                <FaUsers />
                            </div>
                            <h4>Collaboration</h4>
                            <p>We work together as a team for better outcomes</p>
                        </div>
                    </div>
                </div>
            </section>



            {/* STATS */}
            <section className={styles.statsSection} ref={statsRef}>
                <div className="container">
                    <h2
                        className={`${styles.statsTitle} ${statsVisible ? styles.statsSlideLeft : ""
                            }`}
                    >
                        Our Achievements
                    </h2>

                    <p
                        className={`${styles.statsSubtitle} ${statsVisible ? `${styles.statsSlideLeft} ${styles.delay}` : ""
                            }`}
                    >
                        Milestones that define our excellence
                    </p>

                    <div className={styles.statsGrid}>
                        <div
                            className={`${styles.statCard} ${statsVisible ? styles.statsSlideBottom : ""
                                } ${styles.statsDelay}`}
                        >
                            <h3>30+</h3>
                            <p>Years of Service</p>
                        </div>

                        <div
                            className={`${styles.statCard} ${statsVisible ? styles.statsSlideBottom : ""
                                } ${styles.statsDelay2}`}
                        >
                            <h3>10K+</h3>
                            <p>Patients Treated</p>
                        </div>

                        <div
                            className={`${styles.statCard} ${statsVisible ? styles.statsSlideBottom : ""
                                } ${styles.statsDelay3}`}
                        >
                            <h3>17+</h3>
                            <p>Expert Doctors</p>
                        </div>

                        <div
                            className={`${styles.statCard} ${statsVisible ? styles.statsSlideBottom : ""
                                } ${styles.statsDelay4}`}
                        >
                            <h3>15</h3>
                            <p>Departments</p>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
}

export default About;
