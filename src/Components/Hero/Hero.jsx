import styles from "./Hero.module.css";

const roles = ["Full Stack Developer", "React Specialist", "Laravel Expert", "AI-Powered Developer"];

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
);
const DownloadIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
);
const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
);
const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);
const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);

const Hero = () => (
  <section id="home" className={styles.section}>
    <div className={styles.bgGlow} />
    <div className={styles.bgGrid} />
    <div className={styles.bgOrb} />

    <div className={styles.inner}>
      <div className={styles.textCol}>
        <div className={styles.availability}>
          <span className={styles.availDot} />
          Available for work
        </div>

        <h1 className={styles.heading}>
          Hi, I'm <span className={styles.gradientText}>Shahid Khan</span>
        </h1>

        <div className={styles.typewriter}>
          <span className={styles.roles}>
            {roles.map((r) => (
              <span key={r} className={styles.roleItem}>
                {r}
              </span>
            ))}
          </span>
          <span className={styles.cursor}>|</span>
        </div>

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

        <div className={styles.social}>
          <a href="#" className={styles.socialLink} aria-label="GitHub"><GitHubIcon /></a>
          <a href="#" className={styles.socialLink} aria-label="LinkedIn"><LinkedInIcon /></a>
          <a href="#" className={styles.socialLink} aria-label="Twitter"><TwitterIcon /></a>
          <a href="mailto:shahidiqbalkhan900@gmail.com" className={styles.socialLink} aria-label="Email">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
          </a>
        </div>
      </div>

      <div className={styles.visualCol}>
        <div className={styles.profileCard}>
          <div className={styles.profileGlow} />
          <div className={styles.avatar}>
            <img src="/profile.png" alt="Shahid Khan" />
          </div>
        </div>

        <span className={`${styles.floatingBadge} ${styles.badge1}`}>
          <span className={styles.badgeDot} style={{ background: '#61dafb' }} />
          React
        </span>
        <span className={`${styles.floatingBadge} ${styles.badge2}`}>
          <span className={styles.badgeDot} style={{ background: '#ff2d20' }} />
          Laravel
        </span>
        <span className={`${styles.floatingBadge} ${styles.badge3}`}>
          <span className={styles.badgeDot} style={{ background: '#777bb4' }} />
          PHP
        </span>
        <span className={`${styles.floatingBadge} ${styles.badge4}`}>
          <span className={styles.badgeDot} style={{ background: '#38bdf8' }} />
          Tailwind
        </span>
        <span className={`${styles.floatingBadge} ${styles.badge5}`}>
          <span className={styles.badgeDot} style={{ background: '#a855f7' }} />
          AI
        </span>
      </div>
    </div>
  </section>
);

export default Hero;
