"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import styles from "./home.module.css";
import Link from "next/link";

import {
  FaHeartbeat,
  FaUserMd,
  FaHospitalAlt,
  FaHandsHelping,
  FaRegHeart,
  FaAmbulance,
  FaCalendarCheck,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

import DepartmentCards from "@/components/departmentcards/DepartmentCards";
import HomeDoctorsSection from "@/components/homedoctorssection/HomeDoctorsSection";

export default function Home() {
  const router = useRouter();

  const [emergencyOpen, setEmergencyOpen] = useState(false);

  const heroRef = useRef(null);
  const whyRef = useRef(null);
  const cardioRef = useRef(null);
  const testimonialRef = useRef(null);

  const [animateWhy, setAnimateWhy] = useState(false);
  const [animateCardio, setAnimateCardio] = useState(false);
  const [animateTestimonial, setAnimateTestimonial] = useState(false);

  /* WHY SECTION */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateWhy(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (whyRef.current) observer.observe(whyRef.current);
  }, []);

  /* CARDIOLOGY */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateCardio(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (cardioRef.current) observer.observe(cardioRef.current);
  }, []);

  /* TESTIMONIAL */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateTestimonial(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (testimonialRef.current) observer.observe(testimonialRef.current);
    return () => observer.disconnect();
  }, []);



  const testimonials = [
    {
      name: "Rajesh Kumar",
      text: "The cardiology team saved my life. Dr. Kondal Rao and his staff are exceptional. The care and attention I received was beyond my expectations.",
    },
    {
      name: "Priya Reddy",
      text: "Excellent facilities and caring doctors. My father's surgery was successful thanks to Dr. Prashanth Kumar's expertise. Highly recommended!",
    },
    {
      name: "Amit Patel",
      text: "Professional staff, clean environment, and state-of-the-art equipment. The physiotherapy department helped me recover quickly from my injury.",
    },
  ];




  return (
    <>
      {/* HERO SECTION */}
      <section className={styles.homeHeroSection} ref={heroRef}>
        <div className={styles.homeHeroOverlay}></div>

        <div className={styles.homeHeroContent}>
          <div className={styles.homeHeroText}>
            <h1>
              YOUR HEALTH, OUR <br />
              <span>PRIORITY</span>
            </h1>
            <p>
              Providing trusted medical care with modern facilities and
              experienced doctors.
            </p>
          </div>

          <div className={styles.homeHeroImage}>
            <Image src="/hp.png" alt="Doctor" width={500} height={500} priority />
          </div>
        </div>

        {/* HERO CARDS */}
        <div className={styles.homeHeroCards}>
          <div
            className={styles.heroCard}
            onClick={() => setEmergencyOpen(true)}
          >
            <FaAmbulance className={styles.heroIcon} />
            <h4>Emergency</h4>
          </div>

          <Link href="/book-appointment" className={styles.heroCard}>
            <FaCalendarCheck className={styles.heroIcon} />
            <h4>Book Appointment</h4>
          </Link>
          
          <div
            className={styles.heroCard}
            onClick={() =>
              window.open("https://wa.me/919160668686", "_blank")
            }
          >
            <FaWhatsapp className={styles.heroIcon} />
            <h4>WhatsApp</h4>
          </div>

          <div
            className={styles.heroCard}
            onClick={() =>
              window.open(
                "https://www.google.com/maps/dir//Padmavati+Medical+Center",
                "_blank"
              )
            }
          >
            <FaMapMarkerAlt className={styles.heroIcon} />
            <h4>Location</h4>
          </div>
        </div>

      </section>

      {/* EMERGENCY MODAL */}
      {emergencyOpen && (
        <div className={styles.emergencyModal}>
          <div className={styles.emergencyBox}>
            <div className={styles.emergencyHeader}>
              Emergency Contact
              <span onClick={() => setEmergencyOpen(false)}>✖</span>
            </div>
            <div className={styles.emergencyBody}>
              <p>☎ Hospital: +91 9160668686</p>
              <p>🏥 24/7 Available</p>
            </div>
          </div>
        </div>
      )}

      {/* WHY SECTION */}
      <section className={styles.whySection} ref={whyRef}>
        <h2 className={`${styles.whyTitle} ${animateWhy ? styles.titleAnimate : ""}`}>
          Why Choose Padmavati Medical Center?
        </h2>

        <div className={styles.whyCards}>

          {/* CARD 1 */}
          <div className={`${styles.whyCard} ${animateWhy ? `${styles.cardAnimate} ${styles.delay1}` : ""}`}>
            <div className={`${styles.whyIcon} ${styles.iconBlue}`}>
              <FaHeartbeat />
            </div>
            <h3>24/7 Emergency Care</h3>
            <p>Immediate and round-the-clock emergency care with rapid response.</p>
          </div>

          {/* CARD 2 */}
          <div className={`${styles.whyCard} ${animateWhy ? `${styles.cardAnimate} ${styles.delay2}` : ""}`}>
            <div className={`${styles.whyIcon} ${styles.iconGold}`}>
              <FaUserMd />
            </div>
            <h3>Experienced Specialists</h3>
            <p>Highly skilled and qualified doctors across all major departments.</p>
          </div>

          {/* CARD 3 */}
          <div className={`${styles.whyCard} ${animateWhy ? `${styles.cardAnimate} ${styles.delay3}` : ""}`}>
            <div className={`${styles.whyIcon} ${styles.iconBlue}`}>
              <FaHospitalAlt />
            </div>
            <h3>Modern Infrastructure</h3>
            <p>Advanced facilities equipped with the latest medical technology.</p>
          </div>

          {/* CARD 4 */}
          <div className={`${styles.whyCard} ${animateWhy ? `${styles.cardAnimate} ${styles.delay4}` : ""}`}>
            <div className={`${styles.whyIcon} ${styles.iconPink}`}>
              <FaHandsHelping />
            </div>
            <h3>Patient-First Approach</h3>
            <p>Compassionate care tailored to every patient’s unique needs.</p>
          </div>

        </div>
      </section>

      {/* CARDIOLOGY */}
      <section className={styles.homeCardiologySection} ref={cardioRef}>
        <div className={styles.homeCardiologyContainer}>

          <div className={`${styles.homeCardiologyImage} ${animateCardio ? styles.slowSlideUp : ""}`}>
            <img src="/cardiology.webp" alt="Cardiology" />
          </div>

          <div className={styles.homeCardiologyContent}>
            <span className={`${styles.tag} ${animateCardio ? styles.slideLeft : ""}`}>
              ⭐Featured Department
            </span>

            <h2 className={animateCardio ? `${styles.slideLeft} ${styles.delay1}` : ""}>
              Excellence in <span>Cardiology</span> Care
            </h2>

            <p className={`${styles.description} ${animateCardio ? `${styles.slideLeft} ${styles.delay2}` : ""}`}>
              Comprehensive heart care with advanced diagnostic and treatment facilities.
            </p>

            <ul className={styles.homeCardiologyList}>
              <li className={animateCardio ? `${styles.slideLeft} ${styles.delay3}` : ""}>
                <span className={styles.iconCircle}><FaRegHeart /></span> Angiogram & Angioplasty
              </li>
              <li className={animateCardio ? `${styles.slideLeft} ${styles.delay3}` : ""}>
                <span className={styles.iconCircle}><FaRegHeart /></span>  ECG & Echo Tests
              </li>
              <li className={animateCardio ? `${styles.slideLeft} ${styles.delay3}` : ""}>
                <span className={styles.iconCircle}><FaRegHeart /></span>Cardiac ICU & Emergency Care
              </li>
              <li className={animateCardio ? `${styles.slideLeft} ${styles.delay3}` : ""}>
                <span className={styles.iconCircle}><FaRegHeart /></span> Expert Cardiologists
              </li>
            </ul>

            <Link
              href="/departments/cardiology"
              className={`${styles.learnBtn} ${animateCardio ? styles.slideLeft : ""
                } ${animateCardio ? styles.delay7 : ""}`}
            >
              Explore Cardiology →
            </Link>

          </div>
        </div>
      </section>

      <DepartmentCards />
      <HomeDoctorsSection />

      {/* TESTIMONIALS */}
      <section className={styles.testimonialsSection} ref={testimonialRef}>
        <h2 className={`${styles.testimonialsTitle} ${animateTestimonial ? styles.slideInLeft : ""}`}>
          Patient Testimonials
        </h2>
        <p className={`${styles.testimonialsSubtitle} ${animateTestimonial ? styles.slideInLeft : ""}`}>
          Hear what our patients have to say about their experience
        </p>

        <a
          href="https://share.google/vrspeyG6Xo0jwhFLi"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.reviewsBtn}
        >
          ⭐ Read More Google Reviews
        </a>

        <div className={styles.testimonialsContainer}>
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`${styles.testimonialCard} ${animateTestimonial ? styles.slideUpFade : ""}`}
              style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
            >
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.testimonialText}>"{t.text}"</p>
              <h4 className={styles.testimonialName}>{t.name}</h4>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
