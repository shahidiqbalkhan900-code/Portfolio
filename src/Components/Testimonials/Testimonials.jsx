import styles from "./Testimonials.module.css";

const testimonials = [
  { name: "Al Raza", role: "Business Owner", text: "Shahid delivered beyond expectations. The website was fast, responsive, and perfectly aligned with my brand." },
  { name: "Sersh Khan", role: "CEO, TechSolutions", text: "Professional and reliable developer. Great communication and high-quality work delivered on time." },
  { name: "Usman Ahmed", role: "Entrepreneur", text: "High quality work and great communication. Would definitely recommend Shahid for any web project." },
];

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
);

const Testimonials = () => (
  <section id="testimonials" className={styles.section}>
    <div className={styles.container}>
      <h2 className={`${styles.title} ${styles.gradientText}`}>What Clients Say</h2>
      <p className={styles.subtitle}>Feedback from people I've worked with</p>

      <div className={styles.grid}>
        {testimonials.map((t, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, j) => (
                <span key={j} className={styles.star}><StarIcon /></span>
              ))}
            </div>
            <p className={styles.text}>"{t.text}"</p>
            <div className={styles.author}>
              <h3 className={styles.name}>{t.name}</h3>
              <p className={styles.role}>{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
