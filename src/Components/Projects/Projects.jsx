import styles from "./Projects.module.css";

const projects = [
  { title: "Construction Website", tech: "React + Tailwind CSS", cat: "Frontend" },
  { title: "E-Commerce Store", tech: "Laravel + PHP", cat: "Backend" },
  { title: "Real Estate Website", tech: "PHP + CSS", cat: "Full Stack" },
  { title: "Hospital Management System", tech: "Laravel + MySQL", cat: "Backend" },
  { title: "Blog Website (CMS)", tech: "Laravel + PHP", cat: "Full Stack" },
  { title: "School Management System", tech: "Laravel + MySQL", cat: "Backend" },
];

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
);

const Projects = () => (
  <section id="projects" className={styles.section}>
    <div className={styles.container}>
      <h2 className={`${styles.title} ${styles.gradientText}`}>Featured Projects</h2>
      <p className={styles.subtitle}>Some of my recent work</p>

      <div className={styles.grid}>
        {projects.map((p, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.iconBox}>{p.title[0]}</div>
            <h3 className={styles.cardTitle}>{p.title}</h3>
            <p className={styles.tech}>{p.tech}</p>
            <div className={styles.footer}>
              <span className={styles.cat}>{p.cat}</span>
              <span className={styles.arrow}><ArrowIcon /></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
