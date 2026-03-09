import React from 'react';
import { motion } from 'framer-motion';
import './WelcomeSection.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
});

function WelcomeSection() {
  return (
    <section className="welcome-section" aria-label="Welcome to the Elite Wealth Club">
      <div
        className="welcome-section__background-image"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/elite-bg.jpg)`,
        }}
      />
      <div className="welcome-section__overlay" />
      <div className="welcome-section__content">
        <motion.h2 className="welcome-section__title" {...fadeUp(0)}>
          Welcome to the Elite Wealth Club
        </motion.h2>
        <motion.p className="welcome-section__paragraph" {...fadeUp(0.3)}>
          The world's ultimate investment club. Become a member and gain access to our exclusive
          curated events near you. Our unique regulated products and strategies allow you to save
          in many cases 50% or more in property or high-value acquisition. Join us, and discover our
          world of opportunities in luxury destinations around the world. Click below to learn more.
        </motion.p>
      </div>
    </section>
  );
}

export default WelcomeSection;
