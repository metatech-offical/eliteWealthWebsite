import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import EliteHeader from './components/layout/EliteHeader';
import HeroSection from './components/layout/HeroSection';
import WelcomeSection from './components/sections/WelcomeSection';
import SavingsHighlightSection from './components/sections/SavingsHighlightSection';
import ExploreSection from './components/sections/ExploreSection';
import ServicesTimelineSection from './components/sections/ServicesTimelineSection';
import EliteCardSection from './components/sections/EliteCardSection';
import ProtectionSection from './components/sections/ProtectionSection';
import FiguresSection from './components/sections/FiguresSection';
import InvestDreamsSection from './components/sections/InvestDreamsSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import NewsletterSection from './components/sections/NewsletterSection';
import ContactSection from './components/sections/ContactSection';
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';

const SPLASH_DURATION_MS = 2500;

function HomePage() {
  const [splashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashVisible(false);
    }, SPLASH_DURATION_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app" role="main">
      {/* Splash */}
      <div
        className={`app__splash ${splashVisible ? 'app__splash--visible' : 'app__splash--hidden'}`}
        aria-hidden={!splashVisible}
        aria-label="Loading"
      >
        <section className="app__hero app__hero--primary" aria-label="Home">
          <img
            src={`${process.env.PUBLIC_URL}/logo.png`}
            className="app__logo"
            alt="Elite Wealth Club"
          />
        </section>
      </div>

      {/* Main */}
      <div
        className={`app__main ${splashVisible ? 'app__main--hidden' : 'app__main--visible'}`}
        aria-label="The Ultimate Investment Club"
      >
        <section className="app__screen app__screen--two">
          <EliteHeader />
          <HeroSection backgroundImage={`${process.env.PUBLIC_URL}/hero-bg.png?v=3`} />
        </section>
        <WelcomeSection />
        <SavingsHighlightSection />
        <ExploreSection />
        <ServicesTimelineSection />
        <EliteCardSection />
        <ProtectionSection />
        <FiguresSection />
        <InvestDreamsSection />
        <TestimonialsSection />
        <NewsletterSection />
        <ContactSection />
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services/:slug" element={<ServicePage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
