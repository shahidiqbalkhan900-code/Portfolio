import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.inner}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <h3 className={styles.name}>Shahid Khan</h3>
          <p className={styles.role}>AI-Assisted Full Stack Web Developer</p>
        </div>
        <div className={styles.social}>
          {["GitHub", "LinkedIn", "Twitter", "Email"].map((s) => (
            <a key={s} href="#" className={styles.socialLink}>{s[0]}</a>
          ))}
        </div>
      </div>
      <hr className={styles.divider} />
      <p className={styles.copy}>&copy; {new Date().getFullYear()} Shahid Khan. All Rights Reserved.</p>
    </div>
  </footer>
);

export default Footer;
