import styles from "./Hero.module.css";

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
);

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
);

const Hero = () => {
  return (
    <section id="home" className={styles.section}>
      <div className={styles.gradientBg} />
      <div className={styles.gridBg} />

      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeInner}>AI-Assisted Full Stack Web Developer</span>
        </div>

        <div className={styles.imageWrap}>
          <div className={styles.avatar}>
            <img src="/profile.jpg" alt="Shahid Khan" />
          </div>
          <span className={styles.statusDot} />
        </div>

        <h1 className={styles.heading}>
          Hi, I'm{" "}
          <span className={styles.gradientText}>Shahid Khan</span>
          <br />
          <span className={styles.subheading}>I Build Digital Experiences</span>
        </h1>

        <p className={styles.description}>
          I build modern, responsive, and high-performance websites using React, PHP, Laravel, and AI-powered tools.
        </p>

        <div className={styles.buttons}>
          <a href="#contact" className={styles.btnPrimary}>
            Hire Me <ArrowIcon />
          </a>
          <a href="#projects" className={styles.btnOutline}>View Projects</a>
          <a href="#" className={styles.btnOutline}>
            <DownloadIcon /> Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
