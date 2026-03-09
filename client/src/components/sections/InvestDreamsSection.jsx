import { motion } from "framer-motion";
import "./InvestDreamsSection.css";

export default function InvestDreamsSection() {
  return (
    <section className="invest-dreams" aria-label="Invest in your Dreams">
      <div className="invest-dreams__inner">

        {/* LEFT – phone-style card */}
        <motion.div
          className="invest-dreams__phone-card"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Card image */}
          <img
            src={`${process.env.PUBLIC_URL}/images/image%2029.png`}
            alt="Invest in your Dreams"
            className="invest-dreams__phone-img"
          />

          {/* Contact Us Now – top right pill */}
          <div className="invest-dreams__contact-pill">
            <span className="invest-dreams__contact-dot">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#e17055">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.03 21c.73 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
            </span>
            <span>Contact Us Now</span>
          </div>

          {/* Bottom label */}
          <div className="invest-dreams__card-footer">
            <span className="invest-dreams__card-label">Invest in your Dreams</span>
            <div className="invest-dreams__talk-pill">
              <img
                src={`${process.env.PUBLIC_URL}/logo.png`}
                alt="advisor"
                className="invest-dreams__talk-avatar"
              />
              <span>Talk to our Experts</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT – membership card */}
        <motion.div
          className="invest-dreams__info-card"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="invest-dreams__title">
            Become a member USD 1,000/YEAR
          </h2>

          <p className="invest-dreams__desc">
            Experience premium banking designed for your financial future. For USD 1,000/year,
            you'll unlock world-class services that provide top-tier security, personalised
            support, and seamless transactions wherever you are.
          </p>

          <div className="invest-dreams__actions">
            <a href="#join" className="invest-dreams__btn-primary">Unlock Membership</a>
            <a href="#learn" className="invest-dreams__btn-secondary">
              Learn More
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
