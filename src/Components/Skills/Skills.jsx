import styles from "./Skills.module.css";

const skillData = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["PHP", "Laravel", "MySQL", "REST API"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Postman", "ChatGPT"],
  },
];

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
);

const Skills = () => (
  <section id="skills" className={styles.section}>
    <div className={styles.container}>
      <h2 className={`${styles.title} ${styles.gradientText}`}>Skills & Tools</h2>
      <p className={styles.subtitle}>Technologies and tools I work with</p>

      <div className={styles.grid}>
        {skillData.map((group) => (
          <div key={group.title} className={styles.card}>
            <h3 className={styles.cardTitle}>
              <span className={styles.dot} />
              {group.title}
            </h3>
            <ul className={styles.skillList}>
              {group.skills.map((skill) => (
                <li key={skill} className={styles.skillItem}>
                  <span className={styles.check}><CheckIcon /></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
