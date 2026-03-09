import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import EliteHeader from "../components/layout/EliteHeader";
import ContactSection from "../components/sections/ContactSection";
import "./ContactPage.css";

export default function ContactPage() {
  const [memberType, setMemberType] = useState("highnet");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page">
      {/* ── Header ── */}
      <div className="contact-page__header-wrap">
        <EliteHeader />
      </div>

      {/* ── Hero Form Section ── */}
      <section className="cp-hero">
        <div
          className="cp-hero__bg"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/contact-hero.png)` }}
        />
        <div className="cp-hero__overlay" />

        <div className="cp-hero__content">
          <motion.h1
            className="cp-hero__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Get a Call back from us
          </motion.h1>

          <motion.div
            className="cp-hero__form-card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Radio group */}
            <div className="cp-form__radio-group">
              <label className="cp-form__radio-label">
                <input
                  type="radio"
                  name="memberType"
                  value="highnet"
                  checked={memberType === "highnet"}
                  onChange={() => setMemberType("highnet")}
                  className="cp-form__radio-input"
                />
                <span className="cp-form__radio-custom" />
                High NetWorth Individual
              </label>
              <label className="cp-form__radio-label">
                <input
                  type="radio"
                  name="memberType"
                  value="investor"
                  checked={memberType === "investor"}
                  onChange={() => setMemberType("investor")}
                  className="cp-form__radio-input"
                />
                <span className="cp-form__radio-custom" />
                Investor
              </label>
            </div>

            {/* Form fields */}
            <div className="cp-form__fields">
              <div className="cp-form__field">
                <label className="cp-form__label">Name</label>
                <input type="text" className="cp-form__input" placeholder="Full name" />
              </div>
              <div className="cp-form__field">
                <label className="cp-form__label">Business Email</label>
                <input type="email" className="cp-form__input" placeholder="email@company.com" />
              </div>
              <div className="cp-form__field">
                <label className="cp-form__label">Phone Number</label>
                <input type="tel" className="cp-form__input" placeholder="+1 000 000 0000" />
              </div>
              <div className="cp-form__field">
                <label className="cp-form__label">LinkedIn</label>
                <input type="url" className="cp-form__input" placeholder="linkedin.com/in/yourprofile" />
              </div>
              <div className="cp-form__field">
                <label className="cp-form__label">Instagram</label>
                <input type="text" className="cp-form__input" placeholder="@yourhandle" />
              </div>
              <button type="submit" className="cp-form__submit">Submit</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Reuse existing ContactSection (footer) ── */}
      <ContactSection />
    </div>
  );
}
