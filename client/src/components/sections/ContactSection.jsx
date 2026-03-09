import { motion } from "framer-motion";
import "./ContactSection.css";

const checkItems = [
  "Personalised Advice",
  "Priority service",
  "Exclusive Opportunities",
];

export default function ContactSection() {
  return (
    <section className="contact-section" aria-label="Contact Us">
      {/* Background */}
      <motion.div
        className="contact-section__bg"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/image%2033.png)`,
        }}
        initial={{ scale: 1.06 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="contact-section__overlay" aria-hidden="true" />

      {/* Main two-column content */}
      <div className="contact-section__body">
        {/* LEFT – contact info */}
        <div className="contact-section__left">
          <motion.span
            className="contact-section__badge"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Contact Us
          </motion.span>

          <motion.p
            className="contact-section__headline"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            Send us a message and leave your contact details. One of our
            advisors will reach out to you shortly.
          </motion.p>

          <ul className="contact-section__checklist" role="list">
            {checkItems.map((item, i) => (
              <motion.li
                key={item}
                className="contact-section__check-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="contact-section__check-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="rgba(110,231,183,0.2)" stroke="rgba(110,231,183,0.6)" strokeWidth="1.5" />
                    <polyline points="8 12 11 15 16 9" stroke="#6ee7b7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* RIGHT – Talk to us form card */}
        <motion.div
          className="contact-section__form-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="contact-section__form-title">Talk to us</h3>
          <form className="contact-section__form" onSubmit={(e) => e.preventDefault()}>
            <div className="contact-section__field">
              <input type="text" placeholder="Name" className="contact-section__input" />
            </div>
            <div className="contact-section__field">
              <input type="email" placeholder="Email" className="contact-section__input" />
            </div>
            <div className="contact-section__field">
              <textarea placeholder="Message" className="contact-section__textarea" rows={4} />
            </div>
            <button type="submit" className="contact-section__submit">Submit</button>
          </form>
        </motion.div>
      </div>

      {/* BOTTOM BAR / FOOTER */}
      <motion.div
        className="contact-section__footer-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Col 1: Logo */}
        <div className="contact-section__footer-col contact-section__footer-col--logo">
          <img
            src={`${process.env.PUBLIC_URL}/logo.png`}
            alt="Elite Wealth Club"
            className="contact-section__footer-logo"
          />
        </div>

        <div className="contact-section__footer-divider" />

        {/* Col 2: Details */}
        <div className="contact-section__footer-col contact-section__footer-col--details">
          <div className="contact-section__footer-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>
            <span>503, Nassima Tower, Sheikh Zayed Road, Dubai</span>
          </div>
          <div className="contact-section__footer-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            <span>info@theelitewealth.ae</span>
          </div>
          <div className="contact-section__footer-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.03 21c.73 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
            <span>+971 52 282 4163</span>
          </div>
        </div>

        <div className="contact-section__footer-divider" />

        {/* Col 3: Socials */}
        <div className="contact-section__footer-col contact-section__footer-col--socials">
          <span className="contact-section__footer-socials-label">Socials:</span>
          <div className="contact-section__footer-socials-icons">
            {/* Instagram */}
            <a href="#instagram" className="contact-section__social-icon" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            {/* Facebook */}
            <a href="#facebook" className="contact-section__social-icon" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            {/* LinkedIn */}
            <a href="#linkedin" className="contact-section__social-icon" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            {/* TikTok */}
            <a href="#tiktok" className="contact-section__social-icon" aria-label="TikTok">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
