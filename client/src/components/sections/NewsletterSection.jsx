import { motion } from "framer-motion";
import "./NewsletterSection.css";

export default function NewsletterSection() {
  return (
    <section className="newsletter-section" aria-label="Newsletter">
      <div className="newsletter-section__container">
        <motion.div
          className="newsletter-section__card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/image%2032.png)`,
          }}
        >
          <div className="newsletter-section__overlay"></div>
          <div className="newsletter-section__content">
            <h2 className="newsletter-section__title">Path to Smart Ownership</h2>
            <form className="newsletter-section__form" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email" 
                className="newsletter-section__input" 
              />
              <button type="submit" className="newsletter-section__submit">Join Now</button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
