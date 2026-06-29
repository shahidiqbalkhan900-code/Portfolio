import styles from "./Services.module.css";

const services = [
  { title: "Business Websites", desc: "Professional websites tailored to your brand identity.", icon: "🏢" },
  { title: "E-Commerce Solutions", desc: "Full-featured online stores with payment integrations.", icon: "🛒" },
  { title: "Web Applications", desc: "Scalable, high-performance web applications.", icon: "⚡" },
  { title: "Admin Dashboards", desc: "Data-rich dashboards for managing your business.", icon: "📊" },
  { title: "Website Maintenance", desc: "Ongoing support, updates, and performance optimization.", icon: "🔧" },
];

const Services = () => (
  <section id="services" className={styles.section}>
    <div className={styles.container}>
      <h2 className={`${styles.title} ${styles.gradientText}`}>Services</h2>
      <p className={styles.subtitle}>What I can do for you</p>

      <div className={styles.grid}>
        {services.map((s, i) => (
          <div key={i} className={styles.card}>
            <span className={styles.icon}>{s.icon}</span>
            <h3 className={styles.cardTitle}>{s.title}</h3>
            <p className={styles.desc}>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
