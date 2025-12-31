import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.pmcFooter}>
      <div className={styles.footerContainer}>

        {/* -------- COLUMN 1 -------- */}
        <div className={styles.footerCol}>
          <Link href="/">
            <img
              src="/logo.png"
              alt="Padmavati Medical Center"
              className={styles.footerLogo}
            />
          </Link>

          <p className={styles.footerAddress}>
            Plot No. 12-13-60, Main Road, Tarnaka <br />
            Plot No. 12-13-67/2, Sadhashiv Nagar, Lane Adj. to Sanman Hotel,
            Street No. 5, Tarnaka, Secunderabad <br />
            500017
          </p>

          <h4 className={styles.footerHeading}>Follow Us</h4>

          <div className={styles.footerSocial}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* -------- COLUMN 2 -------- */}
        <div className={styles.footerCol}>
          <h4 className={styles.footerHeading}>Quick Links</h4>

          <ul className={styles.footerLinks}>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/doctors">Doctors</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/blog">Blogs</Link></li>
            <li><Link href="/testimonials">Testimonials</Link></li>
            <li><Link href="/insurance">Insurance</Link></li>
          </ul>
        </div>

        {/* -------- COLUMN 3 -------- */}
        <div className={styles.footerCol}>
          <h4 className={styles.footerHeading}>Departments</h4>

          <ul className={`${styles.footerLinks} ${styles.deptList}`}>
            <li><Link href="/departments/cardiology">Cardiology</Link></li>
            <li><Link href="/departments/general-medicine">General Medicine</Link></li>
            <li><Link href="/departments/diabetology">Diabetology</Link></li>
            <li><Link href="/departments/gastroenterology">Gastroenterology</Link></li>
            <li><Link href="/departments/pediatrics">Pediatrics</Link></li>
            <li><Link href="/departments/neurology">Neurology</Link></li>
            <li><Link href="/departments/pulmonology">Pulmonology</Link></li>
            <li><Link href="/departments/orthopedics">Orthopedics</Link></li>
            <li><Link href="/departments/nephrology">Nephrology</Link></li>
            <li><Link href="/departments/general-surgery">General Surgery</Link></li>
            <li><Link href="/departments/anesthesiology">Anesthesiology</Link></li>
            <li><Link href="/departments/pathology">Pathology</Link></li>
            <li><Link href="/departments/urology">Urology</Link></li>
            <li><Link href="/departments/dermatology">Dermatology</Link></li>
            <li><Link href="/departments/physiotherapy">Physiotherapy</Link></li>
          </ul>
        </div>

        {/* -------- COLUMN 4 -------- */}
        <div className={styles.footerCol}>
          <h4 className={styles.footerHeading}>Contact Us</h4>

          <div className={styles.footerRow}>
            <FaEnvelope className={styles.footerIcon} />
            <p>padmavatimedicalcenter2010@gmail.com</p>
          </div>

          <div className={styles.footerRow}>
            <FiPhoneCall className={styles.footerIcon} />
            <p>040-27007111</p>
          </div>

          <div className={styles.footerRow}>
            <FaPhone className={styles.footerIcon} />
            <p>+91 9160668686</p>
          </div>

          <div className={styles.footerRow}>
            <FaPhone className={styles.footerIcon} />
            <p>+91 9866635947</p>
          </div>

          <h4 className={`${styles.footerHeading} ${styles.legalTitle}`}>
            Legal
          </h4>

          <div className={styles.footerRow}>
            <div className={styles.verticalLine}></div>
            <Link href="/terms-&-conditions">Terms & Conditions</Link>
          </div>

          <div className={styles.footerRow}>
            <div className={styles.verticalLine}></div>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>

      {/* -------- BOTTOM BAR -------- */}
      <div className={styles.footerBottom}>
        <p>
          Developed by <strong>@Prodbiz Solutions Private Limited</strong>
        </p>
        <span className={styles.vDivider}></span>
        <p>&copy; {new Date().getFullYear()} Padmavati Medical Center</p>
      </div>
    </footer>
  );
}

export default Footer;
