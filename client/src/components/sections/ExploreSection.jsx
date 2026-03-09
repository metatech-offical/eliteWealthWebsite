import React from 'react';
import { motion } from 'framer-motion';
import './ExploreSection.css';

const cards = [
  {
    src: 'explore-left.png',
    className: 'explore-section__card--left',
    imgClassName: 'explore-section__img--left',
    title: "We don't just keep your Investment safe.",
    delay: 0.15,
  },
  {
    src: 'explore-middle.png',
    className: 'explore-section__card--middle',
    imgClassName: 'explore-section__img--middle',
    title:
      'Experience unparalleled access to curated opportunities designed exclusively for members of the Elite Wealth Club.',
    delay: 0,
  },
  {
    src: 'explore-right.png',
    className: 'explore-section__card--right',
    imgClassName: 'explore-section__img--right',
    title: 'Learn how we save you 50% or more on your next acquisition',
    delay: 0.3,
  },
];

function ExploreSection() {
  return (
    <section className="explore-section" aria-label="Explore">
      <motion.button
        type="button"
        className="explore-section__btn"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        Know us better
      </motion.button>

      <div className="explore-section__cards">
        {cards.map((card) => (
          <motion.div
            key={card.src}
            className={`explore-section__card ${card.className}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.9, delay: card.delay, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="explore-section__image-wrapper">
              <img
                src={`${process.env.PUBLIC_URL}/images/${card.src}`}
                alt=""
                className={`explore-section__img ${card.imgClassName}`}
              />
            </div>
            <div className="explore-section__card-content">
              <h3 className="explore-section__title">{card.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ExploreSection;
