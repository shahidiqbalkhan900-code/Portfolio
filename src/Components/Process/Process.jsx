import styles from "./Process.module.css";

const steps = [
  { num: "01", title: "Requirement Discussion", desc: "We discuss your vision, goals, and requirements." },
  { num: "02", title: "Planning & Strategy", desc: "I create a roadmap and strategy for your project." },
  { num: "03", title: "Design & Development", desc: "Bringing your ideas to life with clean code." },
  { num: "04", title: "Testing & Review", desc: "Rigorous testing to ensure everything works perfectly." },
  { num: "05", title: "Deployment & Support", desc: "Launch and ongoing support for your peace of mind." },
];

const Process = () => (
  <section id="process" className={styles.section}>
    <div className={styles.container}>
      <h2 className={`${styles.title} ${styles.gradientText}`}>My Work Process</h2>
      <p className={styles.subtitle}>How I bring your ideas to life</p>

      <div className={styles.timeline}>
        <div className={styles.line} />
        <div className={styles.steps}>
          {steps.map((step) => (
            <div key={step.num} className={styles.step}>
              <div className={styles.stepNum}>{step.num}</div>
              <div className={styles.card}>
                <span className={styles.mobileNum}>{step.num}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Process;
