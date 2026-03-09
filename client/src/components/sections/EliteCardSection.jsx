import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./EliteCardSection.css";

const cardInnerVariants = {
  hidden: { opacity: 0 },
  visible: (delay) => ({
    opacity: 1,
    transition: { duration: 0.6, delay },
  }),
};

export default function EliteCardSection() {
  const sectionRef = useRef(null);
  
  // Create true scroll-based animation for the card as requested in Figma
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [0.75, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

  return (
    <section ref={sectionRef} className="elite-card-section" aria-label="Elite Wealth Club Card">
      <div className="elite-card-section__container">
        {/* Card – scales up naturally on scroll */}
        <motion.div
          className="elite-card-section__card"
          style={{ scale, opacity }}
        >
          <motion.div
            className="elite-card-section__brand"
            variants={cardInnerVariants}
            initial="hidden"
            whileInView="visible"
            custom={0.6}
            viewport={{ once: true }}
          >
            elite
          </motion.div>
          <motion.div
            className="elite-card-section__subbrand"
            variants={cardInnerVariants}
            initial="hidden"
            whileInView="visible"
            custom={0.75}
            viewport={{ once: true }}
          >
            WEALTH CLUB
          </motion.div>
          <motion.div
            className="elite-card-section__name"
            variants={cardInnerVariants}
            initial="hidden"
            whileInView="visible"
            custom={0.9}
            viewport={{ once: true }}
          >
            ALICIA ADAMS
          </motion.div>
          <motion.div
            className="elite-card-section__number"
            variants={cardInnerVariants}
            initial="hidden"
            whileInView="visible"
            custom={1.0}
            viewport={{ once: true }}
          >
            No. 342756
          </motion.div>
        </motion.div>

        {/* Text box – slides up after card */}
        <motion.div
          className="elite-card-section__text-box"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="elite-card-section__title">
            Invest with absolute ease
          </h2>
          <p className="elite-card-section__paragraph">
            Your Elite Wealth Club card enables smooth, secure transactions and
            privileged access across investments, services, and curated
            experiences.
          </p>
          <button type="button" className="elite-card-section__btn">
            Join Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
