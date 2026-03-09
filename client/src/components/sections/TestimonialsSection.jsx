import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./TestimonialsSection.css";

const testimonials = [
  {
    quote:
      "What stood out was their clarity and conviction. From our first meeting, they brought structure, support and a level of commitment that helped me exceptionally.",
    name: "Chris Hughes",
    role: "CEO | Gemini Skincare",
  },
  {
    quote:
      "Joining the Elite Wealth Club has completely transformed how I approach investment. The access to exclusive opportunities is unparalleled.",
    name: "James Whitfield",
    role: "Private Equity Director",
  },
  {
    quote:
      "The personalised advisory service and curated events have given me direct access to deals I never would have found on my own.",
    name: "Sophia Laurent",
    role: "Portfolio Manager",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="testimonials-section" aria-label="Testimonials">
      {/* Full-bleed background image */}
      <div
        className="testimonials-section__bg"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/image%2031.png)` }}
      />
      <div className="testimonials-section__overlay" />

      <div className="testimonials-section__inner">
        {/* Badge – top left */}
        <motion.span
          className="testimonials-section__badge"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Testimonials
        </motion.span>

        {/* Right column: heading + card + arrows */}
        <div className="testimonials-section__right">
          <motion.h2
            className="testimonials-section__title"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Step into our<br />Worldwide Community
          </motion.h2>

          {/* Testimonial card */}
          <div className="testimonials-section__card-wrapper">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className="testimonials-section__card"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Quote icon */}
                <div className="testimonials-section__quote-icon" aria-hidden="true">
                  <svg width="36" height="30" viewBox="0 0 36 30" fill="none">
                    <path d="M0 30V18.75C0 8.4375 5.25 2.25 15.75 0L17.25 2.625C12.375 3.9375 9.75 6.9375 9 11.625H15.75V30H0ZM20.25 30V18.75C20.25 8.4375 25.5 2.25 36 0L37.5 2.625C32.625 3.9375 30 6.9375 29.25 11.625H36V30H20.25Z" fill="white" fillOpacity="0.9"/>
                  </svg>
                </div>

                <p className="testimonials-section__quote">
                  {testimonials[current].quote}
                </p>

                <div className="testimonials-section__author">
                  <span className="testimonials-section__name">{testimonials[current].name}</span>
                  <span className="testimonials-section__role">{testimonials[current].role}</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Nav arrows */}
            <div className="testimonials-section__arrows">
              <button
                className="testimonials-section__arrow"
                onClick={prev}
                aria-label="Previous testimonial"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                className="testimonials-section__arrow"
                onClick={next}
                aria-label="Next testimonial"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
