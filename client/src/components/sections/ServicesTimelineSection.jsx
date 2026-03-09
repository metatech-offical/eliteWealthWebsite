import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./ServicesTimelineSection.css";

const timelineData = [
  {
    title: "Exclusive Investment Opportunity",
    subtitle: "Opportunities reserved for a chosen few.",
    slug: "exclusive-investment"
  },
  {
    title: "Investment advisory",
    subtitle: "Strategic guidance backed by insight.",
    slug: "investment-advisory"
  },
  {
    title: "Priority Access to Opportunities",
    subtitle: "Be first where it matters most.",
    slug: "priority-access"
  },
  {
    title: "VIP Events",
    subtitle: "Where influence meets experience.",
    slug: "vip-events"
  },
  {
    title: "Tailored Services",
    subtitle: "Built around you, never off-the-shelf.",
    slug: "tailored-services"
  },
  {
    title: "Exclusive Privileges",
    subtitle: "Benefits beyond what's publicly offered.",
    slug: "exclusive-privileges"
  }
];

function TimelineItem({ item, index }) {
  const navigate = useNavigate();

  return (
    <motion.div
      className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="timeline-dot"
        whileInView={{
          scale: 1.4,
          boxShadow: "0 0 20px rgba(255,120,60,0.8)"
        }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      />

      <div className="timeline-content">
        <h3>{item.title}</h3>
        <p>{item.subtitle}</p>
        <button
          type="button"
          className="learn-btn"
          onClick={() => navigate(`/services/${item.slug}`)}
        >
          Learn More
          <span className="learn-btn__arrow" aria-hidden="true">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </span>
        </button>
      </div>
    </motion.div>
  );
}

export default function ServicesTimelineSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="services" ref={ref} className="services-timeline">
      <div className="services-timeline__inner">
        <button type="button" className="services-timeline__btn">
          Services
        </button>
        <div className="timeline-line">
          <motion.div
            className="timeline-progress"
            style={{ height }}
          />
        </div>

        {timelineData.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
