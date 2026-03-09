import React from 'react';
import { motion } from 'framer-motion';
import './SavingsHighlightSection.css';

function SavingsHighlightSection() {
  return (
    <section className="savings-highlight" aria-label="Savings highlight">
      <motion.div
        className="savings-highlight__card-wrap"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/images/savings-luxury.png`}
          alt=""
          className="savings-highlight__image"
        />
        <div className="savings-highlight__overlay" aria-hidden="true" />
        <div className="savings-highlight__content">
          <motion.div
            className="headline"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="top-text">
              Discover how you can unlock
              <br />
              exclusive access to savings of
            </p>
            <p className="over-and-percentage">
              <span className="over-text">over </span>
              <span className="percentage">40%.</span>
            </p>
          </motion.div>
          <div className="savings-highlight__cards">
            {['Direct access to strategic asset acquisition', 'A private suite of elite privileges.'].map((text, i) => (
              <motion.div
                key={i}
                className="savings-highlight__card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.35 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
              >
                {text}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default SavingsHighlightSection;
