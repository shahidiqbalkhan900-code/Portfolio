import { useState, useEffect, useRef } from "react";
import styles from "./Stats.module.css";

const stats = [
  { label: "Projects Completed", num: 10, suffix: "+" },
  { label: "Technologies Used", num: 20, suffix: "+" },
  { label: "Happy Clients", num: 15, suffix: "+" },
  { label: "Client Satisfaction", num: 100, suffix: "%" },
];

function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const raf = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [started, end, duration]);

  return { count, ref };
}

function StatCard({ stat }) {
  const { count, ref } = useCountUp(stat.num);
  return (
    <div ref={ref} className={styles.card}>
      <div className={styles.value}>
        {count}{stat.suffix}
      </div>
      <p className={styles.label}>{stat.label}</p>
    </div>
  );
}

const Stats = () => (
  <section id="stats" className={styles.section}>
    <div className={styles.container}>
      <h2 className={`${styles.title} ${styles.gradientText}`}>My Stats</h2>
      <p className={styles.subtitle}>Numbers that speak for themselves</p>
      <div className={styles.grid}>
        {stats.map((s, i) => (
          <StatCard key={i} stat={s} />
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
