import { useState } from "react";
import { useTheme } from "../../Context/ThemeContext";
import styles from "./Navbar.module.css";

const links = ["Home", "About", "Skills", "Projects", "Services", "Contact"];

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const Navbar = () => {
  const { dark, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo("home"); }} className={styles.logo}>
          Shahid Khan
        </a>

        <ul className={styles.links}>
          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={(e) => { e.preventDefault(); scrollTo(item); }}
                className={styles.link}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <button onClick={toggle} className={styles.themeBtn} aria-label="Toggle theme">
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>

          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }} className={styles.hireBtn}>
            Hire Me
          </a>

          <button className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></> : <><line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="18" x2="20" y2="18" /></>}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileList}>
            {links.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => { e.preventDefault(); scrollTo(item); }}
                  className={styles.mobileLink}
                >
                  {item}
                </a>
              </li>
            ))}
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }} className={styles.mobileHire}>
              Hire Me
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
