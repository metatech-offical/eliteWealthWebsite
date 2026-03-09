import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import "./FiguresSection.css";

const stats = [
  { value: 3, suffix: "K", label: "TRUSTED CUSTOMERS" },
  { value: 30, suffix: "K +", label: "TOKEN ACCESS" },
  { value: 1, suffix: "M", label: "REPORTS GENERATED" },
  { value: 10, suffix: "", label: "SUPPORTED LANGUAGES" },
];

export default function FiguresSection() {
  const gridRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="figures-section" aria-label="Figures">
      <div className="figures-section__container">
        {/* Left – badge + text */}
        <div className="figures-section__left">
          <motion.span
            className="figures-section__badge"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Figures
          </motion.span>
          <motion.p
            className="figures-section__text"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an printer scrambled it to make a type specimen.
          </motion.p>
        </div>

        {/* Right – stats grid */}
        <div ref={gridRef} className="figures-section__grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="figures-section__stat"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="figures-section__value">
                {inView ? (
                  <CountUp
                    key={`${index}-${inView}`}
                    start={0}
                    end={stat.value}
                    duration={1.4}
                    separator={stat.value >= 1000 ? "," : ""}
                    suffix={stat.suffix}
                  />
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>
              <div className="figures-section__label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
