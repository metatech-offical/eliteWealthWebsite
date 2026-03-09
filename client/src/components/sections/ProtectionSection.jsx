import { motion } from "framer-motion";
import "./ProtectionSection.css";

const listItems = [
  "Built in 2013 with a singular focus on being the safest place to hold Bitcoin, supported by a proven track record spanning over a decade.",
  "Operates as a fully licensed bank and Bitcoin custodian, providing institutional-grade oversight and guaranteed protections for fiat deposits.",
  "Secured through decentralised multi-party computation (MPC) technology alongside a global network of undisclosed, high-security bunkers protected by armed guards.",
  "Designed and managed by experts, this security infrastructure has protected members' Bitcoin holdings without compromise for more than ten years.",
];

export default function ProtectionSection() {
  const bgImage = `${process.env.PUBLIC_URL || ""}/images/protection-bg.png`;

  return (
    <section className="protection-section" aria-label="Protection and Legacy">
      {/* Background image zooms out subtly as section enters */}
      <motion.img
        src={bgImage}
        alt=""
        className="protection-section__bg-image"
        initial={{ scale: 1.06 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="protection-section__inner">
        {/* Glass card slides up */}
        <motion.div
          className="protection-section__card"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h2
            className="protection-section__title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Ensure your legacy with best-in-class protections.
          </motion.h2>

          <ul className="protection-section__list">
            {listItems.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                {item}
              </motion.li>
            ))}
          </ul>

          <motion.div
            className="protection-section__btn-wrap"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <button type="button" className="protection-section__btn">
              Join Now
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
