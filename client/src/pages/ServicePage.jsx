import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ContactSection from "../components/sections/ContactSection";
import serviceData from "./serviceData";
import "./ServicePage.css";

export default function ServicePage() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [startIndex, setStartIndex] = useState(0);

  const data = serviceData[slug] || serviceData["exclusive-investment"];
  const { eventCards } = data;

  useEffect(() => {
    window.scrollTo(0, 0);
    setStartIndex(0);
  }, [slug]);

  const visibleCards = eventCards.slice(startIndex, startIndex + 4);
  const canPrev = startIndex > 0;
  const canNext = startIndex + 4 < eventCards.length;

  const headingParts = data.heading.split("\n");

  return (
    <div className="service-page">
      {/* ── Hero ── */}
      <section className="sp-hero">
        <motion.div
          className="sp-hero__bg"
          style={{
            backgroundImage: `url(${data.heroImage})`,
          }}
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
          key={slug}
        />
        <div className="sp-hero__overlay" />

        <div className="sp-hero__header">
          <motion.button
          type="button"
          className="sp-hero__back"
          onClick={() => navigate(-1)}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="sp-hero__back-arrow" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </span>
          Back to Service
          </motion.button>
        </div>

        <motion.div
          className="sp-hero__title-wrap"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          key={`title-${slug}`}
        >
          <h1 className="sp-hero__title">{data.heroTitle}</h1>
          <button
            type="button"
            className="sp-hero__learn-btn"
            onClick={() => document.getElementById('sp-content')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
            <span className="sp-hero__learn-arrow" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
          </button>
        </motion.div>
      </section>

      {/* ── Content ── */}
      <section className="sp-content" id="sp-content">
        <div className="sp-content__inner">
          <div className="sp-content__left">
            <motion.h2
              className="sp-content__heading"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {headingParts.map((part, i) => (
                <span key={i}>
                  {part}
                  {i < headingParts.length - 1 && <br />}
                </span>
              ))}
            </motion.h2>

            {data.paragraphs.map((text, i) => (
              <motion.p
                key={i}
                className="sp-content__body"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {text}
              </motion.p>
            ))}
          </div>

          <div className="sp-content__right">
            <motion.blockquote
              className="sp-content__quote"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              {data.quote}
            </motion.blockquote>

            <motion.button
              type="button"
              className="sp-content__experts-btn"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="sp-content__experts-avatar" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
              </span>
              Talk to our Experts
            </motion.button>
          </div>
        </div>

        {/* ── Event Cards Carousel ── */}
        <div className="sp-carousel">
          <div className="sp-carousel__header">
            <span className="sp-carousel__label">Upcoming Events</span>
            <div className="sp-carousel__nav">
              <button
                type="button"
                className="sp-carousel__nav-btn"
                onClick={() => setStartIndex(i => Math.max(0, i - 1))}
                disabled={!canPrev}
                aria-label="Previous"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
              </button>
              <button
                type="button"
                className="sp-carousel__nav-btn"
                onClick={() => setStartIndex(i => Math.min(eventCards.length - 4, i + 1))}
                disabled={!canNext}
                aria-label="Next"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
          </div>

          <div className="sp-carousel__track">
            {visibleCards.map((card, i) => (
              <motion.div
                key={card.id}
                className="sp-carousel__card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="sp-carousel__card-image-wrap">
                  <div className="sp-carousel__card-bg" style={{ backgroundImage: `url(${card.image})` }} />
                  <div className="sp-carousel__card-overlay" />
                  <span className="sp-carousel__card-date">{card.date}</span>
                  <div className="sp-carousel__card-bottom">
                    <p className="sp-carousel__card-title">{card.title}</p>
                    <p className="sp-carousel__card-location">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                      {card.location}
                    </p>
                    <button type="button" className="sp-carousel__card-btn">View Details</button>
                  </div>
                </div>
                <div className="sp-carousel__card-expanded">
                  <div className="sp-carousel__card-expanded-inner">
                    <p className="sp-carousel__card-members">{card.members}</p>
                    <p className="sp-carousel__card-desc">{card.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
