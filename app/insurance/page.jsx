"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./insurance.module.css";
import {
  FaHeadset,
  FaBolt,
  FaHandshake,
  FaShieldAlt,
} from "react-icons/fa";

export default function Insurance() {
  /* =========================
     FORM STATE
  ========================= */
  const [result, setResult] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    insuranceType: "",
    startDate: "",
    coverageAmount: "",
    notes: "",
  });

  const handleModal = () => setShowModal(!showModal);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const formDataToSend = new FormData(e.target);
    formDataToSend.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataToSend,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Quote Request Sent Successfully!");
      e.target.reset();
      setShowModal(false);
    } else {
      setResult("Something went wrong!");
    }
  };

  /* =========================
     DATA
  ========================= */
  const benefitsData = [
    { icon: <FaHeadset />, title: "24/7 Support", desc: "We are always here to assist you." },
    { icon: <FaBolt />, title: "Fast Claims", desc: "Quick and hassle-free claim process." },
    { icon: <FaHandshake />, title: "Trusted Partner", desc: "Serving thousands of happy customers." },
    { icon: <FaShieldAlt />, title: "Secure & Reliable", desc: "Your data and policy are safe with us." },
  ];

  const insuranceCompanies = [
    { name: "The New India Assurance Company Limited", img: "/insurance/newindia.webp" },
    { name: "Oriental Insurance Co. Ltd", img: "/insurance/oriental.webp" },
    { name: "National Insurance Co. Ltd", img: "/insurance/national.webp" },
    { name: "United India Insurance Co Ltd", img: "/insurance/united.webp" },
    { name: "ICICI Lombard General Insurance Co. Ltd", img: "/insurance/icici.webp" },
    { name: "TATA AIG General Insurance Co. Ltd.", img: "/insurance/tataaig.webp" },
    { name: "Star Health & Allied Insurance", img: "/insurance/star.webp" },
    { name: "Safeway Insurance", img: "/insurance/safeway.webp" },
    { name: "Heritage Health Insurance", img: "/insurance/heritage.webp" },
    { name: "SBI General Insurance Co. Ltd", img: "/insurance/sbi.webp" },
    { name: "FHPL Insurance", img: "/insurance/fhpl.webp" },
    { name: "Volo Health Insurance", img: "/insurance/volo.webp" },
  ];

  /* =========================
     ANIMATIONS
  ========================= */
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const insuranceListRef = useRef(null);
  const benefitsRef = useRef(null);
  const processRef = useRef(null);

  const [heroAnimated, setHeroAnimated] = useState(false);
  const [listAnimated, setListAnimated] = useState(false);
  const [benefitsAnimated, setBenefitsAnimated] = useState(false);
  const [processAnimated, setProcessAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !heroAnimated) {
          textRef.current.classList.add(styles.slideInLeft);
          imageRef.current.classList.add(styles.slideInBottom);
          setHeroAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (textRef.current && imageRef.current) {
      observer.observe(textRef.current);
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, [heroAnimated]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setListAnimated(true);
          observer.unobserve(insuranceListRef.current);
        }
      },
      { threshold: 0.3 }
    );

    if (insuranceListRef.current) observer.observe(insuranceListRef.current);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBenefitsAnimated(true);
          observer.unobserve(benefitsRef.current);
        }
      },
      { threshold: 0.3 }
    );

    if (benefitsRef.current) observer.observe(benefitsRef.current);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProcessAnimated(true);
          observer.unobserve(processRef.current);
        }
      },
      { threshold: 0.3 }
    );

    if (processRef.current) observer.observe(processRef.current);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className={styles.insuHero}>
        <div className={styles.insuHeroContent} ref={textRef}>
          <h1>Protecting What Matters Most</h1>
          <p>Comprehensive insurance solutions tailored for you.</p>
          <button className={styles.ctaPrimary} onClick={handleModal}>
            Get a Quote
          </button>
        </div>

        <div className={styles.insuHeroImage} ref={imageRef}>
          <img src="/insurance/insurance.webp" alt="Insurance" />
        </div>
      </section>

      {/* MODAL */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={handleModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h2>Request a Quote</h2>

            <form onSubmit={handleSubmit}>
  <div className={styles.formGroup}>
    <input
      type="text"
      name="name"
      placeholder=" "
      value={formData.name}
      onChange={handleChange}
      required
    />
    <label>Full Name</label>
  </div>

  <div className={styles.formGroup}>
    <input
      type="email"
      name="email"
      placeholder=" "
      value={formData.email}
      onChange={handleChange}
      required
    />
    <label>Email</label>
  </div>

  <div className={styles.formGroup}>
    <input
      type="tel"
      name="phone"
      placeholder=" "
      value={formData.phone}
      onChange={handleChange}
      required
    />
    <label>Phone</label>
  </div>

  <div className={styles.formGroup}>
    <input
      type="date"
      name="startDate"
      value={formData.startDate}
      onChange={handleChange}
    />
    <label>Policy Start Date</label>
  </div>

  <div className={styles.formGroup}>
    <input
      type="number"
      name="coverageAmount"
      placeholder=" "
      value={formData.coverageAmount}
      onChange={handleChange}
    />
    <label>Coverage Amount</label>
  </div>

  <div className={styles.formGroup}>
    <textarea
      name="notes"
      placeholder=" "
      value={formData.notes}
      onChange={handleChange}
    />
    <label>Additional Notes</label>
  </div>

  <button type="submit" className={styles.submitBtn}>Submit</button>
  <button type="button" className={styles.closeBtn} onClick={handleModal}>
    Close
  </button>

  <p>{result}</p>
</form>

          </div>
        </div>
      )}
         


      {/* PARTNERS */}
      <section className={styles.insuranceList} ref={insuranceListRef}>
        <h2 className={`${styles.insuranceTitle} ${listAnimated ? styles.animateInsuranceTitle : ""}`}>
          Our Insurance Partners
        </h2>

        <ul className={styles.insuranceItems}>
          {insuranceCompanies.map((item, index) => (
            <li
              key={index}
              className={`${styles.insuranceRow} ${listAnimated ? styles.animateInsuranceRow : ""}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <img src={item.img} alt={item.name} />
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* BENEFITS */}
      <section className={styles.benefits} ref={benefitsRef}>
        <h2 className={`${styles.benefitsTitle} ${benefitsAnimated ? styles.animateTitle : ""}`}>
          Why Choose Us
        </h2>

        <div className={styles.benefitsGrid}>
          {benefitsData.map((item, index) => (
            <div
              key={index}
              className={`${styles.benefitCard} ${benefitsAnimated ? styles.animateCard : ""}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={styles.icon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
     {/* INSURANCE PROCESS SECTION */}
<section className={styles.insuranceProcess} ref={processRef}>
  <h2
    className={`${styles.processTitle} ${
      processAnimated ? styles.animateTitle : ""
    }`}
  >
    How Our Insurance Process Works
  </h2>

  <div className={styles.processSteps}>
    {[
      {
        number: "1",
        title: "Visit Our Hospital",
        desc: "The patient visits for consultation or treatment.",
      },
      {
        number: "2",
        title: "Submit Insurance Details",
        desc: "Provide your insurance card, TPA ID, or policy number.",
      },
      {
        number: "3",
        title: "Verification & Approval",
        desc: "Our insurance desk verifies your coverage with the insurance provider.",
      },
      {
        number: "4",
        title: "Cashless / Reimbursement",
        desc: "After approval, your treatment billing is processed smoothly.",
      },
    ].map((step, index) => (
      <div
        key={index}
        className={`${styles.processStep} ${
          processAnimated ? styles.animateStep : ""
        }`}
        style={{ transitionDelay: `${index * 0.1}s` }} // stagger animation
      >
        <div className={styles.stepNumber}>{step.number}</div>
        <h3>{step.title}</h3>
        <p>{step.desc}</p>
      </div>
    ))}
  </div>
</section>

    </>
  );
}
