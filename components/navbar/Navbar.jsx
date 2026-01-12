"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaChevronDown,
  FaPhoneAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import styles from "./Navbar.module.css";


const departments = [
  "Cardiology",
  "General Medicine",
  "Diabetology",
  "Gastroenterology",
  "Pediatrics",
  "Neurology",
  "Pulmonology",
  "Orthopedics",
  "Nephrology",
  "General Surgery",
  "Anesthesiology",
  "Pathology",
  "Urology",
  "Dermatology",
  "Physiotherapy",
  "Gynecology"
];

function Navbar() {
  const pathname = usePathname();

  const mobileMenuRef = useRef(null);
  const deptRef = useRef(null);
  const hamburgerRef = useRef(null);

  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [deptOpen, setDeptOpen] = useState(false);

  /* ---------------- STICKY NAV ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------- CLOSE MENU ---------------- */
  const closeMenu = () => {
    setMenuOpen(false);
    setDeptOpen(false);
  };

  /* ---------------- OUTSIDE CLICK ---------------- */
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        hamburgerRef.current &&
        hamburgerRef.current.contains(e.target)
      ) {
        return;
      }

      if (
        menuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target)
      ) {
        closeMenu();
      }

      if (
        deptOpen &&
        deptRef.current &&
        !deptRef.current.contains(e.target)
      ) {
        setDeptOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [menuOpen, deptOpen]);

  const isActive = (path) =>
    pathname === path ? styles["nav-active"] : "";

  return (
    <header
      className={`${styles["navbar-wrapper"]} ${
        sticky ? styles.sticky : ""
      }`}
    >
      <nav className={styles.navbar}>
        {/* LOGO */}
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <img src="/logo.png" alt="Hospital Logo" />
        </Link>

        {/* DESKTOP NAV */}
        <ul className={`${styles["nav-links"]} ${styles["desktop-nav"]}`}>
          <li>
            <Link href="/about" className={isActive("/about")}>
              About
            </Link>
          </li>

          <li>
            <Link href="/doctors" className={isActive("/doctors")}>
              Doctors
            </Link>
          </li>

          {/* DEPARTMENTS */}
          <li className={styles.dropdown}>
            <span className={styles["dropdown-title"]}>
              Departments <FaChevronDown />
            </span>

            <div className={styles["dropdown-menu"]}>
              <div className={styles["dropdown-grid"]}>
                {departments.map((dept, index) => {
                  const slug = dept
                    .toLowerCase()
                    .replace(/\s+/g, "-");

                  return (
                    <Link
                      key={index}
                      href={`/departments/${slug}`}
                      className={
                        pathname === `/departments/${slug}`
                          ? styles["nav-active"]
                          : ""
                      }
                    >
                      {dept}
                    </Link>
                  );
                })}
              </div>
            </div>
          </li>

          <li>
            <Link href="/gallery" className={isActive("/gallery")}>
              Gallery
            </Link>
          </li>

          <li>
            <Link href="/contact" className={isActive("/contact")}>
              Contact
            </Link>
          </li>

          <li>
            <Link href="/blog" className={isActive("/blog")}>
              Blogs
            </Link>
          </li>

          <li>
            <Link
              href="/testimonials"
              className={isActive("/testimonials")}
            >
              Testimonials
            </Link>
          </li>

          <li>
            <Link href="/insurance" className={isActive("/insurance")}>
              Insurance
            </Link>
          </li>

          <li className={styles["contact-icon"]}>
            <Link href="/contact">
              <FaPhoneAlt />
            </Link>
          </li>
        </ul>

        {/* HAMBURGER */}
        <div
          ref={hamburgerRef}
          className={styles.hamburger}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        ref={mobileMenuRef}
        className={`${styles["mobile-menu"]} ${
          menuOpen ? styles.active : ""
        }`}
      >
        <Link href="/about" onClick={closeMenu}>About</Link>
        <Link href="/doctors" onClick={closeMenu}>Doctors</Link>

        {/* MOBILE DEPARTMENTS */}
        <div className={styles["mobile-dept"]} ref={deptRef}>
          <span onClick={() => setDeptOpen((prev) => !prev)}>
            Departments{" "}
            <FaChevronDown
              className={deptOpen ? styles.rotate : ""}
            />
          </span>

          {deptOpen && (
            <div className={styles["mobile-dept-list"]}>
              {departments.map((dept, index) => {
                const slug = dept
                  .toLowerCase()
                  .replace(/\s+/g, "-");

                return (
                  <Link
                    key={index}
                    href={`/departments/${slug}`}
                    onClick={closeMenu}
                  >
                    {dept}
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        <Link href="/gallery" onClick={closeMenu}>Gallery</Link>
        <Link href="/contact" onClick={closeMenu}>Contact</Link>
        <Link href="/blog" onClick={closeMenu}>Blogs</Link>
        <Link href="/testimonials" onClick={closeMenu}>Testimonials</Link>
        <Link href="/insurance" onClick={closeMenu}>Insurance</Link>
      </div>
    </header>
  );
}

export default Navbar;
