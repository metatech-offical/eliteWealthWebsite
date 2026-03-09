import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';

const HEADLINE = 'The Ultimate Investment Club';

function HeroSection({ backgroundImage }) {
  const words = HEADLINE.split(' ');

  return (
    <section className="hero-section" aria-label="Hero">
      {backgroundImage && (
        <motion.img
          src={backgroundImage}
          alt=""
          className="hero-section__bg-image"
          role="presentation"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: 'easeOut' }}
        />
      )}

      {/* Bottom gradient fade */}
      <div className="hero-section__fade" aria-hidden="true" />

      {/* Content wrap */}
      <div className="hero-section__content">
        {/* Word-by-word stagger reveal */}
        <h1 className="hero-section__headline" aria-label={HEADLINE}>
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="hero-section__word"
              initial={{ opacity: 0, y: 28, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 0.7,
                delay: 2.6 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>
      </div>
    </section>
  );
}

export default HeroSection;
