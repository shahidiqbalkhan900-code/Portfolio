import styles from "./About.module.css";

const About = () => (
  <section id="about" className={styles.section}>
    <div className={styles.container}>
      <h2 className={`${styles.title} ${styles.gradientText}`}>About Me</h2>
      <p className={styles.subtitle}>Get to know me better</p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Personal Info</h3>
          <ul className={styles.infoList}>
            {[
              ["Name", "Shahid Khan"],
              ["Email", "shahidkhan@example.com"],
              ["Location", "Pakistan"],
              ["Experience", "AI-Assisted Developer"],
              ["Availability", "Remote Work"],
            ].map(([label, value]) => (
              <li key={label} className={styles.infoItem}>
                <span className={styles.label}>{label}:</span>
                <span className={styles.value}>{value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Who I Am</h3>
          <p className={styles.text}>
            I'm an Electronics Engineer and Web Developer passionate about building modern web applications.
          </p>
          <p className={styles.text}>
            I combine technical skills with AI tools like ChatGPT, OpenCede, and Z.ai to deliver high-performance solutions.
          </p>
          <div className={styles.tags}>
            {["React", "Laravel", "PHP", "AI"].map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
