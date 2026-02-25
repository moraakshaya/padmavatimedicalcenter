"use client";

import React, { useEffect, useState, useRef } from "react";
import { FaHeart, FaAward, FaShieldAlt, FaUsers } from "react-icons/fa";
import styles from "./about.module.css";
import Image from "next/image";

export default function AboutClient() {
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

            {/* ... rest of the component unchanged ... */}
        </>
    );
}
