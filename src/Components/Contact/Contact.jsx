import { useState } from "react";
import styles from "./Contact.module.css";

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
);
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
);
const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
);
const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polyline points="22 2 15 22 11 13 2 9 22 2" /></svg>
);
const Spinner = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.spinner}><circle cx="12" cy="12" r="10" strokeDasharray="32" strokeDashoffset="32" strokeLinecap="round" /></svg>
);

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const key = import.meta.env.VITE_WEB3FORMS_KEY;

    if (!key || key === "your_web3forms_key") {
      const mailto = `mailto:shahidiqbalkhan900@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent("Name: " + form.name + "\nEmail: " + form.email + "\n\n" + form.message)}`;
      window.location.href = mailto;
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: key,
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <h2 className={`${styles.title} ${styles.gradientText}`}>Get In Touch</h2>
        <p className={styles.subtitle}>Have a project in mind? Let's talk</p>

        <div className={styles.grid}>
          <div className={styles.infoCard}>
            <h3 className={styles.infoTitle}>Contact Info</h3>
            <ul className={styles.infoList}>
              <li className={styles.infoItem}>
                <span className={styles.iconBox}><MailIcon /></span>
                <div>
                  <p className={styles.infoLabel}>Email</p>
                  <p className={styles.infoValue}>
                    <a href="mailto:shahidiqbalkhan900@gmail.com" className={styles.link}>
                      shahidiqbalkhan900@gmail.com
                    </a>
                  </p>
                </div>
              </li>
              <li className={styles.infoItem}>
                <span className={`${styles.iconBox} ${styles.whatsappBox}`}><WhatsAppIcon /></span>
                <div>
                  <p className={styles.infoLabel}>WhatsApp</p>
                  <p className={styles.infoValue}>
                    <a href="https://wa.me/923285954830" target="_blank" rel="noopener noreferrer" className={styles.link}>
                      +92 328 5954830
                    </a>
                  </p>
                </div>
              </li>
              <li className={styles.infoItem}>
                <span className={styles.iconBox}><PinIcon /></span>
                <div>
                  <p className={styles.infoLabel}>Location</p>
                  <p className={styles.infoValue}>Pakistan</p>
                </div>
              </li>
            </ul>

            <div className={styles.social}>
              {["GitHub", "LinkedIn", "Twitter"].map((s) => (
                <a key={s} href="#" className={styles.socialLink}>{s[0]}</a>
              ))}
              <a href="https://wa.me/923285954830" target="_blank" rel="noopener noreferrer" className={`${styles.socialLink} ${styles.whatsappBtn}`}>
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label>Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" className={styles.input} required />
              </div>
              <div className={styles.field}>
                <label>Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className={styles.input} required />
              </div>
            </div>
            <div className={styles.field}>
              <label>Subject</label>
              <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="Project subject" className={styles.input} required />
            </div>
            <div className={styles.field}>
              <label>Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell me about your project..." className={styles.textarea} required />
            </div>
            <button type="submit" className={styles.submitBtn} disabled={status === "sending"}>
              {status === "sending" ? <>Sending <Spinner /></>
              : status === "sent" ? "Sent Successfully!"
              : status === "error" ? "Failed to Send — email me directly"
              : <>Send Message <SendIcon /></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
